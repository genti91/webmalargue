import ScrollToTop from "./components/ScrollTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(props) {
  const routes = (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" />
        <Redirect to="/" />
      </Switch>
    </ScrollToTop>
  );
  {
    /* <Router>{routes}</Router> */
  }
  return <h1> test</h1>;
}
export default App;
