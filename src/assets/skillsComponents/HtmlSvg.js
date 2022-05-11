import * as React from "react";
import { motion } from "framer-motion";

const HtmlSvg = (props) => (
  <motion.svg
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 0.3,
      delay: 0.2,
    }}
    width={60}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.933 0h3.607v3.563h3.3V0h3.607v10.787H13.84v-3.61h-3.3v3.61H6.937V0h-.004Zm15.254 3.577h-3.174V0h9.957v3.577h-3.177v7.21h-3.606v-7.21ZM30.55 0h3.76l2.313 3.79L38.933 0h3.76v10.787h-3.59V5.44l-2.48 3.837h-.063l-2.483-3.834v5.344H30.55V0Zm13.937 0h3.61v7.223h5.066v3.567h-8.676V0Z"
      fill="#8EE4AF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.82 73.573 0 15.723h60l-6.823 57.844L29.967 80 6.82 73.573Zm13.79-31.666-.647-7.267h27.15l.634-7.093H12.213l1.914 21.456h24.59l-.824 9.2-7.913 2.14h-.007l-7.9-2.133-.506-5.657H14.44l.993 11.14 14.534 4.034 14.556-4.034 1.774-19.88.173-1.903H20.61v-.003Z"
      fill="#8EE4AF"
    />
  </motion.svg>
);

export default HtmlSvg;
