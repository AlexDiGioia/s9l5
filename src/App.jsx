import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import React, { Component } from "react";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import TVShows from "./components/TVShows.jsx";
import { Container } from "react-bootstrap";
import Galleria from "./components/Galleria.jsx";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <body className="blackBackground" >
        <MyNav />
        <Container fluid className="px-4 mt-2">
          <TVShows />
          <Galleria searchId="Star Wars" />
          <Galleria searchId="Saw" />
          <Galleria searchId="Harry Potter" />
        </Container>

        <MyFooter />
      </body>
    </>
  );
}

export default App;
