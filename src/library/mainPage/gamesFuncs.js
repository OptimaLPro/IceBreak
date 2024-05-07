

export const getAllGames = async () => {
    const response = await fetch('http://localhost:8080/games');
    return await response.json();
};