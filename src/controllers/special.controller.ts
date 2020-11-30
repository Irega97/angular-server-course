import { Request, Response } from 'express';
import User from '../model/user';

export const special = async (req: Request, res: Response) => {
    const results = await User.find({}, "email");
    if(results) return res.status(200).json(results);
    else return res.status(404).json({"message": "User not found"});
}