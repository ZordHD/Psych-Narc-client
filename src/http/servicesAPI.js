import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createServices = async (services) => {
    const {data} = await $authHost.post('api/services', services)
    return data
}

export const fetchServices = async (page, limit=3) => {
    const {data} = await $host.get('api/services', {params: {
        page, limit
    }})
    return data
}

export const fetchOneServices = async (id) => {
    const {data} = await $host.get('api/services/' + id)
    return data
}