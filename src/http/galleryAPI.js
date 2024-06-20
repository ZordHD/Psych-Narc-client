import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createGallery = async (gallery) => {
    const {data} = await $authHost.post('api/gallery', gallery)
    return data
}

export const fetchGallery = async (page, limit=4) => {
    const {data} = await $host.get('api/gallery', {params: {
        page, limit
    }})
    return data
}

export const fetchOneGallery = async (id) => {
    const {data} = await $host.get('api/gallery/' + id)
    return data
}