import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../Service/GlobalApi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screen =window.innerWidth
const Lider = () => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrandngMovies();
  }, []);
  const getTrandngMovies = () =>
    GlobalApi.getTrandingVideos.then((resp) => {
      // console.log(resp.data.results.backdrop_path)
      setMovies(resp.data.results);
    });
 const slideRight=(element)=>{
    element.scrollLeft+=screen-100
 }
 const slideLeft=(element)=>{
    element.scrollLeft-=screen-100
 }
  return (
    <div>
      <AiOutlineDoubleLeft
        className="text-white scroll-smooth hidden md:block cursor-pointer absolute mx-8 mt-[150px]"
        onClick={() => slideRight(elementRef.current)}
      />
      <AiOutlineDoubleRight
        className="text-white scroll-smooth hidden md:block cursor-pointer absolute right-0 mx-11 mt-[150px]"
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movies.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.poster_path}
            className="scrollbar-hide  min-w-full md:h-[310px] object-cover  mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in duration-100"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Lider;
