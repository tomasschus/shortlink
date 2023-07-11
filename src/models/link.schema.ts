// models/Note.ts
import mongoose, { Document, Schema } from 'mongoose';
import { Link } from '../types/link.interface';

export interface iLink extends Link, Document {}

const LinkSchema: Schema = new Schema(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    date: { type: Date, default: Date.now },
  }
);

export default mongoose.model<iLink>('iLink', LinkSchema);
