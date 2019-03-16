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

                case "EntryDescription":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaCommentAlt/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "OpeningHours":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaClock/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "ContactNumber":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaPhone/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "Website":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "ContactEmail":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaEnvelope/> </span>
                            <span><a href={"mailto:"+infoVar}>{infoVar}</a></span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "EntryAddress":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaHome/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "Zone":
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
        var hasTSLReviews = false;

        if(this.props.selectedPlace.hasOwnProperty("EatBookArticle") &&
            this.props.selectedPlace.EatBookArticle !== "-" &&
            this.props.selectedPlace.EatBookArticle !== "") {
                hasEatBookArticle = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("FacebookPage") &&
            this.props.selectedPlace.FacebookPage !== "-" &&
            this.props.selectedPlace.FacebookPage !== "") {
                hasFB = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("Instagram") &&
            this.props.selectedPlace.Instagram !== "-" &&
            this.props.selectedPlace.Instagram !== "") {
                hasInsta = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("TSLArticle") &&
            this.props.selectedPlace.TSLArticle !== "-" &&
            this.props.selectedPlace.TSLArticle !== "") {
                hasTSLArticle = true;
        }

        if(this.props.selectedPlace.hasOwnProperty("TSLReviews") &&
            this.props.selectedPlace.TSLReviews !== "-" &&
            this.props.selectedPlace.TSLReviews !== "") {
                hasTSLReviews = true;
        }

        return (
            <div className="info-section-info-sm">
                {hasEatBookArticle &&
                    <span>
                        <a href={this.props.selectedPlace.EatBookArticle}>
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
                        <a href={this.props.selectedPlace.FacebookPage}>
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
                        <a href={this.props.selectedPlace.Instagram}>
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
                        <a href={this.props.selectedPlace.TSLArticle}>
                            <img
                                src={require("../../img/thesmartlocal.png")}
                                alt={"TheSmartLocal Article"}
                                className="info-section-icon-sm"
                            /> 
                        </a>
                    </span>
                }
                {hasTSLReviews &&
                    <span>
                        <a href={this.props.selectedPlace.TSLReviews}>
                            <img
                                src={require("../../img/star.png")}
                                alt={"TheSmartLocal Reviews"}
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
                        <div className="info-section-header">{this.props.selectedPlace.EntryName}</div>
                        <div className="info-section-category">{this.props.selectedPlace.MasterCategory}: {this.props.selectedPlace.Category}</div>
                    </div>

                    <div className="info-section-gap"></div>

                    {this.renderElements("EntryDescription", this.props.selectedPlace.EntryDescription)}
                    {this.renderElements("OpeningHours", this.props.selectedPlace.OpeningHours)}
                    {this.renderElements("ContactNumber", this.props.selectedPlace.ContactNumber)}

                    {this.renderElements("Website", this.props.selectedPlace.Website)}
                    {this.renderElements("ContactEmail", this.props.selectedPlace.ContactEmail)}

                    {this.renderElements("EntryAddress", this.props.selectedPlace.EntryAddress)}
                    {this.renderElements("Zone", this.props.selectedPlace.Zone)}

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