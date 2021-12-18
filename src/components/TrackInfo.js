import React from 'react';
import { Link } from 'react-router-dom';
import { useTrackInfo } from '../hooks/api';

function TrackInfo(props) {

  const { trackInfo, isLoaded, error } = useTrackInfo()
  return (

    <div className='mt-4 ml-4'>
      {
        isLoaded &&
        <div className='mt-3'>
          <Link to={'/artist/' + encodeURIComponent(trackInfo.artist.name)} className='text-xl opacity-70 hover:opacity-100 hover:underline'>{trackInfo.artist.name}</Link>
          <h2 className='text-3xl'>{trackInfo.name}</h2>
          <p>{convertMiliSecToMinSec(trackInfo.duration)}</p>
          <p>{(+trackInfo.listeners).toLocaleString('en-US') + ' listeners'}</p>
          <p className='mt-4'>{trackInfo.wiki.summary}</p>
          <div className='mt-4'>
            <h1 className='mb-3'>Appears On</h1>
            <div className='flex flex-col content-center justify-center absolute border rounded-md w-24 aspect-square text-center'>
              <Link to={`/artist/${trackInfo.artist.name}/album/${trackInfo.album.title}`} className='p-4 text-sm'>{trackInfo.album.title}</Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

function convertMiliSecToMinSec(duration) {
  const min = Math.floor(duration / (1000 * 60))
  const sec = (duration / 1000) % 60
  return min + 'm' + sec.toString().padStart(2, '0') + 's'
}

export default TrackInfo;