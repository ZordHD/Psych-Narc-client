import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createDocument = async (doc) => {
    const {data} = await $authHost.post('api/documents', doc)
    return data
}

export const fetchDocument = async (page, limit=3) => {
    const {data} = await $host.get('api/documents', {params: {
        page, limit
    }})
    return data
}

export const fetchOneDocument = async (doc) => {
    const { data } = await $host.get('api/documents', doc);
    return data.filePath; 
}