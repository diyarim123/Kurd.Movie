import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


//importing movie reducers
import popularMoviesSlice from "./Redux/movies/popular/popSlice"
import nowMoviesSlice from "./Redux/movies/now_playing/nowSlice"
import topMoviesSlice from './Redux/movies/top_rated/topMoviesSlice';

//import series reducers
import newSeriesSlice from './Redux/series/airing_today/todaySeriesSlice';
import popularSeriesSlice from "./Redux/series/popular/popularSeriesSlice"
import onTheAirSeriesSlice from './Redux/series/on_the_air/onTheAirSeriesSlice';

//import animations reducers
import newAnimationsSlice from "./Redux/animations/new/newAnimationsSlice";
import topAnimationsSlice from "./Redux/animations/top/topAnimationsSlice";
import popAnimationsSlice from "./Redux/animations/popular/popAnimationsSlice";


//importing genresSlice
import GenreSlice from './Redux/Genres/GenreSlice';
import GenreDetailSlice from './Redux/GenreDetail/GenreDetailSlice';

//importing redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import topSeriesSlice from './Redux/series/top_rated/topSeriesSlice';



const store = configureStore({
  reducer : {
    popular_movies : popularMoviesSlice,
    now_movies : nowMoviesSlice,
    top_movies : topMoviesSlice,

    popular_series : popularSeriesSlice,
    new_series : newSeriesSlice,
    upcoming_series : onTheAirSeriesSlice,
    top_series : topSeriesSlice,

    top_animations : topAnimationsSlice,
    popular_animations : popAnimationsSlice,
    new_animations : newAnimationsSlice,


    genres : GenreSlice,
    genre_detail : GenreDetailSlice

  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>  
  </React.StrictMode>
);