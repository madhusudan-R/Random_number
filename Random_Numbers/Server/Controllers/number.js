
const number = require('../Models/number.js');

exports.randomNumber = (req, res) => {

    let arr = [];
    for(let i = 0; i<15; i++){
        arr.push(Math.floor(Math.random() * 99) + 1);
    }

    const numberObj = new number({
        number: arr
    });
    

    numberObj.save().then( result => {
        res.status(200).json({
            message: 'Random numbers',
            numbers: result
        })
    }).catch(error => {
        res.status(500).json({
            message:'error',
            error: error
        })
    })
}

