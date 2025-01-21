import { httpsGet, httpsPost, httpsPatch, httpsDelete } from "services/HttpsCalls";

export const createFranchise = async (data: any) => {
    const response = await httpsPost("user-management/createFranchise", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const listFranchise = async (data: any) => {
    const response = await httpsPost("user-management/listFranchise", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const editFranchise = async (data: any) => {
    const response = await httpsPost("user-management/updateFranchise", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}