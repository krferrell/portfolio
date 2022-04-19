import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <Link data-title="Home" className="nav-item" to="/">
        Home
      </Link>
      <Link data-title="About" className="nav-item" to="/about">
        About
      </Link>
      <Link data-title="Projects" className="nav-item" to="/projects">
        Projects
      </Link>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;

  background-color: #252422;

  height: 50px;
  width: 100%;

  .nav-item {
    margin-left: 15px;
    margin-right: 15px;

    text-decoration: none;

    :last-child {
      margin-right: 50px;
    }

    :active {
      color: green;
    }

    :any-link {
      color: #fffcf2;
    }
  }

  @media only screen and (max-width: 948px) {
    justify-content: center;

    margin-left: 15px;
    margin-right: 15px;
  }
`;
