

import { httpsPost } from '../../services/HttpsCalls';

export  const  basicSetup = async (data: any) => {
        const response = await httpsPost("site-settings/basic",data );
        if (response) {
            return response;
        } else {
            return null;
        }
    }
 export  const  martiprefixSetup = async (data: any) => {
        const response = await httpsPost("site-settings/matri-prefix",data );
        if (response) {
            return response;
        } else {
            return null;
        }
    }