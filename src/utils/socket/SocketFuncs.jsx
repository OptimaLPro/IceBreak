// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// const socket = io('http://localhost:3001'); // Replace with your server URL

// const SocketFuncs = () => {
//   // Example room creation logic
//   const createRoom = () => {
//     const roomData = { roomId: 'room123', playerName: 'Player1' };
//     socket.emit('createRoom', roomData);
//   };

//   // Example joining room logic
//   const joinRoom = () => {
//     const roomData = { roomId: 'room123', playerName: 'Player2' };
//     socket.emit('joinRoom', roomData);
//   };

//   // Listen for room creation confirmation
//   useEffect(() => {
//     socket.on('roomCreated', (roomId) => {
//       console.log(`Room created: ${roomId}`);
//     });
//   }, []);

//   // Listen for room joined confirmation
//   useEffect(() => {
//     socket.on('roomJoined', (roomId) => {
//       console.log(`Joined room: ${roomId}`);
//     });
//   }, []);

//   return (
//     <div>
//       <button onClick={createRoom}>Create Room</button>
//       <button onClick={joinRoom}>Join Room</button>
//     </div>
//   );
// };

// export default SocketFuncs;
