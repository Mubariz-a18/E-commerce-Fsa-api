const home = (req,res) => {
    res.status(200);
    res.send("welcome To The E-commerce world")
};


const health = (req,res) => {
    res.status(201);
    res.send("UP")
}


module.exports= {home,health}