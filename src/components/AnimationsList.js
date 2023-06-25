/* eslint-disable */
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Movie from "./Movie"
import { Link } from 'react-router-dom';
import ScrollTop from './ScrollTop';


export default function AnimationsList() {


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
  


    const {topIsloading, top_animations, topError} = useSelector(state => state.top_animations);
    const {popIsloading, pop_animations, popError} = useSelector(state => state.popular_animations);
    const {newIsloading, new_animations, newError} = useSelector(state => state.new_animations);


  return (
    <div className='text-white p-5 mx-10'>


      {/* Top Rated Movies */}
      <div className='mt-5'>
          <div className='flex justify-center mx-auto mb-5'>
            <h2 className='mx-auto text-2xl'>Top Rated</h2>
          </div>
          <div className='mb-20 bg-slate-800 p-4 rounded-md'>
            <Slider {...settings} >
              {top_animations.length > 0 && top_animations.slice(0,19).map(animation => {
                return (
                  <Link to={`/${animation.id}`} key={animation.id} >
                    <Movie name={animation.title} img={animation.poster_path} date={animation.release_date} />
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
              {pop_animations.length > 0 && pop_animations.slice(0,19).map(animation => {
                  return (
                    <Link to={`/${animation.id}`} key={animation.id} >
                      <Movie name={animation.title} img={animation.poster_path} date={animation.release_date} />
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
              {new_animations.length > 0 && new_animations.slice(0,19).map(animation => {
                  return (
                    <Link to={`/${animation.id}`} key={animation.id} >
                      <Movie name={animation.title} img={animation.poster_path} date={animation.release_date} />
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
