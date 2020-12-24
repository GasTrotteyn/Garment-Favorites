import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <Switch>
                <Route path="/" component={ProductsPage} exact />
                <Route path="/favorites" component={FavoritesPage} />
                <Route
                    path="/"
                    render={() => <p>le erraste a la ruta chabón</p>}
                />
            </Switch>
        </React.Fragment>
    );
};

export default App;
