import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import {reducer as recipedata} from "./RecipeData/reducer"

import thunk from "redux-thunk"

const rootReducer =combineReducers({recipedata})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};
