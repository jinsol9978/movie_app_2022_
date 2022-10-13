import React from 'react'
import PropTypes from 'prop-types'
import './Movies.css';
import {Link} from 'react-router-dom'

function Movie({genres,id,poster,summary,title,year}){
    //console.log(props);
    //const {genres,id,poster,summary,title,year}=
    return(
        <div className='movie'>
            <Link to='detail'>
            <img src={poster} alt={title} title={title}/>
            <div className='movie_data'>
                <h3 className='movie_title'>{title}</h3>
                <h4 className='movie_year'>{year}</h4>
                <ul className='movie_genres'>
                    {genres.map((genre, index)=>{
                        return(
                        <li className='movie_genre' key={index}>{genre}</li>
                        )
                    })}
                </ul>
            <p className='movie_summary'>{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>
    )
}
Movie.propTypes ={
    id:checkPropTypes.number.isRequired,
    year: checkPropTypes.number.isRequired,
    title: checkPropTypes.toString.isRequired,
    summary : PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie