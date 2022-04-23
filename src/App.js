import './bootstrap.min.css';
import './main.min.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import GeneratePalette from "./pages/GeneratePallete";
import Previewer from "./pages/Previewer";
import Layout from "./components/Layout";
import GeneratePaletteText from "./pages/GeneratePalleteText";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Layout active={'Generate Palette - Image'}>
                        <GeneratePalette/>
                    </Layout>
                </Route>
                <Route path="/text" exact>
                    <Layout active={'Generate Palette - Text'}>
                        <GeneratePaletteText/>
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
