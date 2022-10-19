import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { required: true,type: "String"},
    email: { required: true, type: "String", unique: true },
    password: { required: true, type: "String"}

})
export default mongoose.model("User", UserSchema);