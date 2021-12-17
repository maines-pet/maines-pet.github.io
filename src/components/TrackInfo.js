import React from 'react';
import { useTrackInfo } from '../hooks/api';

function TrackInfo(props) {

  const { trackInfo, isLoaded, error } = useTrackInfo()
  return (
    <div>
      <div className='mt-3'>
        <p className='text-xl opacity-70 hover:opacity-100 hover:underline cursor-pointer'>Adele</p>
        <h2 className='text-3xl'>Easy on me</h2>
        <p>length {convertMiliSecToMinSec(240000)}</p>
        <p>240000 listeners</p>
        <p>played 240000213s</p>
        <p>"\"Believe\" is a Grammy Award winning global number one, Multi-Platinum Dance Song which served as the world-wide lead single for American singer Cher's twenty-third studio album Believe. It is noted for its use of a peculiar sound effect on the singer's vocals, which is referred to as the Cher effect today.\n\n\"Believe\" was written by a number of writers including Paul Barry, Matt Gray, Brian Higgins, Stuart McLellan, Timothy Powell, and Steven Torch."</p>
      </div>
    </div>
  );
}

function convertMiliSecToMinSec(duration) {
  const min = duration / (1000 * 60)
  const sec = duration % (1000 * 60)
  return min + ':' + sec.toString().padStart(2, '0')
}

export default TrackInfo;