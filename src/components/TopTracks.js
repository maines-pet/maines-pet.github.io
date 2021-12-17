import { Link } from "react-router-dom";
import { useChartTopTracks, useTopArtistsSearch } from "../hooks/api";

export function TopTracks(props) {
  const { tracks, isLoaded, error } = useChartTopTracks()

  return (
    <div className='pl-8'>
      <p className='text-2xl'>Top Charts</p>
      <ul className='xl:grid xl:grid-cols-2 divide-gray-500'>
        {isLoaded &&
          tracks.track.map((row, index) => {
            return <TracksRow key={tracks.track.url} data={row} ranking={index} />
          })
        }
      </ul>
    </div>
  );
}


function TracksRow(props) {

  const { name, playcount, listeners, artist, url } = props.data

  return (
    <li className={'pb-3'} >
      <div className='flex flex-row gap-x-2'>
        <div className='w-24 text-right my-auto'>
          <p className='text-6xl '>{props.ranking + 1}</p>
        </div>
        <div>
          <Link to={'/artist/' + encodeURIComponent(artist.name) + '/track/' + encodeURIComponent(name)}>
            <div className='w-[500px]'>
              <div className='hover:underline text-3xl truncate p-0.5'>{name}</div>
            </div>
          </Link>
          <Link to={'/artist/' + encodeURIComponent(artist.name)}>
            <p className='text-xl'>by <span className='hover:underline'>{artist.name}</span></p>
          </Link>
          <p>Play count: {(+playcount).toLocaleString('en-US')}</p>
          <p>Listeners: {(+listeners).toLocaleString('en-US')}</p>
        </div>
        <hr />
      </div>
    </li>
  )
}