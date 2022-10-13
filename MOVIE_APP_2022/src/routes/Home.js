import React, {Component} from 'react';
import axios from 'axios'
import Movie from '../components/Moives';

class Home extends Component{
    constructor(props){
        super(props);
        console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
    }

    getMovies = async()=>{
       const {
        data:{
            data:{movies}
        },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
       console.log(movies);
       this.setState({isLoading:false,movies:movies})//키 : 키값이름이 동일하면
    }
    componentDidMount(){
        //setTimeout(()=>{
            //this.setState({isLoading:false});
            //},6000);
            this.getMovies();
        }
    }

    render(){
        const {isLoading,movies}=this.state;//구조 분해 할당
        return(
            <section className='container'>
                {isLoading?
                (<div className='loader'>
                    <span className='loader_text'>'Loading...'</span>
                </div>)
                :
                {movies.map(movie=>(<Movie
            key={movie.index}
            id={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genre={movie.genres}
            />))}
            </div>)
    }
            </section>
            )
}
export default Home;