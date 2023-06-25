/* eslint-disable */
import { useEffect } from "react";
import "../index.css"

//importing react router
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom';



//importing redux 
import { useDispatch } from "react-redux";



//importing fetch function
import fetchPopularMovies from "../Redux/movies/popular/popAsync";
import fetchNowMovies from "../Redux/movies/now_playing/nowAsync";
import fetchTopMovies from "../Redux/movies/top_rated/topMoviesAsync";

import fetchNewSeries from "../Redux/series/airing_today/todaySeriesAsync";
import fetchPopularSeries from "../Redux/series/popular/popularSeriesAsync";
import fetchTopSeries from "../Redux/series/top_rated/topSeriesAsync";
import fetchOnTheAirSeries from "../Redux/series/on_the_air/onTheAirSeriesAsync";

import fetchTopAnimations from "../Redux/animations/top/topAnimationsAsync";
import fetchPopAnimations from "../Redux/animations/popular/popAnimationsAsync";
import fetchNewAnimations from "../Redux/animations/new/newAnimationsAsync";


//importing router layouts
import RootLayout from "../Layouts/RootLayout";
import AnimationsLayout from "../Layouts/AnimationsLayout"
import SeriesLayout from "../Layouts/SeriesLayout"

//importing components
import MovieList from "./Movies/MovieList";
import SeriesList from "./Series/SeriesList"
import AnimationsList from "./AnimationsList";
import MovieDetails, { movieDetailLoader } from "./Movies/MovieDetails";
import SeriesDetails, {seriesDetailLoader} from "./Series/SeriesDetails";
import Error from "./Error";
import fetchGenres from "../Redux/Genres/GenreAsync";
import GenreList from "./Genre/GenreList";


// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route exact index element={<MovieList />} />
      <Route path=":id" element={<MovieDetails />} loader={movieDetailLoader}  errorElement={<Error />} />

      <Route path="series" element={<SeriesLayout />} >
        <Route exact index element={<SeriesList />} />
        <Route path=":id" element={<SeriesDetails />} loader={seriesDetailLoader} errorElement={<Error />} />
      </Route>

      <Route path="animations" element={<AnimationsLayout />} >
        <Route exact index element={<AnimationsList />} />
        <Route path=":id" element={<MovieDetails />} loader={movieDetailLoader} errorElement={<Error />} />
      </Route>

      <Route path="genres/:id" element={<GenreList />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
)





function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchPopularMovies());
    dispatch(fetchNowMovies());
    dispatch(fetchTopMovies());

    dispatch(fetchPopularSeries());
    dispatch(fetchNewSeries());
    dispatch(fetchOnTheAirSeries());
    dispatch(fetchTopSeries());

    dispatch(fetchTopAnimations());
    dispatch(fetchPopAnimations());
    dispatch(fetchNewAnimations());

    dispatch(fetchGenres());

  }, [dispatch])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
