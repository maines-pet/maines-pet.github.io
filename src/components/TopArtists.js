import classNames from "classnames";
import { Link } from "react-router-dom";
import { useFlickrSearchResults, useTopArtistsSearch } from "../hooks/api";
export function TopArtists(props) {

  const { artistsList, isLoaded, error } = useTopArtistsSearch()

  return (
    <div className='pl-8'>
      <p className='text-2xl'>Top Artists</p>
      <ul className='grid grid-cols-2  divide-gray-500'>
        {isLoaded &&
          artistsList?.artists?.artist.map((row, index) => {
            return <ArtistRow data={row} ranking={index}/>
          })
        }
      </ul>
    </div>
  );
}

function ArtistRow(props) {

  const {name, playcount, listeners, url} = props.data

  return (
    <li className={'pb-3'} >
      <Link to={'/artist/' + encodeURIComponent(name)}> 
      <div className='flex flex-row gap-x-2'>
        <div className='w-24 text-right my-auto'>
          <p className='text-6xl '>{props.ranking + 1}</p>
        </div>
        <div>
          <p className='text-3xl'>{name}</p>
          <p>Play count: {(+playcount).toLocaleString('en-US')}</p>
          <p>Listeners: {(+listeners).toLocaleString('en-US')}</p>
        </div>
        <hr />
      </div>
      </Link>
    </li>
  )
}