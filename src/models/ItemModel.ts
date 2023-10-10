import { Schema, model } from 'mongoose';
import Item from '../interfaces/Item';

const itemSchema = new Schema<Item>({
    id: Number,
    name: String,
    price: Number,
    stock: Number,
    category: String,
    freeShipping: Boolean,
    brand: String,
    shortDesc: String,
    longDesc: String,
    ageFrom: Number,
    ageTo: Number,
    soldQty: Number,
    image: String,
    createdAt: Date,
});

const ItemModel = model('Item', itemSchema, 'products');

export default ItemModel;