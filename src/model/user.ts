import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true //ELIMINA ESPACIOS
    },
    password: {
        type: String,
        required: true
    }
});

//Interfaz para tratar respuesta como documento
export interface IUser extends Document {
    email: string;
    password: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IUser>('User', userSchema);