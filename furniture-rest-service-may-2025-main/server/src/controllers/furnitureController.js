import { Router } from 'express'

import furnitureService from '../services/furnitureService.js';
import { resolve } from '../utils/promiseUtils.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const filter = new URLSearchParams(req.query.where?.replaceAll('"', ''));

    const furnitures = await furnitureService.getAll(Object.fromEntries(filter?.entries() ?? []));

    res.json(furnitures);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    const ownerId = req.user.id;

    const [err, result] = await resolve(furnitureService.create(furnitureData, ownerId))

    if (err) {
        return res.status(400).json(err);
    }

    res.json(result);
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getOne(furnitureId);

    res.json(furniture);
});

furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    await furnitureService.delete(furnitureId);

    res.json({ ok: true });
});

furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furnitureData = req.body;

    const updatedFurniture = await furnitureService.update(furnitureId, furnitureData);

    res.json(updatedFurniture);
});

export default furnitureController;
