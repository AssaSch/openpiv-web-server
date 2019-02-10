import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Results from '../containers/Results';
import Landing from '../containers/Landing';

import './App.css';

// import Header from './Header';
// import Landing from './Landing';
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <h3 > Openpiv web platform </h3>
            <Route exact path="/" component={Landing} />
            <Route exact path="/results" component={Results} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="container">
  //       <BrowserRouter>
  //         <div>
  //           <Header />
  //           <Route exact path="/" component={Landing} />
  //           <Route exact path="/start_proccess" component={Dashboard} />
  //           <Route path="/surveys/new" component={SurveyNew} />
  //         </div>
  //       </BrowserRouter>
  //     </div>
  //   );
  // }
}


export default App;
