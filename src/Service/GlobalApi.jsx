import axios from "axios";

const moviebaseUrl = "https://api.themoviedb.org/3";
const api_key = "16b6532e89dd7ecabb629465f3464976";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
// https://api.themoviedb.org/3/movie/changes?api_key=16b6532e89dd7ecabb629465f3464976
const getTrandingVideos = axios.get(
  moviebaseUrl + "/trending/all/day?api_key=" + api_key // Added "=" after api_key
);
const getMovieByGenreId=(id)=>
axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
  getTrandingVideos,
  getMovieByGenreId
};
