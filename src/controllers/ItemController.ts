import { RequestHandler } from "express";
import ItemService from "../services/ItemService";
import Item from "../interfaces/Item";

interface ItemParams
{
    id: string;
}

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
        await ItemService.getAll();
        res.json(req.body);
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