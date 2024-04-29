const express = require("express");
const todaydate = require("../Current");
// const app = express();
const router = express.Router();
const controller = require("../Controller/UserController");
// app.use(express.json());
// dotenv.config();

let data = [
    { "name": "Arjun Tripathi", "course": "MCA", "roll_no": "14", "id": 1},
    { "name": "Rahul Durgapal", "course": "MCA", "roll_no": "36", "id": 2 },
    { "name": "Aman Yadav", "course": "MCA", "roll_no": "08", "id": 3}
];
router.get('/' , controller.getdata);
router.post('/',(req , res) =>{
    // let items =data.map(item => item.id);
    // let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;
    let user =req.body;
    data.push(user);
    res.send("added in data");
});
router.put('/:id', (req, res) => {
    let found = data.map((item)=>{
        return item.id === parseInt(req.params.id);
    })
    if(found)
    {
        let updateData = 
        {
            id: found.id,
            name: req.body.name,
            course: req.body.course,
            roll_no: req.body.roll_no
        }
        let tgtindex = data.indexOf(found);
        data.splice(tgtindex , 1,updateData);
        res.status(200).send("updated succesfully");
    }
    else
    {
        res.send("can't update no such user exit ");
    }

    // res.send(req.params.id);
});
router.patch('/:id' , (req , res )=>{
    let found = data.map((item) =>{
        return data.id === parseInt(req.params.id);
    })
    if(found)
    {          
            if(req.body.name)          
            {
             found.name=req.body.name;
            }
            if(req.body.course)
            {
             found.course= req.body.course;
            }
            if(req.body.roll_no)
            {
                found.roll_no = req.body.roll_no;
            }
            res.status(201).send("succefully updted");
    }
    else
    {
        res.send("no such data exist ");
    }
})
router.get('/product/:id/price/:p', controller.ProductIdPrice);
router.get('/query',controller.getquery);
router.post('/user/details', (req, res) => {
    const { room,name } = req.body;

    const roomNumber = room.room;
    const fir = name.first;
    const otherProperty = room.otherProperty; 
    res.json({ roomNumber, otherProperty , fir });
    console.log("Your room number: ", roomNumber);
    console.log("Other property: ", otherProperty);
    console.log(fir);
});

module.exports = router;