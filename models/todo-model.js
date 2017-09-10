import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean,
});

export default mongoose.model('Todos', todoSchema);
