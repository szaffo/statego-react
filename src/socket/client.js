import {roomIsFull} from "../actions/roundActions";

const io = require('socket.io-client');

// Singleton
let socket = null; //io('http://webprogramozas.inf.elte.hu:3030');
let store = null;
let room = null;

/**
 * Returns the one and only socket client. If it's not exists yet, it will be created.
 * @returns {socket}
 */
export function getSocket() {
    if (socket) return socket;
    socket = io('http://webprogramozas.inf.elte.hu:3030');
    return socket;
}

/**
 * Registers listeners to the socket
 * @param _store
 */
export function registerListenersOnSocket(_store) {
    if (!store) {
        store = _store;
    }
    socket = getSocket();


    socket.on('room-is-full', ({roomId, player}) => {
        room = roomId;
        store.dispatch(roomIsFull(player));
    });


    socket.on('action-sent', ({action}) => {
        // This action is made by the other user usually.
        // That means the synced flag is set, so the socket middleware
        // will not send it to the server again.
        store.dispatch(action);
    });
}

/**
 * Returns the ID of the room that this socket is connected to
 * @returns {String}
 */
export function getRoomId() {
    return room;
}