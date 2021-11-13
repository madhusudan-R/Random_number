
const players = require('../Models/players');


exports.savePlayers = (req, res) => {
    
    const { player, number } = req.body;


const playerObj = new players({
    player:player,
    number: number
});

playerObj.save().then(result => {
    res.status(200).json({
        message: 'Player entered',
        player: result
    })
}).catch(error => {
    res.status(500).json({
        message: 'Error in database',
        error: error
    })
})

}




