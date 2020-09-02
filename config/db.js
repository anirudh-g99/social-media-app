mongoose = require('mongoose');
const config = require('config');
var db = '';
if (process.env.NODE_ENV !== 'production') {
	db = config.get('mongoURI'); //defined in default.json
} else {
	db = process.env.mongoURI;
}
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log('Connected to database');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
