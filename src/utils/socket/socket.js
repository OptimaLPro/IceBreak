import io from 'socket.io-client';
export const socket = io('http://localhost:3001');


export const connectToSocket = () => {
    socket.connect();
};

export const disconnectFromSocket = () => {
    socket.disconnect();
};

export const createRoom = (gamePIN) => {
    socket.emit('createRoom', { gamePIN });
}

export const roomCreated = (callback) => {
    socket.on('roomCreated', (gamePIN) => {
        console.log(`Room created: ${gamePIN}`);
        callback(gamePIN);
    });
};

export const checkRoom = (gamePIN) => {
    socket.emit('checkRoom', { gamePIN });
};

export const roomChecked = (callback) => {
    socket.on('roomChecked', (data) => {
        callback(data);
    });
};

export const joinRoom = (gamePIN, name, avatar) => {
    console.log('Joining room');
    socket.emit('joinRoom', { gamePIN, name, avatar });
};

export const roomJoined = () => {
    socket.on('roomJoined', (data) => {
        if (data) {
            console.log('Room joined successfully');
        } else {
            console.log('Room not joined');
        }
    });
};

export const checkIfRoomOwner = (gamePIN) => {
    socket.emit('checkRoomOwner', { gamePIN });
};

export const startGame = (gamePIN) => {
    socket.emit('startGame', { gamePIN });
}

export const getPlayers = (gamePIN) => {
    socket.emit('getPlayers', { gamePIN });
}

export const leaveRoom = () => {
    socket.emit('leaveRoom');
};


