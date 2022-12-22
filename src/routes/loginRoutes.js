import express from "express";
import LoginController from "../controllers/loginController.js";

const router = express.Router();

router
  .post('/logins/criar', LoginController.criarLogin)
  .post('/logins/entrar', LoginController.efetuarLogin)

export default router