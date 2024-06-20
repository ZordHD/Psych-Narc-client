import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createForeignServices = async (services) => {
    const {data} = await $authHost.post('api/foreignservices', services)
    return data
}

export const fetchForeignServices = async (page, limit=8) => {
    const {data} = await $host.get('api/foreignservices', {params: {
        page, limit
    }})
    return data
}

export const fetchOneForeignServices = async (id) => {
    const {data} = await $host.get('api/foreignservices/' + id)
    return data
}