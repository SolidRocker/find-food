import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE
} from '../../redux/types';

function hasData(data_) {
    return data_ !== '' && data_ !== '-';
}

export const fetchPlaces = (latitude, longitude, distance,
                                masterCategoryList, categoryList, zoneList
                            ) => dispatch => {

    let path = 'https://appsbytsl.com/API/V1/Nearby/EatBook/tyler03/' + latitude + '/' + longitude + '/' + distance;
    fetch(path)
    .then(res => res.json())
    .then(data => {

        // Extract Filter Data
        for(var i = 0; i < data.length; ++i) {

            // Use indexOf to see if filter exists, and only add if it doesn't
            if( data[i].hasOwnProperty('MasterCategory') &&
                hasData(data[i].MasterCategory) &&
                masterCategoryList.indexOf(data[i].MasterCategory) === -1)
            {
                masterCategoryList.push(data[i].MasterCategory);
            }

            if( data[i].hasOwnProperty('Category') &&
                hasData(data[i].Category) &&
                categoryList.indexOf(data[i].Category) === -1) {
                categoryList.push(data[i].Category);
            }

            if( data[i].hasOwnProperty('Zone') &&
                hasData(data[i].Zone) &&
                zoneList.indexOf(data[i].Zone) === -1) {
                zoneList.push(data[i].Zone);
            }
        }
        
        dispatch({
            type: FETCH_PLACES,
            payload: data
        })}
    );
}

export const updateSelectedPlace = (selectedPlace, hasSelection = true) => dispatch => {

    dispatch({
        type: UPDATE_SELECTED_PLACE,
        payload: selectedPlace,
        hasPayload: hasSelection
    })
}