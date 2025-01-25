import { httpsGet, httpsPost, httpsPatch, httpsDelete } from "services/HttpsCalls";

export const createBranchStaff = async (data: any) => {
    const response = await httpsPost("user-management/staff", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}