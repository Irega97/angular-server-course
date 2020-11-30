import { Request, Response } from 'express';
import User, {IUser} from '../model/user';
import config from '../config/config';
import jwt from 'jsonwebtoken';

async function signin(req: Request, res: Response){
    if(!req.body.email || !req.body.password){
        return res.status(400).json({message: "Introduce correo y contraseña"});
    }

    const user = await User.findOne({email: req.body.email, password: req.body.password});
    if(!user) return res.status(400).json({message: "Credenciales incorrectas"});
    return res.status(200).json({token: createToken(user)});
}

function createToken(user: IUser){
    return jwt.sign({id:user.id, name: user.email}, config.jwtSecret, {
        expiresIn: 86400
    });
}

export default { signin };