import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../Service/GlobalApi";
import MovieCart from "../MoviCard/MovieCart";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import GlobalApi from '../../Service/GlobalApi';

const MovieList = ({ genreId }) => {
  const [movielist, setMovielist] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMoviewsByGeneraId();
  }, []);
  // console.log(generaId)
  const getMoviewsByGeneraId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovielist(resp.data.results);
    });
  };
  const slideRight=(element)=>{
    element.scrollLeft+=500;
}
const slideLeft=(element)=>{
    element.scrollLeft-=500;
}
  return (
    <div className="relative">
        <AiOutlineDoubleLeft
        className="text-white scroll-smooth hidden md:block cursor-pointer absolute mx-8 mt-[150px]"
        onClick={() => slideRight(elementRef.current)}
      />
      <div ref={elementRef} className="flex gap-8 overflow-x-auto scrollbar-hide pt-5 px-3  pb-10">

      {movielist.map((item, index) => (
        <MovieCart item={item} />
      ))}
      </div>
        <AiOutlineDoubleRight
        className="text-white scroll-smooth hidden md:block cursor-pointer absolute right-0 mx-11 mt-[150px]"
        onClick={() => slideLeft(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
