import { legacy_createStore as createStore} from 'redux'
import myReducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(myReducer, devToolsEnhancer())

export default store