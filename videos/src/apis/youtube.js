import axios from 'axios';

const KEY = 'AIzaSyAgiaPAdWbfL1pUgS45EvCfVf0fjheKAx8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
