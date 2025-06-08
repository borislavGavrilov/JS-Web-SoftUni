import { Router } from "express";
import express from 'express'
import castService from "../services/castService.js";


const castControler = Router()

castControler.get('/casts/create' ,  (req,res) => {
  res.render('cast/cast-create')
})

castControler.post('/casts/create' , async (req,res) => {
  const data = req.body

 await castService.createActior(data)

 res.redirect('/')
})

export default castControler

