import { httpsGet, httpsPost, httpsPatch, httpsDelete, httpsPostFormData } from "services/HttpsCalls";

export const createBranchStaff = async (data: any) => {
    const response = await httpsPost("user-management/staff", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const updateBranchStaffFile = async (data: any) => {
    const response = await httpsPostFormData("user-management/staff-certificates-upload", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}