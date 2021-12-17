import React from 'react';
import { useParams } from 'react-router';

function AlbumInfo(props) {

  const {name, album} = useParams()
  return (
    <div>
      {name + ' ' + album}
    </div>
  );
}

export default AlbumInfo;