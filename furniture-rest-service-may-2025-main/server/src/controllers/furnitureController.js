import { Router } from "express";
import furnitureService from "../service/furnitureService.js";

const furnitureController = Router()

furnitureController.get('/catalog', async (req,res) => {

    const result = await furnitureService.findAll()

    res.json(result)

}) 

furnitureController.post('/catalog' , async (req,res) => {
 
    const furnitureData = req.body

    const result = await furnitureService.create(furnitureData)

    res.json(result)
    
})

furnitureController.get('catalog/:productId' , async (req,res) => {
  console.log(req);
  
})
export default furnitureController