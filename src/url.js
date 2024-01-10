import List from './Components/List/List'
import {API_KEY} from './Constants/Constants'
export const genreList=`/genre/movie/list?api_key=${API_KEY}&language=en`
export const trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`
export const genreMovies =`/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=`