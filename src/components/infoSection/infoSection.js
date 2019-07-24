import React, { Component } from 'react';
import {connect} from 'react-redux';
import './infoSection.css';

import {
    FaCommentAlt,
    FaClock,
    FaPhone,
    FaGlobeAmericas,
    FaEnvelope,
    FaHome,
    FaMapMarker
} from 'react-icons/fa';

export class InfoSection extends Component {

    isMobile() {
        return (window.innerHeight / window.innerWidth) > 1.6;
    }

    // Find hyperlinks in the string and convert them into clickable links.
    convertStringToLinks(str) {
        let result = [];
        let input = str.split(' ');

        input.forEach(elem => {
            if(elem.includes("http://") || elem.includes("https://")) {
                result.push(<a key={result.length} href={elem}>{elem}</a>);
            }
            else {
                result.push(elem);
            }
            result.push(' ');
        });
        return result;
    }

    renderDefaultText() {
        if(this.props.places.length < 1) {
            return <div className="info-section-default-text">No places nearby. Are you sure you have the right coordinates?</div>
        }
        return <div className="info-section-default-text">Click on a pin to start looking!</div>
        }
    
    renderElements(infoString, infoVar) {
        if(this.props.selectedPlace.hasOwnProperty(infoString) && infoVar !== "-" && infoVar !== "") {

            switch(infoString) {

                case "desc":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaCommentAlt/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "hours":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaClock/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "contact":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaPhone/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "website":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "email":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaEnvelope/> </span>
                            <span><a href={"mailto:"+infoVar}>{infoVar}</a></span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "address":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaHome/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "zone":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaMapMarker/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                default:
                    return null;
            }

        }
        return null;
    }

    // Render all the external links together if they exist.
    renderExternalLinks() {
        var hasEatBookArticle = false;
        var hasFB = false;
        var hasInsta = false;
        var hasTSLArticle = false;

        if(this.props.selectedPlace.hasOwnProperty("eatbook") &&
            this.props.selectedPlace.eatbook !== "-" &&
            this.props.selectedPlace.eatbook !== "") {
                hasEatBookArticle = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("facebook") &&
            this.props.selectedPlace.facebook !== "-" &&
            this.props.selectedPlace.facebook !== "") {
                hasFB = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("instagram") &&
            this.props.selectedPlace.instagram !== "-" &&
            this.props.selectedPlace.instagram !== "") {
                hasInsta = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("tsl") &&
            this.props.selectedPlace.tsl !== "-" &&
            this.props.selectedPlace.tsl !== "") {
                hasTSLArticle = true;
        }

        return (
            <div className="info-section-info-sm">
                {hasEatBookArticle &&
                    <span>
                        <a href={this.props.selectedPlace.eatbook}>
                            <img
                                src={require("../../img/eatbook.png")}
                                alt={"Eatbook"}
                                className="info-section-icon-sm"
                            /> 
                        </a>
                    </span>
                }
                {hasFB &&
                    <span>
                        <a href={this.props.selectedPlace.facebook}>
                            <img
                                src={require("../../img/facebook.png")}
                                alt={"Facebook"}
                                className="info-section-icon-sm"
                            /> 
                        </a>
                    </span>
                }
                {hasInsta &&
                    <span>
                        <a href={this.props.selectedPlace.instagram}>
                            <img
                                src={require("../../img/instagram.png")}
                                alt={"Instagram"}
                                className="info-section-icon-sm"
                            /> 
                        </a>
                    </span>
                }
                {hasTSLArticle &&
                    <span>
                        <a href={this.props.selectedPlace.tsl}>
                            <img
                                src={require("../../img/thesmartlocal.png")}
                                alt={"TheSmartLocal Article"}
                                className="info-section-icon-sm"
                            /> 
                        </a>
                    </span>
                }
            </div>
        )
    }

    render() {

        if(this.props.hasSelection) {
            return (
                <div className={this.isMobile() ? "info-section-sp" : "info-section"}>
                    <div className="info-section-headerbg">
                        <div className="info-section-header">{this.props.selectedPlace.name}</div>
                        <div className="info-section-category">{this.props.selectedPlace.master}: {this.props.selectedPlace.category}</div>
                    </div>

                    <div className="info-section-gap"></div>

                    {this.renderElements("desc", this.props.selectedPlace.desc)}
                    {this.renderElements("hours", this.props.selectedPlace.hours)}
                    {this.renderElements("contact", this.props.selectedPlace.contact)}

                    {this.renderElements("website", this.props.selectedPlace.website)}
                    {this.renderElements("email", this.props.selectedPlace.email)}

                    {this.renderElements("address", this.props.selectedPlace.address)}
                    {this.renderElements("zone", this.props.selectedPlace.zone)}

                    {this.renderExternalLinks()}

                </div>
            )
        }
        return (
            <div className={this.isMobile() ? "info-section-sp" : "info-section"}>
                 <div className="info-section-headerbg">
                    <div className="info-section-header">Food Finder</div>
                    <div className="info-section-category">What's nice nearby?</div>
                </div>
                <div className="info-section-icon">
                    {this.renderDefaultText()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.mapContainer.places,
    selectedPlace: state.mapContainer.selectedPlace,
    hasSelection: state.mapContainer.hasSelection
});

export default connect(mapStateToProps, {})(InfoSection);