import axios from 'axios';


//global methods for requesting stuff...
const base = 'https://api.themoviedb.org/3/movie/';
const fixedparams = {api_key:'cd44d448bc1169dedd76d8551b773944',
  language:'en-US', include_adult: true};

const base_search = 'https://api.themoviedb.org/3/search/movie/'

const get = async (category, params='') => {
    const query = base + category; //category can be single movie or an actual category.
    const mod_params = {...fixedparams,...params}; /*Makes a copy of the fixed parameters and adds the new inputs... if there is none, the empty string won't affect the query.*/
    const result = await axios.get(query, {params : mod_params});
    //we pass the modified parameters...

    if(result.status === 200){
        return result.data;
    }
}

const getSearch = async (queryString, params='') => {
    const mod_params = {...fixedparams,...{query: queryString},...params}
    console.log(mod_params)
    const result = await axios.get(base_search, {params : mod_params});

    if(result.status === 200){
        return result.data;
    }
}


class MovieApi {
  static async getSingleMovie(movieId){
    const result = await get(movieId);
    return result;
}
static async getMovies(category, page_number){
    const result = await get(category, {page:page_number});
    return result;
}

static async getMoviesSearch(queryString, page_number){
    const result = await getSearch(queryString, {page:page_number});
    return result;
}
}

export default MovieApi;
