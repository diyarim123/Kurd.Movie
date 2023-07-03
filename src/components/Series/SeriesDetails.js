/* eslint-disable */
import React from "react";
import YouTube from "react-youtube";
import { useLoaderData, useParams, Link } from "react-router-dom";
import ScrollTop from "../ScrollTop";


export default function SeriesDetails() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left : 0,
      behavior: "smooth"
    })
  }


  const opts = {
    width : "100%"
  }

  const { id } = useParams();
  const { detail, providers, trailers, reviews,recommends } = useLoaderData();

  return (
    <div>
      {/* Top Container */}
        <>
        {detail ?
        <>
        <div className="flex lg:flex-row flex-col items-center gap-5 p-5 border-b-2 mb-5">
      
          <img
            className="border-2 object-cover w-60"
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.name}
            onError={(e) => {e.target.onError=null; e.target.src= `/notFound.png`}}
          />

      
          <div className="flex flex-col lg:items-start items-center gap-4 text-slate-300">

            <div className="flex lg:flex-row flex-col items-center gap-6 lg:gap-3 mb-5 lg:mb-0">

              {/* Title */}
              <span className="lg:text-3xl text-xl font-semibold text-center text-white mr-2">
                {detail.name} <span className="hidden lg:inline"> | </span> 
              </span>


              {/* Rating */}
              <span className="text-2xl bg-yellow-300 px-2 mx-auto lg:mx-0 rounded-lg text-slate-950">

                {detail.vote_average && 
                  <span className="mr-1">{detail.vote_average.toFixed(1)}</span>
                }
            
            
                <i
                  className="fa-solid fa-star text-sm"
                  style={{ color: "#000" }}
                ></i>

              </span>



              {/* Watch Now */}
              {providers.results && (
                <span>
                  
                  <span className="mx-2 lg:text-3xl text-2xl text-white font-semibold hidden lg:inline">
                    |
                  </span>

                  <Link
                    to={providers.results.AD && providers.results.AD.link}
                    className="p-2 border-2 border-red-600 hover:bg-red-600 rounded-lg text-white text-lg"
                  >
                    
                    <span className="hover:mr-1">Watch Now </span>

                    <i
                      className="fa-solid fa-arrow-right ml-1"
                      style={{ color: "#ffffff" }}
                    ></i>

                  </Link>

                </span>
              )}


            </div>


            {/* time and language */}
            <div className="text-md flex gap-3">


              <span>{detail.first_air_date}</span>
                          |
              <span>

                <span className="mr-1 text-white">
                  {`${detail.last_episode_to_air.season_number} Seasons`}
                </span>

              </span>
                            | 
              {detail.spoken_languages &&
                <span>{detail.spoken_languages[0].name}</span>
              }
              

            </div>

            <hr />

            {/* Overview */}
            {detail.overview && 
              <div className="text-lg text-white text-center lg:text-left">{detail.overview}</div>
            }


            <hr />


            {/* Genres */}
            {detail.genres && 
              <>
              {detail.genres.length > 0 && 
                <div className="text-md font-mono text-center">
                  <span className="text-lg font-sans">Genres: </span>
                  {`${detail.genres.slice(0,3).map((genre) => genre.name)}`}
                </div>
              }
              </>
            }


            {/* Budget */}
            {detail.budget > 0 && 
              <div className="text-md text-center">
                <span className="text-lg font-sans">Budget: </span>
                {`${detail.budget}$`}
              </div>
            }


            {/* Production */}
            <div className="text-md font-mono">
            {detail.production_companies &&
              <>
              {detail.production_companies.length > 0 && 
                <>
                  <span className="text-lg font-sans">Production: </span>
                  {`${
                    detail.production_companies.slice(0,3).map((product) => product.name)
                  }`}
                </>
              }
              </>
            }
            </div>


          </div>
        </div>
        </>
        :
        <div className="text-white h-72 p-5 border-b-2">
          <h1 className="text-2xl my-auto text-center">Sorry, no information found</h1>
        </div>
      }

      {/* Watch On*/}
      {providers.results && 
        <>
          {providers.results.AD && (
            <div className="flex flex-col items-center gap-5 text-white border-b-2 p-5">
              <h1 className="text-2xl text-red-600">
                Watch <span className="text-white">on</span>
              </h1>
              <div className="flex flex-col items-center gap-4">
                {providers.results.AD &&
                  providers.results.AD.flatrate.map((provider) => (
                    <div
                      key={provider.id}
                      className="flex flex-col items-center"
                    >
                      <h2 className="text-xl">{provider.provider_name}</h2>
                      <img
                        className="object-cover w-32 h-32 mt-5"
                        src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
                        alt={provider.name}
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      }

      {/* reviews */}
      {reviews.length > 0 && (
        <div className="mt-5 border-b-2 p-5">
          <h1 className="text-2xl text-center text-red-600">Reviews</h1>
          <div className="reviewsContainer">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="flex flex-col gap-2 bg-slate-800 rounded-md p-2 mb-5 h-72"
              >
                <div className="flex flex-row gap-2 items-center">
                  {review.author_details.avatar_path && (
                    <img
                      className="w-12 h-12 rounded-3xl border-2 p-1"
                      src={review.author_details.avatar_path.slice(1)}
                      alt={review.author}
                    />
                  )}
                  <h3 className="text-lg font-mono">{review.author}</h3>
                </div>
                <div className="overflow-auto lg:h-72 lg:w-80">
                  <p className="font-sm">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trailer Container */}
      {trailers.results[0] &&
        <>
          <h1 className="text-2xl text-red-600 text-center mt-3">Trailer</h1>
        
          <div className="text-white flex items-center gap-5 p-5 border-b-2">
              <YouTube className="w-[40rem] mx-auto h-auto" opts={opts}  videoId={trailers.results[0].key} />    
          </div>
        </>
        }


      {/* Other Seasons */}
      {detail.seasons.length > 1 && 

        <>
          <h1 className="text-red-600 text-center mt-5 text-2xl">Other Seasons</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 p-5 gap-5 text-white">
            {detail.seasons.slice(1).map(season => (
              <div className="relative mb-20 w-72 h-96 p-1 mx-auto"> {/*main container*/}

                <div className="front absolute w-full h-full animation bg-slate-800 rounded-md"> {/*the card*/}

                  <div className="absolute w-full h-full backface-visibility"> {/*front*/}
                    <img
                    className="w-full h-full object-cover mb-2"
                    src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} 
                    alt={season.name}
                    onError={(e) => {e.target.onError=null; e.target.src= `/notFound.png`}}
                    />
                    <div className="flex flex-col justify-center items-center gap-1 min-h-[5rem]">
                      <p className="text-md text-center">{season.name}</p>
                      <p>{season.first_air_date}</p>
                    </div>
                  </div>

                  <div className="absolute w-full h-full backface-visibility rotateY p-3 overflow-y-scroll"> {/*back*/}
                    <p>{season.overview}</p>
                    <p className="text-center mt-10 font-semibold">{season.air_date === null ? `Not Released Yet` : `Released on ${season.air_date}`}</p>
                    <p className="text-center mt-2 text-red-600 font-semibold text-lg">{season.episode_count > 0 ? `${season.episode_count} Episodes` : null}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </> 
        
      }




      
      <h3 className={`text-center text-red-600 text-2xl pt-5 ${detail.seasons.length > 1 ? `border-t-2 mt-10` : null} `}>Recommendations</h3>
      {/* Recommendations */}
      {recommends.length > 0 && 
        
          <div className="flex overflow-x-auto gap-5 mx-auto mb-10 p-5 max-h-[30rem]">
            {recommends.map(recommend => (
              <Link onClick={scrollToTop} to={`/series/${recommend.id}`} key={recommend.id}>
                <div className="min-w-[15rem] max-h-[30rem] bg-slate-800 rounded-md p-1 text-white">
                  <img
                  className="w-full h-80 object-cover mb-2"
                  src={`https://image.tmdb.org/t/p/w500${recommend.poster_path}`} 
                  alt={recommend.name}
                  onError={(e) => {e.target.onError=null; e.target.src= `/notFound.png`}}
                  />
                  <div className="flex flex-col justify-center items-center gap-1 min-h-[5rem]">
                    <p className="text-md text-center">{recommend.name}</p>
                    <p>{recommend.first_air_date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      }
        </>
      
      <ScrollTop />


    </div>
  );
}

//loader function
export const seriesDetailLoader = async ({ params }) => {
  const { id } = params;

  const URL = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  const URL2 = `https://api.themoviedb.org/3/tv/${id}/watch/providers`;
  const URL3 = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
  const URL4 = `https://api.themoviedb.org/3/tv/${id}/reviews`;
  const URL5 = `https://api.themoviedb.org/3/tv/${id}/recommendations`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGViOGZhOTA2NGU0MzdkM2MzMWYzMmQwYzk1OTgyZSIsInN1YiI6IjY0N2QxMzFkMjYzNDYyMDBkYzQyYWE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf47sgagxX8a8BU3LZ0s737y5wqL7OR352ZgKBX8YjA",
    }
  };

  try {
    const request1 = fetch(URL, options);
    const request2 = fetch(URL2, options);
    const request3 = fetch(URL3, options);
    const request4 = fetch(URL4, options);
    const request5 = fetch(URL5, options)
  
    const [response1, response2, response3, response4, response5] = await Promise.all([
      request1,
      request2,
      request3,
      request4,
      request5
    ]);
    const [data1, data2, data3, data4, data5] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
      response4.json(),
      response5.json()
    ]);


      // Check for errors in responses
      if (!response1.ok || !response2.ok || !response3.ok || !response4.ok || !response5.ok) {
        throw new Error('Failed to fetch data');
      }


    return {
      detail: data1,
      providers: data2,
      trailers: data3,
      reviews: data4.results,
      recommends : data5.results
    };

    
    
  } catch (err) {
    throw Error(err)
  }

};
