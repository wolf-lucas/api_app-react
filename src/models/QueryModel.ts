import { Schema, model } from 'mongoose';
import Query from '../interfaces/Query';

const querySchema = new Schema<Query>({
    id: Number,
    name: String,
    email: String,
    message: String,
    createdAt: Date,
});

const QueryModel = model('Query', querySchema, 'queries');

export default QueryModel;