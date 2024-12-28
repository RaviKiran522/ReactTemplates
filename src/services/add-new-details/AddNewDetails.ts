import { httpsGet, httpsPost, httpsPatch, httpsDelete } from "services/HttpsCalls";

export const createCountry = async (data: any) => {
    const response = await httpsPost("admin-settings/country", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const countryList = async (data: any) => {
    const response = await httpsPost("admin-settings/countryList", data)
    if (response) {
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

export const createDistrict = async (data: any) => {
    const response = await httpsPost("admin-settings/district", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const districtList = async (data: any) => {
    const response = await httpsPost("admin-settings/districtsList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateDistrict = async (data: any) => {
    const response = await httpsPost("admin-settings/updateDistrict", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createCity = async (data: any) => {
    const response = await httpsPost("admin-settings/city", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const cityList = async (data: any) => {
    const response = await httpsPost("admin-settings/cityList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateCity = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCity", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createReligion = async (data: any) => {
    const response = await httpsPost("admin-settings/religion", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const religionList = async (data: any) => {
    const response = await httpsPost("admin-settings/religionList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateReligion = async (data: any) => {
    const response = await httpsPost("admin-settings/updateReligion", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const createCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/cast", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCast", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const casteList = async (data: any) => {
    const response = await httpsPost("admin-settings/castList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const languageList = async (data: any) => {
    const response = await httpsPost("admin-settings/languageList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createLanguage = async (data: any) => {
    const response = await httpsPost("admin-settings/language", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editLanguage = async (data: any) => {
    const response = await httpsPost("admin-settings/updateLanguage", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const createSource = async (data: any) => {
    const response = await httpsPost("admin-settings/source", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const sourceList = async (data: any) => {
    const response = await httpsPost("admin-settings/sourceList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editSource = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSource", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createProfession = async (data: any) => {
    const response = await httpsPost("admin-settings/profession", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listProfession = async (data: any) => {
    const response = await httpsPost("admin-settings/professionList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}
export const editProfession = async (data: any) => {
    const response = await httpsPost("admin-settings/updateProfession", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createUniversitys = async (data: any) => {
    const response = await httpsPost("admin-settings/universities", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listUniversitys = async (data: any) => {
    const response = await httpsPost("admin-settings/universitiesList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editUniversitys = async (data: any) => {
    const response = await httpsPost("admin-settings/updateUniversities", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createDesingation = async (data: any) => {
    const response = await httpsPost("admin-settings/designation", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listDesingation = async (data: any) => {
    const response = await httpsPost("admin-settings/designationList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editDesingation = async (data: any) => {
    const response = await httpsPost("admin-settings/updateDesignation", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

