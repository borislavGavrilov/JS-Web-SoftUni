import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.json(result);
});

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const result = await userService.register(userData);

    res.json(result);
});

userController.get('/logout', async (req, res) => {
    // TODO: Token invalidation
    const token = req.header('X-Authorization');
    
    await userService.logout(token);

    res.json({ ok: true });
});

export default userController;
