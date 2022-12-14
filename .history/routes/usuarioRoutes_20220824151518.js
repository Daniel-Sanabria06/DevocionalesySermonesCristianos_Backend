import express from 'express';
const router = express.Router();
import { 
    registrar,
    autenticar,
    confirmar,
    olvidePassword, 
    comprobarToken,
    nuevoPassword
} from '../controllers/usuarioController.js'

import CheckAuth from "../Middleware/CheckAtuh.js"

// Autenticación, Registro y Confirmación de usuarios

router.post("/", registrar); //Crea un nuevo usuario 
router.post("/login", autenticar); 
router.get("/confirmar/:token", confirmar); 
router.post("/olvide-password", olvidePassword);

router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)


export default router;
