/* eslint-disable */
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Movie from "../Movie"
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import ScrollTop from '../ScrollTop';


export default function SeriesList() {


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
  


  const {topIsloading, top_series, topError} = useSelector(state => state.top_series);
  const {popIsloading, pop_series, popError} = useSelector(state => state.popular_series);
  const {upIsLoading, up_series, upError} = useSelector(state => state.upcoming_series);
  const {newIsLoading, new_series, newError} = useSelector(state => state.new_series);

  if(topIsloading) {
    return <Loading />
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
                {top_series.length > 0 && top_series.slice(0,19).map(series => {
                  return (
                    <Link to={`/series/${series.id}`} key={series.id} >
                      <Movie name={series.name} img={series.poster_path} date={series.first_air_date} />
                    </Link>
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
                {pop_series.length > 0 && pop_series.slice(0,19).map(series => {
                    return (
                      <Link to={`/series/${series.id}`} key={series.id} >
                        <Movie name={series.name} img={series.poster_path} date={series.first_air_date} />
                      </Link>
                    ) 
                  })}
              </Slider>
            </div>
          </div>
  
        {/* NOw Playing Movies */}
        <div className='mt-5'>
            <div className='flex justify-center mx-auto mb-5'>
              <h2 className='mx-auto text-2xl'>Up Coming</h2>
            </div>
            <div className='mb-20 bg-slate-800 p-4 rounded-md'>
              <Slider {...settings} >
                {up_series.length > 0 && up_series.slice(0,19).map(series => {
                    return (
                      <Link to={`/series/${series.id}`} key={series.id} >
                        <Movie name={series.name} img={series.poster_path} date={series.first_air_date} />
                      </Link>
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
                {new_series.length > 0 && new_series.slice(0,19).map(series => {
                    return (
                      <Link to={`/series/${series.id}`} key={series.id} >
                        <Movie name={series.name} img={series.poster_path} date={series.first_air_date} />
                      </Link>
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
