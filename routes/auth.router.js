import Router from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

//Router de Auth
router.post("/register", AuthController.register); //Registro
router.post("/login", AuthController.login); //Login

export default router;

