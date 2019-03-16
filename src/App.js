import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import InfoSection from './components/infoSection/infoSection';
import FilterSection from './components/filterSection/filterSection';
import MapContainer from './components/mapContainer/mapContainer';
import './App.css';

class App extends Component {

  isMobile() {
    return (window.innerHeight / window.innerWidth) > 1.6;
  }

  render() {

    if(this.isMobile()) {
      return (
        <Provider store={store}>
          <div className="main-section-sp">
            <div className="map-section-sp"> <MapContainer/> </div>
            <div className="side-section-sp">
                <div className="display-section-sp"> <InfoSection/> </div>
                <div className="filter-section-sp"> <FilterSection/> </div>
            </div>
          </div>
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <div className="main-section">
          <div className="side-section">
              <div className="display-section"> <InfoSection/> </div>
              <div className="filter-section"> <FilterSection/> </div>
          </div>
          <div> <MapContainer/> </div>
        </div>
      </Provider>
      );
  }
}

export default App;
