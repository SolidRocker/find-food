(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/eatbook.43510351.png"},37:function(e,t,a){e.exports=a.p+"static/media/facebook.4a668b2f.png"},38:function(e,t,a){e.exports=a.p+"static/media/instagram.5517c24f.png"},39:function(e,t,a){e.exports=a.p+"static/media/thesmartlocal.29d6ed25.png"},41:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(10),r=a.n(o),i=(a(30),a(4)),l=a(5),c=a(8),m=a(6),p=a(7),d=a(3),h=a(9),u=a(24),f=a(11),g={places:[],selectedPlace:{},hasSelection:!1},E={filterType:"Filter By...",filterData:"Select...",hasFilterType:!1,hasFilterData:!1,masterCategoryList:[],categoryList:[],zoneList:[]},w=Object(h.c)({mapContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLACES":return Object(f.a)({},e,{places:t.payload});case"UPDATE_SELECTED_PLACE":return Object(f.a)({},e,{selectedPlace:t.payload,hasSelection:t.hasPayload});default:return e}},filterSection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_FILTER_TYPE":return Object(f.a)({},e,{filterType:t.payload,hasFilterType:t.payloadShowFilterData,hasFilterData:!1,filterData:"Select..."});case"SELECT_FILTER_DATA":return Object(f.a)({},e,{filterData:t.payload,hasFilterData:!0});default:return e}}}),y=[u.a],b=Object(h.d)(w,{},h.a.apply(void 0,y)),v=(a(35),a(2)),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"isMobile",value:function(){return window.innerHeight/window.innerWidth>1.6}},{key:"convertStringToLinks",value:function(e){var t=[];return e.split(" ").forEach(function(e){e.includes("http://")||e.includes("https://")?t.push(s.a.createElement("a",{key:t.length,href:e},e)):t.push(e),t.push(" ")}),t}},{key:"renderDefaultText",value:function(){return this.props.places.length<1?s.a.createElement("div",{className:"info-section-default-text"},"No places nearby. Are you sure you have the right coordinates?"):s.a.createElement("div",{className:"info-section-default-text"},"Click on a pin to start looking!")}},{key:"renderElements",value:function(e,t){if(this.props.selectedPlace.hasOwnProperty(e)&&"-"!==t&&""!==t)switch(e){case"desc":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.d,null)," "),s.a.createElement("span",null,this.convertStringToLinks(t)),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"hours":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.c,null)," "),s.a.createElement("span",null,t),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"contact":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.i,null)," "),s.a.createElement("span",null,t),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"website":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.f,null)," "),s.a.createElement("span",null,this.convertStringToLinks(t)),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"email":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.e,null)," "),s.a.createElement("span",null,s.a.createElement("a",{href:"mailto:"+t},t)),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"address":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.g,null)," "),s.a.createElement("span",null,t),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));case"zone":return s.a.createElement("div",{className:"info-section-info"},s.a.createElement("span",{className:"info-section-icon"}," ",s.a.createElement(v.h,null)," "),s.a.createElement("span",null,t),s.a.createElement("div",{className:"info-section-hr"},s.a.createElement("hr",null)));default:return null}return null}},{key:"renderExternalLinks",value:function(){var e=!1,t=!1,n=!1,o=!1;return this.props.selectedPlace.hasOwnProperty("eatbook")&&"-"!==this.props.selectedPlace.eatbook&&""!==this.props.selectedPlace.eatbook&&(e=!0),this.props.selectedPlace.hasOwnProperty("facebook")&&"-"!==this.props.selectedPlace.facebook&&""!==this.props.selectedPlace.facebook&&(t=!0),this.props.selectedPlace.hasOwnProperty("instagram")&&"-"!==this.props.selectedPlace.instagram&&""!==this.props.selectedPlace.instagram&&(n=!0),this.props.selectedPlace.hasOwnProperty("tsl")&&"-"!==this.props.selectedPlace.tsl&&""!==this.props.selectedPlace.tsl&&(o=!0),s.a.createElement("div",{className:"info-section-info-sm"},e&&s.a.createElement("span",null,s.a.createElement("a",{href:this.props.selectedPlace.eatbook},s.a.createElement("img",{src:a(36),alt:"Eatbook",className:"info-section-icon-sm"}))),t&&s.a.createElement("span",null,s.a.createElement("a",{href:this.props.selectedPlace.facebook},s.a.createElement("img",{src:a(37),alt:"Facebook",className:"info-section-icon-sm"}))),n&&s.a.createElement("span",null,s.a.createElement("a",{href:this.props.selectedPlace.instagram},s.a.createElement("img",{src:a(38),alt:"Instagram",className:"info-section-icon-sm"}))),o&&s.a.createElement("span",null,s.a.createElement("a",{href:this.props.selectedPlace.tsl},s.a.createElement("img",{src:a(39),alt:"TheSmartLocal Article",className:"info-section-icon-sm"}))))}},{key:"render",value:function(){return this.props.hasSelection?s.a.createElement("div",{className:this.isMobile()?"info-section-sp":"info-section"},s.a.createElement("div",{className:"info-section-headerbg"},s.a.createElement("div",{className:"info-section-header"},this.props.selectedPlace.name),s.a.createElement("div",{className:"info-section-category"},this.props.selectedPlace.master,": ",this.props.selectedPlace.category)),s.a.createElement("div",{className:"info-section-gap"}),this.renderElements("desc",this.props.selectedPlace.desc),this.renderElements("hours",this.props.selectedPlace.hours),this.renderElements("contact",this.props.selectedPlace.contact),this.renderElements("website",this.props.selectedPlace.website),this.renderElements("email",this.props.selectedPlace.email),this.renderElements("address",this.props.selectedPlace.address),this.renderElements("zone",this.props.selectedPlace.zone),this.renderExternalLinks()):s.a.createElement("div",{className:this.isMobile()?"info-section-sp":"info-section"},s.a.createElement("div",{className:"info-section-headerbg"},s.a.createElement("div",{className:"info-section-header"},"Food Finder"),s.a.createElement("div",{className:"info-section-category"},"What's nice nearby?")),s.a.createElement("div",{className:"info-section-icon"},this.renderDefaultText()))}}]),t}(n.Component),C=Object(d.b)(function(e){return{places:e.mapContainer.places,selectedPlace:e.mapContainer.selectedPlace,hasSelection:e.mapContainer.hasSelection}},{})(k),N=a(21),S=a.n(N),P=[{id:"1",name:"Lam's Kitchen",master:"Food",category:"Hawker",desc:"Great salt baked chicken!",lat:"1.316450",long:"103.858313",address:"460 Race Course Rd, Singapore 218700",contact:"6398 1154",hours:"1030am - 930pm",website:"https://www.lamskitchen.com/",email:"admin@lamskitchen.com",zone:"Central",instagram:"https://www.instagram.com/explore/locations/198235100594967/lams-kitchen/",facebook:"https://www.facebook.com/lamskitchen/"},{id:"2",name:"Swee Choon Tim Sum Restaurant",master:"Food",category:"Restaurant",desc:"For late night cravings.",lat:"1.308452",long:"103.856858",address:"Jln Besar, 183-191, Singapore 208882",contact:"6225 7788",hours:"11am - 230pm, 6pm - 6am",website:"-",email:"-",zone:"Central",instagram:"https://www.instagram.com/sweechoon.sg/",facebook:"https://www.facebook.com/hr.sweechoon.7/"},{id:"3",name:"Tim Ho Wan",master:"Food",category:"Restaurant",desc:"Michellin dim sum!",lat:"1.309589",long:"103.864153",address:"12 Kallang Ave, #01-01/02 03 Aperia, Singapore 339511",contact:"6684 2000",hours:"9am - 11pm",website:"http://www.timhowan.com/",email:"customercare@timhowan.com",zone:"Central",tsl:"https://thesmartlocal.com/read/tim-ho-wan-lavender/",facebook:"https://www.facebook.com/timhowan/"},{id:"4",name:"Happy Chef Western Food",master:"Food",category:"Hawker",desc:"Great western food!",lat:"1.305739",long:"103.862480",address:"466 Crawford Ln, Singapore 190466",contact:"6398 0773",hours:"11am - 9pm",zone:"Central"},{id:"5",name:"Chye Seng Huat Hardware",master:"Food",category:"Cafe",desc:"THE hipster cafe.",lat:"1.311891",long:"103.860360",address:"150 Tyrwhitt Rd, Singapore 207563",contact:"6396 0609",hours:"9am - 10pm",website:"http://www.cshhcoffee.com/",zone:"Central",instagram:"https://www.instagram.com/cshhcoffee/",facebook:"https://www.facebook.com/cshhcoffee/"},{id:"6",name:"Xiao Cao Xiang Steamboat Buffet",master:"Food",category:"Restaurant",desc:"Featuring a 90-minute all-you-can-eat buffet!",lat:"1.332761",long:"103.849326",address:"470 Lorong 6 Toa Payoh, Singapore 310470",contact:"6273 7488",hours:"1130am - 9pm",zone:"North",eatbook:"https://eatbook.sg/xiao-cao-xiang-steamboat-buffet/"},{id:"7",name:"Paradise Gastronomy",master:"Food",category:"Restaurant",desc:"A Taiwan foodie paradise.",lat:"1.430277",long:"103.836328",address:"51 Yishun Central 1, #01-01, Singapore 768794",contact:"6257 3855",hours:"12pm - 10pm",zone:"North",instagram:"https://www.instagram.com/paradise_gastronomy/",facebook:"https://www.facebook.com/Paradise-Gastronomy-%E9%A3%9F%E5%91%B3%E5%A0%82-706782742838476/",eatbook:"https://eatbook.sg/paradise-gastronomy/"},{id:"8",name:"Burger & Lobster",master:"Food",category:"Restaurant",desc:"London's famed Burger and Lobster",lat:"1.359994",long:"103.989557",address:"78 Airport Boulevard, #05-203, Jewel Changi Airport, Singapore 819666",hours:"9am - 3am",zone:"East",instagram:"https://www.instagram.com/burgerandlobster/",facebook:"https://www.facebook.com/burgerandlobster/",eatbook:"https://eatbook.sg/burger-and-lobster/"},{id:"9",name:"Charcoal-Grill & Salad Bar Keisuke",master:"Food",category:"Restaurant",desc:"Sumiyaki, Japanese charcoal-grill, with meat items slow-grilled over steaming smoulders of charcoal.",lat:"1.319537",long:"103.892610",address:"60 Paya Lebar Road, #B1-16, Paya Lebar Square, Singapore 409051",hours:"1130am - 230pm, 530pm - 10pm",zone:"East"},{id:"10",name:"Qi Lin Xuan Chicken Rice",master:"Food",category:"Hawker",desc:"Chicken Rice Balls!",lat:"1.351816",long:"103.719199",address:"Block 442 Jurong West Avenue 1, #01-758, Singapore 640442",hours:"6am - 4pm",zone:"West",facebook:"https://www.facebook.com/qilinxuanchickenrice/",eatbook:"https://eatbook.sg/qi-lin-xuan-chicken-rice/"},{id:"11",name:"Jalape\xf1o South-West",master:"Food",category:"Restaurant",desc:"Muslim-Owned Mexican Restaurant With Cheap Tacos And Burritos At Clementi",lat:"1.312340",long:"103.765022",address:"321 Clementi Ave 3, Singapore 129905",email:"customer.first@foodincconcepts.org",hours:"11am - 11pm",zone:"West",instagram:"https://www.instagram.com/jalapeno_321/",facebook:"https://www.facebook.com/Jalapenoat321/",eatbook:"https://eatbook.sg/jalapeno-south-west/"}];function T(e){return""!==e&&"-"!==e}var L=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(a){a({type:"UPDATE_SELECTED_PLACE",payload:e,hasPayload:t})}},F=(a(41),["Show All","Master Category","Category","Zone"]),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).onSelectFilterType=function(e){a.props.selectFilterType(e.label)},a.onSelectFilterData=function(e){a.props.selectFilterData(e.label),a.props.updateSelectedPlace({},!1)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"isMobile",value:function(){return window.innerHeight/window.innerWidth>1.6}},{key:"render",value:function(){return s.a.createElement("div",{className:this.isMobile()?"filter-section-sp":"filter-section"},s.a.createElement("div",{className:this.isMobile()?"filter-section-header-bg-sp":"filter-section-header-bg"},s.a.createElement("div",{className:"filter-section-header"},"Filters")),s.a.createElement("div",{className:"filter-section-gap"}),s.a.createElement("div",{className:"filter-type-dropdown"},s.a.createElement(S.a,{arrowClosed:s.a.createElement("span",{className:this.isMobile()?"Dropdown-icon-sp":"Dropdown-icon"},s.a.createElement(v.a,null)),arrowOpen:s.a.createElement("span",{className:this.isMobile()?"Dropdown-icon-sp":"Dropdown-icon"},s.a.createElement(v.b,null)),options:F,onChange:this.onSelectFilterType,value:this.props.filterType,placeholder:"Filter By...",className:"filter-list",controlClassName:"Dropdown-control",menuClassName:this.isMobile()?"Dropdown-menu-type-sp":"Dropdown-menu-type"})),this.props.hasFilterType&&s.a.createElement("div",{className:"filter-data-dropdown"},s.a.createElement(S.a,{arrowClosed:s.a.createElement("span",{className:this.isMobile()?"Dropdown-icon-sp":"Dropdown-icon"},s.a.createElement(v.a,null)),arrowOpen:s.a.createElement("span",{className:this.isMobile()?"Dropdown-icon-sp":"Dropdown-icon"},s.a.createElement(v.b,null)),options:"Master Category"===this.props.filterType?this.props.masterCategoryList:"Category"===this.props.filterType?this.props.categoryList:"Zone"===this.props.filterType?this.props.zoneList:[],onChange:this.onSelectFilterData,value:this.props.filterData,placeholder:"Sort By...",className:"filter-list",controlClassName:"Dropdown-control",menuClassName:this.isMobile()?"Dropdown-menu-type-sp":"Dropdown-menu-type"})))}}]),t}(n.Component),O=Object(d.b)(function(e){return{hasFilterType:e.filterSection.hasFilterType,filterType:e.filterSection.filterType,filterData:e.filterSection.filterData,masterCategoryList:e.filterSection.masterCategoryList,categoryList:e.filterSection.categoryList,zoneList:e.filterSection.zoneList}},{selectFilterType:function(e){return function(t){var a=!0;"Show All"===e&&(a=!1),t({type:"SELECT_FILTER_TYPE",payload:e,payloadShowFilterData:a})}},selectFilterData:function(e){return function(t){t({type:"SELECT_FILTER_DATA",payload:e})}},updateSelectedPlace:L})(D),j=a(15),M={width:"80%",height:"100%"},A={width:"100%",height:"70%"},z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.props.updateSelectedPlace(e.placeData)},a.state={latitude:0,longitude:0,distance:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.href.split("?"),t="";e.length>1&&(t=e[1].split("&"));for(var a=1.35019,n=103.817834,s=3,o=0;o<t.length;++o)"lat"===t[o].substr(0,3)&&(a=t[o].substr(4)),"long"===t[o].substr(0,4)&&(n=t[o].substr(5)),"dist"===t[o].substr(0,4)&&(s=t[o].substr(5));this.setState({latitude:a,longitude:n,distance:s},function(){this.props.fetchPlaces(this.props.masterCategoryList,this.props.categoryList,this.props.zoneList)})}},{key:"isMobile",value:function(){return window.innerHeight/window.innerWidth>1.6}},{key:"renderMarkers",value:function(e){if(this.props.hasFilterData){if("Master Category"===this.props.filterType&&this.props.filterData!==e.master)return;if("Category"===this.props.filterType&&this.props.filterData!==e.category)return;if("Zone"===this.props.filterType&&this.props.filterData!==e.zone)return}return s.a.createElement(j.Marker,{key:e.id,title:e.name,name:e.name,position:{lat:e.lat,lng:e.long},placeData:e,onClick:this.onMarkerClick})}},{key:"render",value:function(){var e=this;return s.a.createElement(j.Map,{google:this.props.google,zoom:12,style:this.isMobile()?A:M,initialCenter:{lat:this.state.latitude,lng:this.state.longitude}},this.props.places.map(function(t){return e.renderMarkers(t)}))}}]),t}(n.Component),x=Object(d.b)(function(e){return{places:e.mapContainer.places,selectedPlace:e.mapContainer.selectedPlace,masterCategoryList:e.filterSection.masterCategoryList,categoryList:e.filterSection.categoryList,zoneList:e.filterSection.zoneList,hasFilterData:e.filterSection.hasFilterData,filterType:e.filterSection.filterType,filterData:e.filterSection.filterData}},{fetchPlaces:function(e,t,a){return function(n){for(var s=0;s<P.length;++s)P[s].hasOwnProperty("master")&&T(P[s].master)&&-1===e.indexOf(P[s].master)&&e.push(P[s].master),P[s].hasOwnProperty("category")&&T(P[s].category)&&-1===t.indexOf(P[s].category)&&t.push(P[s].category),P[s].hasOwnProperty("zone")&&T(P[s].zone)&&-1===a.indexOf(P[s].zone)&&a.push(P[s].zone);n({type:"FETCH_PLACES",payload:P})}},updateSelectedPlace:L})(Object(j.GoogleApiWrapper)({apiKey:"AIzaSyA4eoMwXF6WHOWLartYfDtKXKdOMotsBYQ"})(z)),R=(a(54),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"isMobile",value:function(){return window.innerHeight/window.innerWidth>1.6}},{key:"render",value:function(){return this.isMobile()?s.a.createElement(d.a,{store:b},s.a.createElement("div",{className:"main-section-sp"},s.a.createElement("div",{className:"map-section-sp"}," ",s.a.createElement(x,null)," "),s.a.createElement("div",{className:"side-section-sp"},s.a.createElement("div",{className:"display-section-sp"}," ",s.a.createElement(C,null)," "),s.a.createElement("div",{className:"filter-section-sp"}," ",s.a.createElement(O,null)," ")))):s.a.createElement(d.a,{store:b},s.a.createElement("div",{className:"main-section"},s.a.createElement("div",{className:"side-section"},s.a.createElement("div",{className:"display-section"}," ",s.a.createElement(C,null)," "),s.a.createElement("div",{className:"filter-section"}," ",s.a.createElement(O,null)," ")),s.a.createElement("div",null," ",s.a.createElement(x,null)," ")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.82cdd715.chunk.js.map