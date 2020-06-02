import {getRoomId, getSocket} from "../socket/client";
import {roomCreated} from "../actions/stageActions";


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
                }
            });
            break;

        // Join room action is never reach the reducer.
        // When the socket sends back the acknowledgement,
        // an other action will be dispatched (ROOM_IS_FULL)
        case 'JOIN_ROOM':
            socket.emit("join-room", action.roomId, () => {});
            break;

        // These actions came from the websocket server
        case 'ROOM_IS_FULL':
        case 'ROOM_CREATED':
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
            socket.emit('sync-action', getRoomId(), action, 'true', (data) => {
                if (data.status === 'ok') {
                    store.dispatch(action);
                }
            })
    }

}