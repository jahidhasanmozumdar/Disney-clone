import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ props }) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <NavMenu>
        <Link to='/home'>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </Link>
        <a href="/">
          <img src="/images/search-icon.svg" alt="home-icon" />
          <span>Search</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="home-icon" />
          <span>Watch-list</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="home-icon" />
          <span>Original</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="home-icon" />
          <span>Movie</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="home-icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <LogIn>Login</LogIn>
    </Nav>
  );
};
const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-width: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  /* justify-content: center; */
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;

    img {
      height: 26px;
      min-width: 26px;
      width: 26px;
      margin-bottom: 4px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 19px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
    }
  }
  a:after {
    content: "";
    position: absolute;
    background-color: yellow;
    height: 2px;
    width: 0%;
    left: 10px;
    bottom: -10px;
    transition: 0.5s;
  }
  a:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogIn = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  font-size: 19px;
  transition: all 0.2s ease 0s;
  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
export default Navbar;
