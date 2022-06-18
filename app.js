

const FetchData = async () => {

    const respuesta = await axios.get('https://www.freetogame.com/api/games?platform=pc');
    const data = await respuesta.data;
    console.log(data)



    data.forEach(game => {
        // console.log(game)

        const games ={
            id: game.id,
            name: game.title
        }

        // console.log(games.id)
        // console.log(games.name)

        
    });


}

FetchData();