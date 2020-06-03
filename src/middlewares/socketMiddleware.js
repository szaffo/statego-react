import {getRoomId, getSocket} from "../socket/client";
import {roomCreated} from "../actions/stageActions";
import {showError} from "../actions/errorActions";

export const socketMiddleware = (store) => (next) => (action) => {
    const socket = getSocket();

    switch (action.type) {

        // Create room action is never reach the reducer.
        // When the socket sends back the acknowledgement,
        // an other action will be dispatched (ROOM_CREATED)
        case 'CREATE_ROOM':
            socket.emit('create-room', (data) => {
                if (data.status === 'ok') {
                    store.dispatch(roomCreated(data.roomId));
                } else {
                    store.dispatch(showError('Nem sikerült létrehozni a szobát.'));
                    console.log(data.message);
                }
            });
            break;

        // Join room action is never reach the reducer.
        // When the socket sends back the acknowledgement,
        // an other action will be dispatched (ROOM_IS_FULL)
        case 'JOIN_ROOM':
            socket.emit("join-room", action.roomId, (data) => {
                if (data.status !== 'ok')  {
                    store.dispatch(showError('Nem sikerült csatlakozni a szobához.'));
                    console.log(data.message);
                } else {
                    window.addEventListener('beforeunload', async function (e) {
                        console.log(action.roomId)
                        await socket.emit('leave-room', action.roomId);
                    });
                }
            });
            break;

        // These actions not needed to send to the server
        // and they won't be synced.
        case 'TOGGLE_ENEMY_READY':
        case 'ERROR':
        case 'ERROR_OFF':
        case 'ROOM_IS_FULL':
        case 'ROOM_CREATED':
        case 'SELECT_PIECE':    // This is a private action. It should not be synced with the other player.
        case 'FIGHT_END':       // This action is fired by both clients, with the same data, automatically. No need to sync
            next(action);
            break;

        // Every other action will be sen to the server, and
        // if the server responds with 'ok', it will be-dispatched,
        // but this time with the 'synced' flag set;
        default:
            // If the flag is set, that means this action
            // was previously processed by the server. It's like a pass from the server.
            // In this case, it'a sent to the next middleware
            if (action.synced) {
                next(action);
                break;
            }


            // If the synced flag is not set, than it's have to be sent to the server first.
            // When the server sends back an 'ok' status, it's re-dispatched with the  synced flag set,
            // so when next time the middleware catches it, it's gonna send it to the next
            // middleware instead of the server.
            // This means there is no action that can be dispatched without the server knowing it.
            // Except those that goes in the non-default case of the switch.
            action.synced = true;
            action.owner = store.getState().round.thisPlayerIs;
            socket.emit('sync-action', getRoomId(), action, 'true', (data) => {
                if (data.status === 'ok') {
                    store.dispatch(action);
                } else {
                    store.dispatch(showError('Nem sikerült szinkronizálni a játékteret.'));
                    console.log(data.message);
                    action.synced = false;
                }
            })
    }

}