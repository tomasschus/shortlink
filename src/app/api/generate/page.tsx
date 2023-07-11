import linkModel, { iLink } from "@/src/models/link.schema";
import dbConnect from "@/src/utils/db";
import { generarCombinacion } from "@/src/utils/generarCombinacion";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;

    const get = async () => {
        try {
            const notes = await linkModel.find({});
            res.status(200).json({ success: true, data: notes })
        } catch (error) {
            res.status(400).json({ success: false });
        }
    }

    const post = async () => {
        try {
            if (!body.originalUrl) {
                res.status(400).json({ success: false, message: "URL is required" });
                return;
            }

            const newLink: iLink = new linkModel({
                originalUrl: body.originalUrl,
                shortUrl: generarCombinacion()
            });

            const savedLink = await newLink.save();

            res.status(201).json({ success: true, data: savedLink });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    switch (method) {
        case 'GET':
            get();
            break;
        case 'POST':
            post();
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
