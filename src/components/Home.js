import { useState, useEffect } from "react";
import countryList from 'iso-3166-country-list'

export function Home(props) {

  const [country, setCountry] = useState('australia')

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <p>Welcome to first.fm</p>
      <h1>Top Charts in <span className='capitalize'>{country}</span></h1>
      <select value={country} name='countries' id='countries' onChange={handleChange}>
        {countryList.names.map((countryElement) => <option key={countryElement} value={countryElement}>{countryElement}</option>)}
      </select>
    </div>
  );
}
