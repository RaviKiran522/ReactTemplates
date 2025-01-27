import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import { jwtDecode } from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'contexts/auth-reducer/actions';
import authReducer from 'contexts/auth-reducer/auth';

// project import
import Loader from 'components/Loader';
import axios from 'axios';
import { KeyedObject } from 'types/root';
import { AuthProps, JWTContextType } from 'types/auth';
import common from '../services/Common.json';
import { decryptToken, encryptToken } from '../services/CryptoUtils';
const chance = new Chance();

// constant
const initialState: AuthProps = {
  isLoggedIn: (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== undefined && sessionStorage.getItem("token") !== null ? true : false) || false,
  isInitialized: (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== undefined && sessionStorage.getItem("token") !== null ? true : false) ||false,
  user: null
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(serviceToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log('state: ', state);
  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.sessionStorage.getItem('token');
        if (serviceToken === "" || serviceToken === undefined || serviceToken === null) {
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
            }
          });
        // } else {
        //   console.log("logou called")
        //   dispatch({
        //     type: LOGOUT
        //   });
         }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const refreshAccessToken = async () => {
    try {
      const refToken = sessionStorage.getItem('refToken');
      console.log("sessionStorage.getItem('refToken'): ", refToken);
      const refreshtoken = decryptToken(refToken);
      const response = await axios.post(common.baseUrl + common.refreshToken, {
        refreshToken: refreshtoken // Send the refresh token to get a new access token
      });
      const { status, accessToken } = response.data;
      if (status) {
        const encryptedToken = encryptToken(accessToken);
        sessionStorage.setItem('token', encryptedToken);
        refreshTokenInterval();
      } else {
        dispatch({
          type: LOGOUT
        });
      }
    } catch (error) {
      console.error('Failed to refresh token:', error);
      // Optionally redirect to login
    }
  };

  const refreshTokenInterval = () => {
    const interval = setTimeout(() => {
      console.log("refresh token")
      refreshAccessToken();
    }, 1000*60*14);
  }

  const login = async (email: string, password: string) => {
    console.log('login........');
    try {
      const response = await axios.post(common.baseUrl + common.loginUrl, {
        username: email,
        password: password
      });
      const { status, accessToken, refreshToken } = response.data;
      if (status) {
        const encryptedToken = encryptToken(accessToken);
        const refreshedToken = encryptToken(refreshToken);
        sessionStorage.setItem('token', encryptedToken);
        sessionStorage.setItem('refToken', refreshedToken);
        refreshTokenInterval();
        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true,
            user: null
          }
        });
      } else {
        dispatch({
          type: LOGOUT
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({
        type: LOGOUT
      });
    }

    // const response = await axios.post('/api/account/login', { email, password });
    // const { serviceToken, user } = response.data;
    // setSession(serviceToken);
    // dispatch({
    //   type: LOGIN,
    //   payload: {
    //     isLoggedIn: true,
    //     user
    //   }
    // });
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    // todo: this flow need to be recode as it not verified
    const id = chance.bb_pin();
    const response = await axios.post('/api/account/register', {
      id,
      email,
      password,
      firstName,
      lastName
    });
    let users = response.data;

    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers!),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`
        }
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email: string) => {
    console.log('email - ', email);
  };

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
