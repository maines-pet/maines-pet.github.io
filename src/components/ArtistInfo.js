import React from 'react';
import { useArtistSearch } from '../hooks/api';

function ArtistInfo(props) {

  // const {artist, isLoaded, error} = useArtistSearch()
  // isLoaded && console.log(artist)
  return (
    <div className='mt-8'>
      <h1 className='text-3xl'>Taylor Swift</h1>
      <p>Taylor Alison Swift is an American singer-songwriter. Her narrative songwriting, which often takes inspiration from her personal life, has received widespread critical praise and media coverage. Swift debuted as a country singer, but eventually incorporated and moved into other genres, including (but not limited to) pop rock, synth-pop,  electro-pop, dance pop, folk pop, and indie folk.\n\nBorn in West Reading, Pennsylvania, Swift relocated to Nashville, Tennessee, in 2004 to pursue a career in country music.</p>
    </div>
  );
}

export default ArtistInfo;