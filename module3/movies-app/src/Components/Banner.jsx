import axios from "axios";
import { useEffect, useState } from "react";

function Banner(){
    let [detail,setDetail] = useState({})

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=7a14990db2f038e12eadc4125fe96763')
        .then(function(res){
            // console.log(res);
            
            console.log(res.data.results[0].poster_path);
            let data = res.data.results[0]
            setDetail(data);
        })
    },[]);

    return(
        <div className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end" 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.poster_path})`}}>
            <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center ">
                {detail.title}
            </div>
        </div>
    )
}

export default Banner;