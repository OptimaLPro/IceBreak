

export const getAllGames = async () => {
    const response = await fetch('https://icebreak-backend.onrender.com/games');
    return await response.json();
};