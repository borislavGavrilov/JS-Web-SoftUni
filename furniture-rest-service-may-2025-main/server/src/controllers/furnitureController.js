import { Router } from "express";
import furnitureService from "../service/furnitureService.js";

const furnitureController = Router()

furnitureController.get('/catalog', async (req,res) => {

    const result = await furnitureService.findAll()

    res.json(result)

}) 

furnitureController.post('/catalog' , async (req,res) => {
 
    const furnitureData = req.body
    console.log(furnitureData);
    

    console.log(req.user);
    
    

    const result = await furnitureService.create(furnitureData)

    res.json(result)
    
})

furnitureController.get('/catalog/:productId' , async (req,res) => {
 const furnitureID = req.params.productId
 const result = await furnitureService.findById(furnitureID)

 res.json(result)
  
})
export default furnitureController