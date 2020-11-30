import { Router } from 'express';
import passport from 'passport';
import { special } from "../controllers/special.controller";

const router = Router();

//A esta ruta tenemos que pasarle una header
//Header_key = Authorization
//Header_value = Bearer jwt(token devuelto en signin)
router.get("/special", passport.authenticate("jwt", {session: false}), special);

export default router;