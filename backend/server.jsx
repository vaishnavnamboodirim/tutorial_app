const express = require("express")
const cors = require("cors")

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//connecting to mongoose

const db = require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to the DB");
})
.catch(err => {
    console.log(err);
    process.exit();
});


app.get("/", (req, res)=>{
    res.json({message: "welcome to backend"})
});

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('server is running')
});


