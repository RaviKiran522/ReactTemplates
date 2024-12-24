import CryptoJS from 'crypto-js';
import common from './Common.json';
 // Replace this with your actual secret key

// Encrypt the token
export const encryptToken = (token: any) => {
  return CryptoJS.AES.encrypt(token, common.SECRET_KEY).toString();
};

// Decrypt the token
export const decryptToken = (encryptedToken: any) => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, common.SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
