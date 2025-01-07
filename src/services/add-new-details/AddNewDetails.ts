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

export const editCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCast", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const listcaste = async (data: any) => {
    const response = await httpsPost("admin-settings/castList", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}


export const createSubCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/subCast", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const editSubCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSubCast", data)
    if(response) {
        return response;
    }
    else {
        return null;
    }
}

export const listSubCaste = async (data: any) => {
    const response = await httpsPost("admin-settings/getSubCastList", data)
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

export const createPropertyDetails = async (data: any) => {
    const response = await httpsPost("admin-settings/property", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listPropertyDetails = async (data: any) => {
    const response = await httpsPost("admin-settings/propertiesList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editPropertyDetails = async (data: any) => {
    const response = await httpsPost("admin-settings/updateProperty", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}



export const createInterests = async (data: any) => {
    const response = await httpsPost("admin-settings/interest", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listInterests = async (data: any) => {
    const response = await httpsPost("admin-settings/interestsList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editinterests = async (data: any) => {
    const response = await httpsPost("admin-settings/updateInterest", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const createHobbies = async (data: any) => {
    const response = await httpsPost("admin-settings/hobbies", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listHobbies = async (data: any) => {
    const response = await httpsPost("admin-settings/hobbiesList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editHobbies = async (data: any) => {
    const response = await httpsPost("admin-settings/updateHobbies", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}



export const createBlockedReasons = async (data: any) => {
    const response = await httpsPost("admin-settings/reasons", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listBlockedReasons = async (data: any) => {
    const response = await httpsPost("admin-settings/reasonsList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editBlockedReasons = async (data: any) => {
    const response = await httpsPost("admin-settings/updateReason", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}



export const createEducation = async (data: any) => {
    const response = await httpsPost("admin-settings/education", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listEducation = async (data: any) => {
    const response = await httpsPost("admin-settings/educationList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editEducation = async (data: any) => {
    const response = await httpsPost("admin-settings/updateEducation", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const createOccuption = async (data: any) => {
    const response = await httpsPost("admin-settings/occupation", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const editOccuption = async (data: any) => {
    const response = await httpsPost("admin-settings/updateOccupation", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listOccuption = async (data: any) => {
    const response = await httpsPost("admin-settings/occupationList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createBranch = async (data: any) => {
    const response = await httpsPost("user-management/branch", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const branchesList = async (data: any) => {
    const response = await httpsPost("user-management/branchList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const professionStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateProfessionStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const hobbiesStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateHobbiesStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}
export const iterestsStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateInterestStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const blockedReasonsStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateReasonStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const propertyDetailsStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updatePropertyStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const designationStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateDesignationStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const universityStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateUniversitiesStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const sourceStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSourceStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const languagesStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateLanguageStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const educationStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateEducationStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}


export const occuptionStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateOccupationStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const casteStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCastStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const subcasteStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateSubCastStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const stateStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateStateStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}



export const countryStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCountryStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const districtStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateDistrictStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const cityStatus = async (data: any) => {
    const response = await httpsPost("admin-settings/updateCityStatus", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}