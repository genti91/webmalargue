import ScrollToTop from "./components/ScrollTop";
import Landing_1 from "./pages/Landing_1";
import Landing_2 from "./pages/Landing_2";
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
        <Route exact path="/" component={Landing_1} />
        <Route exact path="/landing_2"  component={Landing_2} />
        <Redirect to="/" />
      </Switch>
    </ScrollToTop>
  );

  return <Router>{routes}</Router>;
}
export default App;
