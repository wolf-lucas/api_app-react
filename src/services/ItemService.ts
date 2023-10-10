import Item from "../interfaces/Item";
import ItemModel from "../models/ItemModel";
import { config } from "dotenv";

config({
    path: ".env",
  });

interface IItemService
{
    getAll: () => Promise<Item[]>;
    createItem: (item: Item) => Promise<void>;
    uploadImg: (item: Item) => Promise<any>;
    getById: (ids: string | Array<string>) => Promise<Item[]>;
};

const ItemService: IItemService = 
{
    async getAll() {
        const items = await ItemModel.find({}).exec();
        console.log(items)

        if (items.length == 0)
            console.log("No hay items para mostrar.");

        return items;
    },

    async createItem(item) {
      const data = await this.uploadImg(item)
      const lastDocument = await ItemModel.findOne().sort({ id: -1 });
      const newId = lastDocument ? lastDocument.id + 1 : 0

      const result = await ItemModel.insertMany({
          ...item,
          id: newId,
          image: data.url,
          soldQty: 0,
          createdAt: new Date()
      });

      if (result.length == 0)
          throw new Error("Error en el insert");
    },

    async uploadImg(item) {
        const url = process.env.UPLOAD_URL + '?key=' + process.env.UPLOAD_IMG_KEY
        const formData = new FormData();
        formData.append('image', item.image)
        formData.append('name', item.name)
        
        try {
            const response = await fetch(url, {
              method: 'POST',
              body: formData,
            });
            
            if (response.ok) {
              const responseData = await response.json();
              console.log(responseData.data)
              return responseData.data;
            } else {
              console.error('Error uploading image:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          }
    },

    async getById(ids) {
        return await ItemModel.find({ id : { "$in" : ids } }).exec()
    },
};

export default ItemService;