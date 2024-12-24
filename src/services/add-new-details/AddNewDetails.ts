import { httpsGet, httpsPost, httpsPatch, httpsDelete } from "services/HttpsCalls";

export const createCountry = async (data: any) => {
    const response = await httpsPost("admin-settings/country", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const countryList = async (data: any) => {
    const response = await httpsPost("admin-settings/countryList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}
