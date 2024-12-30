import React, { useEffect, useCallback } from 'react';
import useAuth from '../hooks/useAuth';

const AutoLogout = () => {
  let timeoutId: NodeJS.Timeout;

  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('refToken');
    } catch (error) {
      console.error(error);
    }
  };

  const resetTimer = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(handleLogout, 15 * 60 * 1000); // 15 minutes
  }, [handleLogout]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [resetTimer]);

  return null;
};

export default AutoLogout;
