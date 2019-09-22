import React from 'react';
import logo from './logo.svg';
import './App.css';
import './homepage';
import {BrowserRouter as router,Route,Switch} from 'react-router';

const NotFound = () => {
  return(
    <h2>Page NotFound</h2>
  )
}


class App extends CompositionEvent{
  render(){
    return(
      <Switch>
        <Route path="" component={home}/>

        <Route component= {(NotFound)}/>
      </Switch>
    );
  }

}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
