import LinkModel from "../models/link.schema";
import { generarCombinacion } from "./generarCombinacion";

export async function createUniqueLink(originalUrl: string, retries = 5) {
    if (retries === 0) throw new Error('Failed to generate unique short URL');

    const shortUrl = generarCombinacion();
    const existingLink = await LinkModel.findOne({ shortUrl });

    if (existingLink) {
        return createUniqueLink(originalUrl, retries - 1);
    }

    const newLink = new LinkModel({ originalUrl, shortUrl });
    return newLink.save();
}