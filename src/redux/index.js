import { combineReducers } from 'redux';
import mapContainerReducer from '../components/mapContainer/mapContainerReducer';
import filterSectionReducer from '../components/filterSection/filterSectionReducer';

export default combineReducers({
    mapContainer: mapContainerReducer,
    filterSection: filterSectionReducer
})