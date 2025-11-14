import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Hero} />
          {/* Additional routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;