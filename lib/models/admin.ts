import mongoose, { Schema, Document } from 'mongoose';
// import { unique } from 'next/dist/build/utils';

export interface IAdmin extends Document {
    username: string;
    password: string;
}

const AdminSchema = new Schema<IAdmin>({
    username: { type: String, required: [true, "plase provide Username"], unique: true },
    password: { type: String, required: true },
});

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

