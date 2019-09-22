import React from 'react';
import Combobox from 'react-widgets/lib/Combobox';
import './App.css';


class Calc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          valueA: 0,
          valueB: 0,
          valueC: 0
        };
      }

      render() {


        return (
          <div className="body" >
            <input type="integer" value={this.props.valueA} />
            <input type="button" value = "ooooooon"  onClick={() => this.LinearFunction1()} />

          </div>
          
        );

      }

      LinearFunction1(){

        console.log("props"&this.props);
        

        // this.setState({a : this.props.valueA});
        // this.setState({y : this.props.valueB});


      }
      
      buttonClick(){
        return(
          alert("sss")
        );         
      }

    }

class LinearFunction extends React.Component{
    render(){
      return(
        <div></div>
      );
    }
}




// function LinearFunction1(){
//   const y = 0;
//   const a = 0;
//   const x = 0;
//   const b = 0;
//   const ax = 0;
 

//   alert(this.props.valueA);
//   // a = this.props.valueA;
//   // y = this.props.valueB;

// }

class QuadraticFunction extends React.Component{

    render(){
        return(
            <dev>
                nizikannsuu
            </dev>
        );
    }
}

export default Calc;