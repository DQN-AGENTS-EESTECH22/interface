import './bootstrap.min.css';
import './main.min.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import GeneratePallete from "./pages/GeneratePallete";
import Previewer from "./pages/Previewer";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Layout active={'Generate Pallete'}>
                        <GeneratePallete/>
                    </Layout>
                </Route>
                <Route path="/previewer" exact>
                    <Layout active={'Previewer'}>
                        <Previewer/>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
