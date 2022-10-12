import { legacy_createStore as createStore} from 'redux'

import ContReducer from './Reducer/Reduce.jsx'

export const Store = createStore(ContReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
