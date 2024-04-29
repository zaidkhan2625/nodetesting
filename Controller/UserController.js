let data = [
    {"name": "Arjun Tripathi", "course": "MCA", "roll_no": "14", "id": 1},
    {"name": "Rahul Durgapal", "course": "MCA", "roll_no": "36", "id": 2},
    {"name": "Aman Yadav", "course": "MCA", "roll_no": "08", "id": 3}
];
 const getquery =(req , res ) =>{
    console.log("hi controller");
    // console.log(req.query.price);
    const {price , number} = req.query;
    const result = data.filter((item) =>{
        return item.id <= price;
    });
    res.send({result});
    console.log(number);
};
const ProductIdPrice = (req, res) => {
    const productId = req.params.id;
    const price = req.params.p;

    const responseMessage = `Product ID: ${productId}, Price: ${price}, hi i am in product route`;
    res.send(responseMessage);


    // The following log statement won't affect the response sent to the client
    console.log("no need for result");
};
const getdata = (req , res )=>{
    res.json({ message: "hello", data: data , todaydate:todaydate() }); // Combine "hello" with the JSON data
};

module.exports = {getquery ,ProductIdPrice,getdata};