import { httpsGet, httpsPost, httpsPatch, httpsPut, httpsDelete } from "services/HttpsCalls";

export const createCustomer = async (data: any) => {
    const response = await httpsPost("customer", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createPersonalDetails = async (data: any, customerId: number) => {
    const response = await httpsPut("customer/"+ customerId +"/personal-details", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createEducationDetails = async (data: any, customerId: number) => {
    const response = await httpsPut("customer/"+ customerId +"/education-details", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createFamilyDetails = async (data: any, customerId: number) => {
    const response = await httpsPut("customer/"+ customerId +"/family-details", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const createPartnerDetails = async (data: any, customerId: number) => {
    const response = await httpsPut("customer/"+ customerId +"/partner-details", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}

export const getCustomerDetails = async (data: any) => {
    const response = await httpsPost("customer/getCustomersList", data)
    if (response) {
        return response;
    }
    else {
        return null;
    }
}