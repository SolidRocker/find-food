import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE
} from '../../redux/types';
import {data} from '../../data/allPlaces';

function hasData(data_) {
    return data_ !== '' && data_ !== '-';
}

export const fetchPlaces = (masterCategoryList, categoryList, zoneList
                            ) => dispatch => {

    // Extract Filter Data
    for(var i = 0; i < data.length; ++i) {

        // Use indexOf to see if filter exists, and only add if it doesn't
        if( data[i].hasOwnProperty('master') &&
            hasData(data[i].master) &&
            masterCategoryList.indexOf(data[i].master) === -1) {
            masterCategoryList.push(data[i].master);
        }

        if( data[i].hasOwnProperty('category') &&
            hasData(data[i].category) &&
            categoryList.indexOf(data[i].category) === -1) {
            categoryList.push(data[i].category);
        }

        if( data[i].hasOwnProperty('zone') &&
            hasData(data[i].zone) &&
            zoneList.indexOf(data[i].zone) === -1) {
            zoneList.push(data[i].zone);
        }
    }
    
    dispatch({
        type: FETCH_PLACES,
        payload: data
    })
}


export const updateSelectedPlace = (selectedPlace, hasSelection = true) => dispatch => {

    dispatch({
        type: UPDATE_SELECTED_PLACE,
        payload: selectedPlace,
        hasPayload: hasSelection
    })
}