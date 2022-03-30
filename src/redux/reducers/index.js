import { combineReducers } from 'redux'

import sidebar from './sidebar'
import plannerTable from './plannerTable'


const rootReducer = combineReducers({ sidebar, plannerTable })

export default rootReducer