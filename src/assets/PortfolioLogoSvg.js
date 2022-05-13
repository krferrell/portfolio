import * as React from "react";
import { motion } from "framer-motion";

const PortfolioLogoSvg = (props) => (
  <motion.svg
    width={62}
    height={62}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={35}
      cy={35}
      r={55}
      fill="#8EE4AF"
      stroke="#EDF5E1"
      strokeWidth={3}
    />
    <path
      stroke="#EDF5E1"
      strokeWidth={5}
      strokeLinecap="round"
      d="m28.693 35.467-5.226 7.84M28.87 32.924 22 27M48.5 26.5h-5M45.5 34.5h-3M15.5 16.5h39M16.5 54.5h37"
    />
    <path stroke="#EDF5E1" strokeWidth={5} d="M40.5 16v39M30.5 16v39" />
  </motion.svg>
);

export default PortfolioLogoSvg;
