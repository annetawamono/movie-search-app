import React from 'react';
import './css/App.css';
import SearchMovies from "./searchMovies";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <nav className="nav">
            <ul>
              <li className="nav__link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__link">
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/search" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

// Home component
const Home = () => (
  <div className="container">
    <h1 className="title">React Movie Search App</h1>
    <Link className="button button--home" to="/search">Start</Link>
  </div>
);

export default App;
