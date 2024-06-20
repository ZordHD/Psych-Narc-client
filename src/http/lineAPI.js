import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createLine = async (line) => {
    const {data} = await $authHost.post('api/line', line)
    return data
}

export const fetchLine = async () => {
    const {data} = await $host.get('api/line')
    return data
}
