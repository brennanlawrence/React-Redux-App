import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./App.css";
import { connect } from "react-redux";

import { getGenre } from "./actions/index";

function App(props) {
  const newGenre = () => {
    props.getGenre();
  };

  return (
    <Card className="App">
      <CardBody className="head">
        <CardTitle tag="h1">Random Music Genre</CardTitle>
      </CardBody>
      <p className="error">{props.error}</p>
      <CardBody className="body">
        <CardText>{props.genre}</CardText>
        <Button color="success" onClick={newGenre}>
          New Genre!
        </Button>
      </CardBody>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  error: state.error,
});

export default connect(mapStateToProps, { getGenre })(App);
