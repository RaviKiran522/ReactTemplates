// apiMethods.js
import axiosInstance from './AxiosInstance'

// Common GET method
export const httpsGet = async (url: string, params = {}, customHeaders = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      params, // Query parameters
      headers: customHeaders,
    });
    return response.data; // Return data directly
  } catch (error) {
    console.error('GET Error:', error);
    throw error; // Propagate error for handling
  }
};

// Common POST method
export const httpsPost = async (url: string, data = {}, customHeaders = {}) => {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
};

// Common PATCH method
export const httpsPatch = async (url: string, data = {}, customHeaders = {}) => {
  try {
    const response = await axiosInstance.patch(url, data, {
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    console.error('PATCH Error:', error);
    throw error;
  }
};

export const httpsPut = async (url: string, data = {}, customHeaders = {}) => {
  try {
    const response = await axiosInstance.put(url, data, {
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    console.error('PATCH Error:', error);
    throw error;
  }
};

// Common DELETE method (optional)
export const httpsDelete = async (url: string, customHeaders = {}) => {
  try {
    const response = await axiosInstance.delete(url, {
      headers: customHeaders,
    });
    return response.data;
  } catch (error) {
    console.error('DELETE Error:', error);
    throw error;
  }
};
export const httpsPostFormData = async (url: string, formData: FormData, customHeaders = {}) => {
  try {
    const response = await axiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...customHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error('POST FormData Error:', error);
    throw error;
  }
};
