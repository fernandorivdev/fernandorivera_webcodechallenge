import axios from 'axios';

const getPosts = (categoryName) => axios.get(`https://www.reddit.com/r/${categoryName}/.json`);

export default {
    getPosts,
}
