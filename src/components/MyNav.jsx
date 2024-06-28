//import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.bmp";
import { Bell, Search, PersonCircle } from "react-bootstrap-icons";

function MyNav() {
  return (
    <nav
      className="navbar navbar-expand-lg blackBackground"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f !important" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ width: 100, height: 55 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex gap-3 align-items-center">
            <Search color="white" size={25} />
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <Bell color="white" size={25} />
            <a href="/ProfilePage"><PersonCircle color="white" size={25} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
