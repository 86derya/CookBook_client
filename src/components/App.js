import React, { PureComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from './spinner';
import Header from './modules/appHeader';
import routes from '../configs/routes';

const AsyncHomePage = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "Home-page" */),
);
const AsyncRecipesPage = lazy(() =>
  import('../pages/Recipes' /* webpackChunkName: "Recipes-page" */),
);
const AsyncRecipeItemPage = lazy(() =>
  import('../pages/RecipeItem' /* webpackChunkName: "Recipe_Item-page" */),
);

const AsyncNotFoundPage = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "NotFound-page" */),
);

class App extends PureComponent {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              exact
              path={routes.HOME}
              component={() => <AsyncHomePage />}
            />
            <Route
              exact
              path={routes.RECIPES}
              component={props => <AsyncRecipesPage {...props} />}
            />
            <Route
              path={routes.RECIPE_ITEM}
              component={props => <AsyncRecipeItemPage {...props} />}
            />

            <Route
              exact
              path={routes.NOT_FOUND}
              component={() => <AsyncNotFoundPage />}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  // getUser: getCurrentUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
