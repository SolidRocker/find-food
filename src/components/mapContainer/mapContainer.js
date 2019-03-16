import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {fetchPlaces, updateSelectedPlace} from './mapContainerActions';

const mapStylesPC = {
    width: '80%',
    height: '100%'
};

const mapStylesSP = {
    width: '100%',
    height: '70%'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0.0,
            longitude: 0.0,
            distance: 0
        }
    }

    componentWillMount() {

        let fullStr = window.location.href.split('?');
        let varStr = ""
        
        if(fullStr.length > 1) {
            varStr = fullStr[1].split('&');
        }

        // Set the default values if there is no parameters given.
        let latStr = 1.319190;
        let longStr = 103.857834;
        let distStr = 3;

        // Checks each param name and assign to the correct values.
        for(var i = 0; i < varStr.length; ++i) {
            if(varStr[i].substr(0, 3) === "lat") {
                latStr = varStr[i].substr(4);
            }
            if(varStr[i].substr(0, 4) === "long") {
                longStr = varStr[i].substr(5);
            }
            if(varStr[i].substr(0, 4) === "dist") {
                distStr = varStr[i].substr(5);
            }
        }

        this.setState({
            latitude: latStr,
            longitude: longStr,
            distance: distStr
        }, function() {
            this.props.fetchPlaces(
                this.state.latitude,
                this.state.longitude,
                this.state.distance,
                this.props.masterCategoryList,
                this.props.categoryList,
                this.props.zoneList);
        })
    }

    onMarkerClick = (props, marker, e) => {
        //console.log(props.placeData);
        this.props.updateSelectedPlace(props.placeData);
    }

    isMobile() {
        return (window.innerHeight / window.innerWidth) > 1.6;
    }

    renderMarkers(place) {
        //console.log(place);

        if(this.props.hasFilterData) {

            if( this.props.filterType === "Master Category" &&
                this.props.filterData !== place.MasterCategory) {
                    return;
            }

            if( this.props.filterType === "Category" &&
                this.props.filterData !== place.Category) {
                    return;
            }

            if( this.props.filterType === "Zone" &&
                this.props.filterData !== place.Zone) {
                    return;
            }
        }

        return (
            <Marker
                key={place.EntryID}
                title={place.EntryName}
                name={place.EntryName}
                position={{lat: place.Latitude, lng: place.Longitude}}
                placeData={place}
                onClick={this.onMarkerClick}
            />
        )
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={this.isMobile() ? mapStylesSP : mapStylesPC}
                initialCenter={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                }}
            >

            {this.props.places.map(place => this.renderMarkers(place))}
            </Map>
        );
    }
}

const mapStateToProps = state => ({
    places: state.mapContainer.places,
    selectedPlace: state.mapContainer.selectedPlace,

    masterCategoryList: state.filterSection.masterCategoryList,
    categoryList: state.filterSection.categoryList,
    zoneList: state.filterSection.zoneList,

    hasFilterData: state.filterSection.hasFilterData,
    filterType: state.filterSection.filterType,
    filterData: state.filterSection.filterData
});

export default connect(mapStateToProps, {fetchPlaces, updateSelectedPlace})(GoogleApiWrapper({
    apiKey: 'AIzaSyA4eoMwXF6WHOWLartYfDtKXKdOMotsBYQ'
})(MapContainer));