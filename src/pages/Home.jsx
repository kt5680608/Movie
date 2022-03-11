import React from "react";
import { Link } from "react-router-dom";

import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

import { OutlineButton } from "../components/button/Button";
const Home = () => {
    return (
        <div className>
            <HeroSlide />
            <div className="section mb-3">
                <duv className="section__header mb-2">
                    <h2>Trending Movies</h2>
                    <Link to="/movie">
                        <OutlineButton className="small">
                            View more
                        </OutlineButton>
                    </Link>
                </duv>
                <MovieList category={category.movie} type={movieType.popular} />
            </div>
        </div>
    );
};

export default Home;
