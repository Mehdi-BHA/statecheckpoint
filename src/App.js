import React, { Component } from 'react';
import Profile from './components/Profile';
import './App.css'; 

 class App extends Component {
  
  state={
    person:{
      fullName:"Mehdi Ben Hadj Ali",
      bio:"je suis passioné du code ",
      imgSrc:"/pdp.jpg",
      profession:'développeur full stack'},
    show:true,
    n:0
  };
  

  toggleShow = () => {
    const bool=this.state.show
    this.setState({ show : !bool})
    console.log(this.state.show)
  }

  componentDidMount(){
    window.setInterval(this.increment.bind(this), 1000)
  }

  increment(){
    this.setState({n: this.state.n +1})
  }

  converter=(n)=>{
    const sec = n%60
    const min = (n-sec)/60
    const hour = (min-min%60)/60
    return `${hour>9?hour:"0"+hour}:${min>9?min:"0"+min}:${sec>9?sec:"0"+sec}`
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? <Profile person={this.state.person}/> :"" }
        <button onClick={this.toggleShow.bind(this)}>Toggle show</button>
        <fieldset>{this.converter(this.state.n)}</fieldset>
      </div>
    )
  }
}

export default App
