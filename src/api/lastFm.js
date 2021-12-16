import axios from "axios"
import { useEffect, useState } from "react"

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/'
// JSON: /2.0/?method=geo.gettoptracks&country=spain&api_key=YOUR_API_KEY&format=json
// JSON: /2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json 

function useGetTopArtists() {
    const [artistsList, setArtistList] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(BASE_URL, {
            params: {
                method: 'chart.gettopartists',
                api_key: process.env.REACT_APP_LAST_FM,
                format: 'json',
                limit: 20
            }
        }).then(res => {
            setArtistList(res)
            setIsLoaded(true)
        })
            .catch(err => {
                console.error(err)
                setError(err)
            })
    }, [])

}

export { useGetTopArtists }