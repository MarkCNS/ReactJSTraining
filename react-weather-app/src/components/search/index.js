import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import axios from "axios";
// import { GEO_API_URL, geoApiOptions } from "../../APIs";

const Search = ({ startSearch }) => {
  const { search, setSearch } = useState(null);

  const loadOptions = (inputValue) => {
    const geoAPIOptions = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: { namePrefix: `${inputValue}` },
      headers: {
        "X-RapidAPI-Key": "a16853c028msh5fabf933314ef83p1beb54jsn3ec68626d3dc",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    return (
      axios
        .request(geoAPIOptions)
        // .then(function (response) {
        //   console.log(response.data);
        // })
        .then(function (response) {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        })
        .catch(function (error) {
          console.error(error);
        })
    );
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    startSearch(setSearch);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
