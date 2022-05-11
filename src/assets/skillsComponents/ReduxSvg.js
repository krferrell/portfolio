import * as React from "react";
import { motion } from "framer-motion";

const ReduxSvg = (props) => (
  <motion.svg
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 0.3,
      delay: 0.6,
    }}
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M55.433 55.21c2.95-.307 5.19-2.877 5.09-5.96a5.743 5.743 0 0 0-5.7-5.55h-.206c-3.157.1-5.6 2.773-5.5 5.96.106 1.543.716 2.877 1.633 3.8-3.463 6.89-8.757 11.923-16.7 16.137-5.393 2.88-10.993 3.906-16.59 3.186-4.583-.616-8.147-2.673-10.387-6.063-3.256-5.033-3.56-10.483-.813-15.93 1.933-3.903 4.99-6.783 6.923-8.22a56.631 56.631 0 0 1-1.323-5.243C-2.903 48.12-1.373 62.713 3.1 69.6c3.36 5.14 10.18 8.327 17.717 8.327a24.836 24.836 0 0 0 6.106-.72C39.957 74.64 49.83 66.827 55.43 55.213l.003-.003ZM73.35 42.467c-7.737-9.147-19.14-14.184-32.17-14.184h-1.63a5.59 5.59 0 0 0-4.987-3.083h-.206c-3.154.103-5.6 2.777-5.497 5.963.1 3.084 2.647 5.547 5.7 5.547h.207a5.737 5.737 0 0 0 4.986-3.493h1.834c7.736 0 15.066 2.26 21.683 6.68 5.09 3.393 8.757 7.81 10.79 13.156 1.733 4.314 1.633 8.527-.2 12.127-2.853 5.447-7.637 8.427-13.95 8.427-4.07 0-7.94-1.234-9.977-2.16a60.25 60.25 0 0 1-4.58 3.7c4.377 2.056 8.857 3.186 13.134 3.186 9.773 0 17-5.446 19.75-10.893 2.95-5.96 2.746-16.237-4.887-24.973Zm-51.717 14.49c.1 3.083 2.647 5.55 5.7 5.55h.204c3.156-.1 5.6-2.774 5.5-5.96a5.744 5.744 0 0 0-5.7-5.55h-.207a1.766 1.766 0 0 0-.713.1c-4.174-6.987-5.904-14.59-5.294-22.814.407-6.166 2.444-11.51 6.007-15.93 2.953-3.8 8.653-5.65 12.523-5.753 10.79-.207 15.37 13.36 15.677 18.807 1.323.306 3.563 1.026 5.09 1.54-1.223-16.647-11.4-25.28-21.177-25.28-9.16 0-17.61 6.68-20.97 16.546-4.683 13.154-1.63 25.794 4.074 35.764-.51.72-.817 1.85-.714 2.98Z"
        fill="#8EE4AF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v80H0z" />
      </clipPath>
    </defs>
  </motion.svg>
);

export default ReduxSvg;
