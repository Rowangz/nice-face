import React, { Component } from "react";
import "../App.css";
import Clarifai from "clarifai";
// Import components
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import ImageInput from "../components/ImageInput";
import Rank from "../components/Rank";
import FaceRecognition from "../components/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "5953521928bd4bbda79d628c2d056a4f",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    // prettier-ignore
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    };
  };

  displayFacebox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
    console.log(e.target.value);
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFacebox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Nav />
        <Logo />
        <Rank />
        <ImageInput
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </>
    );
  }
}

export default App;
