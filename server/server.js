const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors')
    
require("./config/mongoose.config");
    
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);

const AllMyEventRoutes = require("./routes/event.routes");
AllMyEventRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));