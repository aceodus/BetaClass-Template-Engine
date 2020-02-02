const express = require('express');
let router = express.Router();

const objectData = {
    1 : {book: 'Bumi', author: 'tereliye'},
    2 : {book : 'bulan', author: 'tereliye'}
}

// read object data
router.get('gi/', (req, res, next) => {
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

let arrayData = [
    {
        id: 1,
        todo: "Mengerjakan tugas"
    },
    {
        id: 2,
        todo: "Membaca buku"
    }
]

router.get('/array', (req, res, next) => {
    res.send(arrayData)
})

router.get('/array/:id', async (req, res, next) => {

    const row = arrayData.find(arr => arr.id == req.params.id)
    
    res.send(row);
})

router.post('/array', (req, res, next) => {
    let bodyData = {
        id: arrayData.length + 1,
        todo: req.body.todo
    }

    arrayData.push(bodyData);

    res.send(arrayData);
})

router.delete('/array/:id', (req, res, next) => {
    arrayData.splice(req.params.id,1);

    res.send(arrayData);
})

router.put('/array/:id', (req, res, next) => {
    arrayData[req.params.id].todo = req.body.todo

    res.send(arrayData);
})

module.exports = router;