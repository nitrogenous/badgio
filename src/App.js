import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Providers } from './Providers';
import CreateNewBadge from './Containers/CreateNewBadge';
import CreateBadge from './Containers/CreateBadge';
import Landing from './Containers/Landing';
import Guide from './Containers/Guide';

function App() {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route exact path="/create-new-badge" component={CreateNewBadge} />
          <Route exact path="/create-badge/:id" component={CreateBadge} />
          <Route exact path="/guide" component={Guide}/>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
