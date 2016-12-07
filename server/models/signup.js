
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  phoneno: { type: 'String', required: true },
});

export default mongoose.model('Signup', signupSchema);
  