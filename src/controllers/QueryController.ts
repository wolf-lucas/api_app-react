import { RequestHandler } from "express";
import QueryService from "../services/QueryService";
import Query from "../interfaces/Query";

interface IQueryController
{
    uploadQuery: RequestHandler<Query>;
}

const QueryController: IQueryController = 
{
    async uploadQuery(req, res)
    {
        await QueryService.uploadQuery(req.body);
        res.json(req.body);
    },
}

export default QueryController;