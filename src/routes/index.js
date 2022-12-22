import express from "express";
import login from './loginRoutes.js'
import responsavel from './responsaveisRoutes.js';

const routes = (app) => {
  app.route('/').get((req,res) => {
    res.status(200).send({titulo: "API - SER COM AMOR"})
  })

  app.use(
    express.json(),
    login,
    responsavel,
    )
}

export default routes