import { useParams } from "react-router"

const { default: axios } = require("axios")
const { useState, useEffect } = require("react")


const BASE_URLX = 'http://ws.audioscrobbler.com/2.0/'


function useTopArtistsSearch() {
  const [artistsList, setArtistList] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect( () => {
    axios.get(BASE_URLX, {
      params: {
        method: 'chart.gettopartists',
        api_key: process.env.REACT_APP_LAST_FM,
        format: 'json',
        limit: 20
      }
    }).then(res => {
      setArtistList(res.data)
      setIsLoaded(true)
    }).catch(err => {
      console.log(err)
      setError(err)
    })
  }, [])

  return {artistsList, isLoaded, error}

}

function useArtistSearch(artistQuery) {
  const [artist, setArtist] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const { name } = useParams()

  useEffect( () => {
    axios.get(BASE_URLX, {
      params: {
        method: 'artist.getinfo',
        artist: name,
        api_key: process.env.REACT_APP_LAST_FM,
        format: 'json'
      }
    }).then(res => {
      setArtist(res.data)
      setIsLoaded(true)
    }).catch(err => {
      console.log(err)
      setError(err)
    })
  }, [])


  return {artist, isLoaded, error}
}


export { useTopArtistsSearch, useArtistSearch}