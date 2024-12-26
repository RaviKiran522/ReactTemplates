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

export const updateCountry = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCountry", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createState = async (data: any) => {
    const response = await httpsPost("admin-settings/state", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateState = async (data: any) => {
    const response = await httpsPost("admin-settings/updateState", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const statesList = async (data: any) => {
    const response = await httpsPost("admin-settings/statesList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const languageList = async (data: any) => {
    const response = await httpsPost("admin-settings/languageList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createLanguage = async (data: any) => {
    const response = await httpsPost("admin-settings/language", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const editLanguage = async (data: any) => {
    const response = await httpsPost("admin-settings/updateLanguage", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}


export const createSource = async (data: any) => {
    const response = await httpsPost("admin-settings/source", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const sourceList = async (data: any) => {
    const response = await httpsPost("admin-settings/sourceList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const editSource = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSource", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createProfession = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSource", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

