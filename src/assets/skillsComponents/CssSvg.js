import * as React from "react";
import { motion } from "framer-motion";

const CssSvg = (props) => (
  <motion.svg
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 0.3,
    }}
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M25.007 0H33.6v3.593h-5v3.594h5v3.593h-8.593V0Zm10.31 0h8.596v3.127h-5v.623h5v7.187h-8.596v-3.28h5V7.03h-5V0Zm10.316 0h8.59v3.127h-5v.623h5v7.187h-8.59v-3.28h5V7.03h-5V0Z"
      fill="#8EE4AF"
    />
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m39.97 80-23.147-6.427L10 15.723h60l-6.82 57.844L39.97 80ZM23.49 41.91l.637 7.093h24.59l-.824 9.2-7.913 2.14h-.007l-7.9-2.133-.506-5.657h-7.124l.994 11.14 14.533 4.034 14.557-4.034 1.773-19.88.173-1.903 1.28-14.363h-35.54l.647 7.096h27.12l-.647 7.267H23.49Z"
      fill="#8EE4AF"
    />
  </motion.svg>
);

export default CssSvg;
