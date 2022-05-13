import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { uiSize } from "../utils/mediaQ";
import {
  AboutMeIcon,
  ContactIcon,
  HomeIcon,
  ProjectsIcon,
} from "../assets/navIcons";

const Navigation = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const setLocalStorage = (currentPage) => {
    window.sessionStorage.setItem("currentPage", currentPage);
    setSelectedPage(currentPage);
  };

  useEffect(() => {
    const page = window.sessionStorage.getItem("currentPage");
    setSelectedPage(page || "home");
  }, []);

  return (
    <Nav>
      <Line1 />
      <Link
        data-title="Home"
        className={`nav-item ${selectedPage === `home` && selectedPage}`}
        onClick={() => {
          setLocalStorage("home");
        }}
        to="/"
      >
        <HomeIcon />
      </Link>
      <Link
        data-title="About"
        className={`nav-item ${selectedPage === `about` && selectedPage}`}
        onClick={() => {
          setLocalStorage("about");
        }}
        to="/about"
      >
        <AboutMeIcon />
      </Link>
      <Link
        data-title="Projects"
        className={`nav-item ${selectedPage === `projects` && selectedPage}`}
        onClick={() => {
          setLocalStorage("projects");
        }}
        to="/projects"
      >
        <ProjectsIcon />
      </Link>
      <Link
        data-title="Contact"
        className={`nav-item ${selectedPage === `contact` && selectedPage}`}
        onClick={() => {
          setLocalStorage("contact");
        }}
        to="/contact"
      >
        <ContactIcon />
      </Link>
      <Line2 />
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 150px;
  position: fixed;
  right: 0;
  top: 0;

  @media ${uiSize.smallTablet} {
    right: 0;
    bottom: 0;
    top: auto;
    width: 100%;
    height: 100px;
    flex-direction: row;
  }


  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    background-color: #edf5e1;

    height: 55px;
    width: 55px;
    border-radius: 50px;

    @media ${uiSize.smallTablet} {
        margin: 0 10px;
      }

    &:nth-child(5) {
      margin-bottom: 25px;

      @media ${uiSize.smallTablet} {
        margin-bottom: 0;
      }
    }

    /* :active {
      color: green;
    } */

    :any-link {
      color: #fffcf2;
    }
  }

  .home,
  .about,
  .contact,
  .projects {
    background-color: #8ee4af;
  }
`;

const Line1 = styled.div`
  height: 15%;
  width: 2px;
  background-color: #edf5e1;

  border-radius: 10px;

  @media ${uiSize.smallTablet} {
    display: none;
  }
`;

const Line2 = styled.div`
  height: 27%;
  width: 2px;
  background-color: #edf5e1;

  border-radius: 10px;
  @media ${uiSize.smallTablet} {
    display: none;
  }
`;
