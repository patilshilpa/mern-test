import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  to: { type: 'String', required: true },
  sub: { type: 'String', required: true },
  message: { type: 'String', required: true },
  
});

export default mongoose.model('Emails', postSchema);
