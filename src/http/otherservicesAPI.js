import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createOtherServices = async (services) => {
    const {data} = await $authHost.post('api/otherservices', services)
    return data
}

export const fetchOtherServices = async (page, limit=8) => {
    const {data} = await $host.get('api/otherservices', {params: {
        page, limit
    }})
    return data
}

export const fetchOneOtherServices = async (id) => {
    const {data} = await $host.get('api/otherservices/' + id)
    return data
}