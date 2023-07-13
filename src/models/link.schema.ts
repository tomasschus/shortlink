import mongoose, { Document, Schema } from 'mongoose';

export interface Link extends Document {
  originalUrl: string;
  shortUrl: string;
  date: Date;
}

const linkSchema: Schema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const LinkModel = mongoose.models.link || mongoose.model<Link>('link', linkSchema);

export default LinkModel;
