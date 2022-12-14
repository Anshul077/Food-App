import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ItemReducer,CartItemReducer } from './reducer/ItemReducer';

const reducer = combineReducers({
ItemData :ItemReducer,
CartData:CartItemReducer,

})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;