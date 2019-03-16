import {
    SELECT_FILTER_TYPE,
    SELECT_FILTER_DATA,
} from '../../redux/types';

export const selectFilterType = (filterType) => dispatch => {

    let showFilterData = true;
    if(filterType === "Show All") {
        showFilterData = false;
    }

    //console.log("FT: " + filterType);
    dispatch({
        type: SELECT_FILTER_TYPE,
        payload: filterType,
        payloadShowFilterData: showFilterData
    })
}

export const selectFilterData = (filterData) => dispatch => {
    //console.log("FD: " + filterData);
    dispatch({
        type: SELECT_FILTER_DATA,
        payload: filterData,
    })
}