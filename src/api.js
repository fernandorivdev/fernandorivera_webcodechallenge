import axios from 'axios';

const getPosts = (categoryName) => axios.get(`http://www.reddit.com/r/${categoryName}/.json`);

export default {
    getPosts,
}