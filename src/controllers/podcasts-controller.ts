import {IncomingMessage, ServerResponse} from "http"
import {serviceListEpisodes} from "../services/list-episodes"
import { serviceFilterEpisodes } from "../services/filter-episodes"
import { StatusCode } from "../utils/status-code"
import { ContentType } from "../utils/content-type"
import { PodcastTransferModel } from "../models/podcast-transfer-model"

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) =>{
    const content:PodcastTransferModel = await serviceListEpisodes()
    
    response.writeHead(content.statusCode ?? StatusCode.OK,{'content-type': ContentType.JSON})
    response.write(JSON.stringify(content.body))
    response.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode ?? StatusCode.OK, {'content-type': ContentType.JSON})
    res.write(JSON.stringify(content.body))
    res.end()
}