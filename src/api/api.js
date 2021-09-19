const API_KEY = 'AIzaSyBkigTZaHLxi_lGKZJoIZDHMgBwoiApgZ4'

const uri = 'https://youtube.googleapis.com/youtube/v3/search'

export default class Api {
    static getVideos(lat, long, maxResults) {
        const locationRadius = '1'

        const url =
            uri +
            `?part=snippet&location=${lat}%2C${long}&locationRadius=${locationRadius}km&maxResults=${maxResults}&type=video&key=${API_KEY}`

        return fetch(url, { method: 'GET' })
    }
}
