import { RequestHandler } from "express";
import ItemService from "../services/ItemService";
import Item from "../interfaces/Item";

interface IItemController
{
    getAll: RequestHandler<Item>;
    createItem: RequestHandler<Item>;
    getById: RequestHandler;
}

const ItemController: IItemController = 
{
    async getAll(req, res)
    {
        res.json(await ItemService.getAll());
    },

    async createItem(req, res)
    {
        await ItemService.createItem(req.body);
        res.json(req.body);
    },

    async getById(req, res)
    {
        await ItemService.getById(req.params.ids);
        res.json(req.body);
    }
}

export default ItemController;