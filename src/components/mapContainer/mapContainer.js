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
            latitude: 1.319190,
            longitude: 103.857834,
            distance: 3
        }
    }

    componentWillMount() {

        let str = window.location.href.split("/");
        this.setState({
            latitude: str[str.length-3],
            longitude: str[str.length-2],
            distance: str[str.length-1],
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