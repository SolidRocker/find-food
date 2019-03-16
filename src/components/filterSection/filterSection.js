import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown'
import {selectFilterType, selectFilterData} from './filterSectionActions';
import {updateSelectedPlace} from '../mapContainer/mapContainerActions';
import './filterSection.css';

import {
    FaCaretUp,
    FaCaretDown,
} from 'react-icons/fa';

const filterBy = [
    "Show All",
    "Master Category",
    "Category",
    "Zone"
];

export class FilterSection extends Component {

    isMobile() {
        return (window.innerHeight / window.innerWidth) > 1.6;
    }

    onSelectFilterType = (option) => {
        this.props.selectFilterType(option.label);
    }

    onSelectFilterData = (option) => {
        this.props.selectFilterData(option.label);
        this.props.updateSelectedPlace({}, false);
    }

    render() {
        return (
            <div className={this.isMobile() ? "filter-section-sp" : "filter-section"}>
                <div className={this.isMobile() ? "filter-section-header-bg-sp" : "filter-section-header-bg"}>
                    <div className="filter-section-header">Filters</div>
                </div>

                <div className="filter-section-gap"></div>

                <div className="filter-type-dropdown">
                    <Dropdown
                        arrowClosed={<span className={this.isMobile() ? "Dropdown-icon-sp" : "Dropdown-icon"}><FaCaretDown/></span>}
                        arrowOpen={<span className={this.isMobile() ? "Dropdown-icon-sp" : "Dropdown-icon"}><FaCaretUp/></span>}
                        options={filterBy}
                        onChange={this.onSelectFilterType}
                        value={this.props.filterType}
                        placeholder="Filter By..."
                        className="filter-list"
                        controlClassName="Dropdown-control"
                        menuClassName={this.isMobile() ? "Dropdown-menu-type-sp" : "Dropdown-menu-type"}
                        />
                </div>

                
                {this.props.hasFilterType &&
                <div className="filter-data-dropdown">
                    <Dropdown
                        arrowClosed={<span className={this.isMobile() ? "Dropdown-icon-sp" : "Dropdown-icon"}><FaCaretDown/></span>}
                        arrowOpen={<span className={this.isMobile() ? "Dropdown-icon-sp" : "Dropdown-icon"}><FaCaretUp/></span>}
                        options={
                            this.props.filterType === "Master Category" ? this.props.masterCategoryList
                            : this.props.filterType === "Category" ? this.props.categoryList
                            : this.props.filterType === "Zone" ? this.props.zoneList : []
                        }
                        onChange={this.onSelectFilterData}
                        value={this.props.filterData}
                        placeholder="Sort By..."
                        className="filter-list"
                        controlClassName="Dropdown-control"
                        menuClassName={this.isMobile() ? "Dropdown-menu-type-sp" : "Dropdown-menu-type"}
                    />
                </div>
                }
                 

            </div>
        )
    }
}

const mapStateToProps = state => ({
    hasFilterType: state.filterSection.hasFilterType,
    filterType: state.filterSection.filterType,
    filterData: state.filterSection.filterData,

    masterCategoryList: state.filterSection.masterCategoryList,
    categoryList: state.filterSection.categoryList,
    zoneList: state.filterSection.zoneList,
});

export default connect(mapStateToProps, {selectFilterType, selectFilterData, updateSelectedPlace})(FilterSection);