const express = require('express'),
app = express(),
keys = require('./config/keys');
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://localhost/advancedproject2'
Strain = require('./Models/strain.model.js'),
User = require('./Models/user.model.js'),
UserRoutes = require('./Controller/UserRoutes.js'),
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

mongoose.set('useCreateIndex', true);
mongoose.connect(myDB, { useNewUrlParser: true });
app.use('/user', UserRoutes) // localhost/user/<Route>

app.listen(port, (error) => {
	if (!error) {
		console.log('Listening on port', port);
	} else {
		console.log(error);
	}
});
