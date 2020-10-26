import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const courseSchema = new Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    iconUrl: {
        type: String
    },
    longDescription: {
        type: String
    },
    category: {
        type: String
    },
    lessonsCount: {
        type: Number
    }
});

//Interfaz para tratar respuesta como documento
export interface ICourse extends Document {
    id: number;
    description: string;
    iconUrl: string;
    longDescription: string;
    category: string;
    lessonsCount: number;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<ICourse>('Course', courseSchema);