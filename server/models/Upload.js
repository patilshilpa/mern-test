import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const uploadSchema = new Schema ({
	name : {
		type :String,
	},
	url : {
		type :String,
	
	},
});

export default mongoose.model('Upload', uploadSchema)