import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createMassMedia = async (massm) => {
    const {data} = await $authHost.post('api/massmedia', massm)
    return data
}

export const fetchMassMedia = async () => {
    const {data} = await $host.get('api/massmedia')
    return data
}

export const fetchOneMassMedia = async (id) => {
    const {data} = await $host.get('api/massmedia/' + id)
    return data
}