const express = require('express');
let router = express.Router();

const objectData = {
    1 : {book: 'Bumi', author: 'tereliye'},
    2 : {book : 'bulan', author: 'tereliye'}
}

// read object data
router.get('/', (req, res, next) => {
    res.send(JSON.stringify(objectData));
});

// create object data
router.post('/', (req, res, next) => {
    let countId = Object.keys(objectData).length;

    objectData[countId+=1] = req.body;

    res.send(objectData);
});

// delete object data
router.delete('/:id', (req, res, next) => {
    delete objectData[req.params.id]

    console.log(req.params.id)
    res.send(objectData);
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
   
    objectData[id] = req.body;

    res.send(objectData)
});

module.exports = router;