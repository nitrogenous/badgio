import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateNewBadge from './Containers/CreateNewBadge';
import CreateBadge from './Containers/CreateBadge';
import Landing from './Containers/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-new-badge" component={CreateNewBadge} />
        <Route exact path="/create-badge/:id" component={CreateBadge} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
