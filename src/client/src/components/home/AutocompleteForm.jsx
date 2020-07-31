
import React, { Component, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faLandmark, faFan, faToilet, faPersonBooth, faMusic,faHandHoldingWater,faMoneyBillWave,faBreadSlice,faWifi,faFire, faHotTub, faBed,faCheese, faRestroom,faParking, faThermometerEmpty, faChair, faTv, faSoap, faLocationArrow, faSearchLocation} from "@fortawesome/free-solid-svg-icons"
// import {hotelEntityDataRequest,hotelBillingDataRequest,hotelReviewDataRequest} from "../../../redux/authentication/actions"
import {connect} from "react-redux"
import PlacesAutocomplete,{
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  }  from 'react-places-autocomplete';

 const AutocompleteForm =()=> {
    const [address, setAddress] = useState("")
    
  const handleChange = address => {
    setAddress(address);
};

const handleSelect = address => {
    setAddress(address);

    const data = geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
        console.log(data)
  };
     return (
       <>
         <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span><FontAwesomeIcon icon={faSearchLocation}/>
                        {suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
       </>
     )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
    user: state.auth.user,
    entityData: state.auth.entityData,
    review: state.auth.review
});

const mapDispatchToProps = (dispatch) => ({
//   hotelEntityDataRequest: (payload) => dispatch(hotelEntityDataRequest(payload)), 
//   hotelBillingDataRequest: (payload) => dispatch(hotelBillingDataRequest(payload)), 
//   hotelReviewDataRequest: (payload) => dispatch(hotelReviewDataRequest(payload)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteForm);