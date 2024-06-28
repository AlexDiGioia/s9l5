import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//ho usato il comando  npm install react-multi-carousel

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

class Galleria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: false,
    };
  }




  fetchFilms = () => {
    this.setState({ isLoading: true }); 

    const { searchId } = this.props;
    console.log(searchId);
    fetch(`http://www.omdbapi.com/?apikey=c81b7686&s=${searchId}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Error in fetching comments");
        }
      })
      .then((data) => {
        console.log("data", data);
        this.setState({
          films: data.Search,
          isLoading: false, // Set isLoading to false after fetching data
        });
      });
  };
  componentDidMount() {
    this.fetchFilms();
  }
  render() {
    const { films, isLoading } = this.state;
    const { searchId } = this.props;
    //const firstSixFilms = films.slice(0, 10); // Get the first 10 film
    console.log(films);
    /* return (
      <>
        <h4 className="ms-5 mb-2">{searchId}:</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {firstSixFilms.map((film) => (s
            <Col key={film.imdbID} className="mb-2 text-center px-1">
              <img
                className="img-fluid "
                src={film.Poster}
                alt="movie picture"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          ))}
        </Row>
      </>
    ); */
    return (
      <div className="parent mt-5">
        <h4 className=" mb-2">{searchId}:</h4>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {films.map((film) => (
            <div key={film.imdbID}>
              <img
                className="img-fluid carImg"
                src={film.Poster}
                alt="movie picture"
                style={{ maxHeight: "320px" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Galleria;
