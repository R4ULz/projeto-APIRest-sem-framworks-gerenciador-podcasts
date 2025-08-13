import {getFilterEpisodes, getListEpisodes} from  "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';
import * as http from 'http';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

        const baseUrl = req.url?.split('?')[0]

        //listar podcasts
        if(req.method === HttpMethods.GET && baseUrl ===  Routes.LIST_EPISODES){
            await getListEpisodes(req, res);
        }

        if(req.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES){
            await getFilterEpisodes(req, res);
        }
}