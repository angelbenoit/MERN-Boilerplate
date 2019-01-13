const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const key = require('./config/key.js');
require('./models/User.js');
require('./services/passport.js');
mongoose.connect(key.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:['fdfvfgnhrfb']
}));

app.use(morgan('combined'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json({ type: '*/*' }));

require('./routes/authRoutes.js')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);