//Importamos dependencias
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';

//Importamos fichero de rutas
import courseRoutes from './routes/course.routes';
import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

//Importamos modulo passport
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
//Inicializamos express
const app = express();

//Configuración
//Cuando haya variable de entorno sera PORT y sino 3000
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//Llama a las rutas de la API
app.use(authRoutes);
app.use(courseRoutes);
app.use(specialRoutes);

//Exportamos fichero como 'app'
export default app;
