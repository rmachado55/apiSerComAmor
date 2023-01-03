import express from "express";
import BalancoController from "../controllers/balancoController.js";


const router = express.Router();

router
  .post('/admin/balanco/upload', BalancoController.uploadBalanco)  

export default router