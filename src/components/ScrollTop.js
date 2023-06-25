import React, {useState, useEffect} from 'react'

export default function ScrollTop() {

    //button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      })
    }, []);
  

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };


  return (
    <div>
    {/*the button*/}
    {showButton && (
      <button className='inline fixed right-8 bottom-40 lg:bottom-20 py-2 px-3 rounded-[100%] bg-red-700' onClick={scrollToTop}>
        <i className="fa-sharp fa-solid fa-chevron-up m-0 p-0" style={{color: "#ffffff"}}></i>
      </button>
    )}
  </div>
  )
}
