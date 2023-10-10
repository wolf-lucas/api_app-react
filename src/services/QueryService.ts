import Query from "../interfaces/Query";
import QueryModel from "../models/QueryModel";
import { config } from "dotenv";

config({
    path: ".env",
  });

interface IQueryService
{
    uploadQuery: (query: Query) => Promise<void>;
};

const QueryService: IQueryService = 
{
    async uploadQuery(query) {
        const lastDocument = await QueryModel.findOne().sort({ id: -1 });
        const newId = lastDocument ? lastDocument.id + 1 : 0
        const message = await QueryModel.insertMany({
            ...query,
            id: newId,
            name: query.name,
            email: query.email,
            message: query.message,
            createdAt: new Date()
        });
        if (message.length == 0)
            throw new Error("Error en el insert");
    },

};

export default QueryService;