import React from 'react';
import Combobox from 'react-widgets/lib/Combobox'



class Calc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          valueA: 0,
          valueB: 0
        }
      }
    
      render() {
        // const { valueA, valueB } = this.state;
        // const sum = parseInt(valueA) + parseInt(valueB);
        return (
            <LinearFunction/>
        // <div>
        //     <input LinearFunction/>

        //   <input type="text" defaultValue={valueA} onInput={(e) => {
        //     this.setState({
        //       valueA: e.target.value
        //     });
        //   }} />
        //   +
        //       <input type="text" defaultValue={valueB} onInput={(e) => {
        //     this.setState({
        //       valueB: e.target.value
        //     });
        //   }} />
        //   =
        //       <input type="text" value={sum} readOnly />
        // </div>
        );
      }
    }


    // function sum(){
    //     const { valueA, valueB } = this.state;
    //     const sum = parseInt(valueA) + parseInt(valueB);
    //     return (<div>
    //         <input LinearFunction/>

    //       <input type="text" defaultValue={valueA} onInput={(e) => {
    //         this.setState({
    //           valueA: e.target.valueLinearFunction
    //         });
    //       }} />
    //       +
    //           <input type="text" defaultValue={valueB} onInput={(e) => {
    //         this.setState({
    //           valueB: e.target.value
    //         });
    //       }} />
    //       =
    //           <input type="text" value={sum} readOnly />
    //     </div>);
    // }
// function select(){
//     switch(widgets){
//         case '一次関数':
//             <LinearFunction/>
//         break;
        
//         case '二次関数':
//             <QuadraticFunction/>
//         break;
//     }
// }

class LinearFunction extends React.Component{

    render(){
      const { valueA, valueB } = this.state;
      const sum = parseInt(valueA) + parseInt(valueB);
      return (<div>
          <input LinearFunction/>

        <input type="text" defaultValue={valueA} onInput={(e) => {
          this.setState({
            valueA: e.target.value
          });
        }} />
        +
            <input type="text" defaultValue={valueB} onInput={(e) => {
          this.setState({
            valueB: e.target.value
          });
        }} />
        =
            <input type="text" value={sum} readOnly />
      </div>);
    }

}

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