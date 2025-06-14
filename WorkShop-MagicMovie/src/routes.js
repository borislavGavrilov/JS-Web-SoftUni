import { Router } from 'express'

import homeController from './views/controllers/homeController.js'
import moviesController  from './views/controllers/moviesController.js'
import castControler from './views/controllers/castController.js'
import userController from './views/controllers/usersController.js'

const routers = Router()

routers.use(homeController)

routers.use(moviesController)

routers.use(castControler)

routers.use(userController)


routers.all('/*url' , (req,res) => {
  res.render('404')
})

export default routers