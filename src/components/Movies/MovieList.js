/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//loadin import
import Loading from '../Loading';


import Movie from "../Movie"
import { Link } from 'react-router-dom';
import ScrollTop from '../ScrollTop';

export default function MovieList() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  const {topIsloading, top_movies, topError} = useSelector(state => state.top_movies);
  const {popIsloading, pop_movies, popError} = useSelector(state => state.popular_movies);
  const {nowIsLoading, now_movies, nowError} = useSelector(state => state.now_movies);


  if(popIsloading) {
    return <Loading Loading={topIsloading} />
  } else {
    return (
      <div className='text-white p-5 mx-10'>
  
  
        {/* Top Rated Movies */}
      
          
          <div className='mt-5'>
            <div className='flex justify-center mx-auto mb-5'>
              <h2 className='mx-auto text-2xl'>Top Rated</h2>
            </div>
            <div className='mb-20 bg-slate-800 p-4 rounded-md'>
              <Slider {...settings} >
                {top_movies.length > 0 && top_movies.map(movie => {
                  return (
                    <Link key={movie.id} onClick={scrollToTop} to={`/${movie.id}`}><Movie name={movie.title} img={movie.poster_path} date={movie.release_date} /></Link>
                  ) 
                })}
              </Slider>
            </div>
          </div>
          
  
  
        {/* pop Rated Movies */}
        <div className='mt-5'>
            <div className='flex justify-center mx-auto mb-5'>
              <h2 className='mx-auto text-2xl'>Popular</h2>
            </div>
            <div className='mb-20 bg-slate-800 p-4 rounded-md'>
              <Slider {...settings} >
                {pop_movies.length > 0 && pop_movies.map(movie => {
                  return (
                    <Link key={movie.id} onClick={scrollToTop} to={`/${movie.id}`}><Movie name={movie.title} img={movie.poster_path} date={movie.release_date} /></Link>
                  ) 
                })}
              </Slider>
            </div>
          </div>
  
        {/* NOw Playing Movies */}
        <div className='mt-5'>
            <div className='flex justify-center mx-auto mb-5'>
              <h2 className='mx-auto text-2xl'>Now Playing</h2>
            </div>
            <div className='mb-20 bg-slate-800 p-4 rounded-md'>
              <Slider {...settings} >
                {now_movies.length > 0 && now_movies.map(movie => {
                  return (
                    <Link key={movie.id} onClick={scrollToTop} to={`/${movie.id}`}><Movie name={movie.title} img={movie.poster_path} date={movie.release_date} /></Link>
                  ) 
                })}
              </Slider>
            </div>
          </div>
  
        <ScrollTop />
                
      </div>
    )
  }
    
 
}
