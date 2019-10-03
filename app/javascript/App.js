import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SchoolSelector from './components/SchoolSelector';
import SchoolContainer from './containers/SchoolContainer';
import DistrictContainer from './containers/DistrictContainer';
import Footer from './components/Footer';
import eventCalendar from './components/Calendar';
import './stylesheets/index.scss'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DistrictContainer} />
            <Route exact path="/districts/:dist_id/selector" component={SchoolSelector} />
            <Route exact path="/districts/:dist_id/schools/:school_id"
              component={SchoolContainer} />
            <Route exact path="/districts/:dist_id" component={DistrictContainer} />
            <Route exact path="/districts/:dist_id/schools/:school_id/calendar"
              component={eventCalendar} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
