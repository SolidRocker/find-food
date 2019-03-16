import {
    SELECT_FILTER_TYPE,
    SELECT_FILTER_DATA,
 } from '../../redux/types';
    
const dataState = {
    filterType: "Filter By...",
    filterData: "Select...",
    hasFilterType: false,
    hasFilterData: false,

    masterCategoryList: [],
    categoryList: [],
    zoneList: []
}

export default function(state = dataState, action) {
    switch(action.type) {
        case SELECT_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload,
                hasFilterType: action.payloadShowFilterData,
                hasFilterData: false,
                filterData: "Select..."
            }
        case SELECT_FILTER_DATA:
            return {
                ...state,
                filterData: action.payload,
                hasFilterData: true
            }
        default:
            return state;
    }
}
