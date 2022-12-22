import express from "express";
import ResponsavelController from "../controllers/responsavelController.js";

const router = express.Router();

router
  .get('/responsaveis', ResponsavelController.listarResponsaveis);


export default router