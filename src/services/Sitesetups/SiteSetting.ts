

import { httpsPost } from '../HttpsCalls';

export const basicSetup = async (data: any) => {
    const response = await httpsPost("site-settings/basic", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}
export const martiprefixSetup = async (data: any) => {
    const response = await httpsPost("site-settings/matri-prefix", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}
export const socialmediaSetup = async (data: any) => {
    const response = await httpsPost("site-settings/social-site-link", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}
export const googleAnaliticalSetup = async (data: any) => {
    const response = await httpsPost("site-settings/google-analytics-code", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}
export const appLinkSetup = async (data: any) => {
    const response = await httpsPost("site-settings/app-link", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}
export const deafualtImage = async (data: any) => {
    const response = await httpsPost("site-settings/site-image", data);
    if (response) {
        return response;
    } else {
        return null;
    }
}

