import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  const { setSearch, search, user, setUser } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  console.log(user);
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <NavMenu>
        <Link to="/home">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </Link>
        <Link to="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="home-icon" />
          <span>Watch-list</span>
        </Link>
        <Link to="/original">
          <img src="/images/original-icon.svg" alt="home-icon" />
          <span>Original</span>
        </Link>
        <Link to="/movie">
          <img src="/images/movie-icon.svg" alt="home-icon" />
          <span>Movie</span>
        </Link>
        <Link to="/Series">
          <img src="/images/series-icon.svg" alt="home-icon" />
          <span>Series</span>
        </Link>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchButton onClick={() => navigate("/filter")}>
            Search
          </SearchButton>
        </SearchBar>
      </NavMenu>
      {user ? (
        <Profile>
          <NameButton onClick={(e) => setOpen(!open)}>
            {user.displayName.slice(0,2).toUpperCase()}
          </NameButton>
          {open && <LogoutButton>Logout</LogoutButton>}
        </Profile>
      ) : (
        <LogIn onClick={() => navigate("/login")}>login</LogIn>
      )}
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
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  /* border: 2px solid #e6e6e6;
  
  padding: 16px 16px; */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 16px;
  padding: 9px 40px;
  border-radius: 50px;
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: #0069d9;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  padding: 8px 16px;
  margin-left: 16px;
  cursor: pointer;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  /* width: 100%;
  height: 100%; */
  border:none;
`;
const NameButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  letter-spacing: normal;
  background-color: orange;
  padding: 16px 15px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  
`;
const LogoutButton = styled.button`
  border: none;
  outline: none;
  background-color: #0069d9;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  padding: 8px 16px;
  margin-left: 16px;
  cursor: pointer;
  position: absolute;
  right: 90px;
  border: none;
`;
export default Navbar;
