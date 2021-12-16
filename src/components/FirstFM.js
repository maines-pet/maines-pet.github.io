import { useState, useEffect } from 'react'
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import ArtistInfo from './ArtistInfo';
import { Home } from './Home'
import { TopArtists } from './TopArtists'

function FirstFM(props) {



  return (
    <Router>
      <div className='text-gray-300'>
        <div className='grid grid-cols-5 container mx-auto bg-slate-600 h-screen overflow-scroll'>
          <nav className='bg-slate-900  '>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/search'>Search</Link></li>
              <li><Link to='/top-artists'>Top Artists</Link></li>
              <li><Link to='/top-charts'>Top Charts</Link></li>
              <li>Playlist</li>
            </ul>
          </nav>

          <div className='col-span-4'>

            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/top-artists' element={<TopArtists />} />
              <Route path='/top-charts' element={<TopCharts />} />
              <Route path='/artist/:name' element={<ArtistInfo />} />
            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
}

function TopCharts(props) {
  return (
    <div>
      <p>Top Charts</p>
    </div>
  )
}


export default FirstFM;