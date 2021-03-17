
import './App.css';
import React from "react";
import myImage from './Illidan.png'
import {Switch} from "antd";

class App extends React.Component {
  
  state = {
    Person: {
      fullName: "Adem frigui",
      bio: "bruh",
      imgSrc: myImage,
      profession: "Web Dev",
      profile:"Hide profile"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      profile:"Show profile",
      ...this.state,
      show: !this.state.show,
      
    });
   
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="hey" style={{height:"500px"}}></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}
        <Switch onClick={this.handleShowPerson} />
        
      </div>
    );
  }
}

export default App;
