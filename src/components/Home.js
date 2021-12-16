import { useState, useEffect } from "react";

export function Home(props) {

  const [country, setCountry] = useState('australia')


  return (
    <div>
      <p>Welcome to first.fm</p>
      <h1>Top Charts in <span className='capitalize'>{country}</span></h1>
    </div>
  );
}
