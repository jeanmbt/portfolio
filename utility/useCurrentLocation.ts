import { useEffect, useState } from "react";
// import { fetchCountry } from "../api/fetchCountry";

async function fetchCountry({ latitude, longitude }:any) {

  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_MAPS_API_KEY}`;

  const locationData = await fetch(URL).then((res) => res.json());

  const [{ address_components }] = locationData.results.filter(({ types }:any) => types.includes('country'));

  const [{ short_name }] = address_components;
  
  return short_name; 

}

export const useCurrentLocation = () => {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  async function handleNavigator(position: GeolocationPosition) {

    const { latitude, longitude } = position.coords;
    
    // TODO: fetch instead of hardcoded
    // const userCountryCode = await fetchCountry({ latitude, longitude });
    const userCountryCode = "DE"
    setCountry(userCountryCode);
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
    setCountry("de");
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(handleNavigator, handleError);
  }, []);

  return {country, setCountry}
};



