import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Animate = ({children}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -30 }}
      transition={{ duration: 0.5 }}
    >{children}</motion.div>
  );
};

export default Animate;
