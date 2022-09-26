import { API_GET_ANYTHING } from "../constants";

export const getAnythingServices = async (callback: () => void) => {
    callback();
    return API_GET_ANYTHING
}