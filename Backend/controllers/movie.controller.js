import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "No trending movies found" });
        }
        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        res.json({ success: true, content: randomMovie });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getMovietrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.json({ success: true, trailers: data.results });
    } catch (e) {
        console.error(e);
        if (e.message.includes("404")) {
            return res.status(404).send(null);
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
                        
export async function getMovieDeatails(req, res) {
    const {id} = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        res.status(200).json({success:true,content:data})

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


export async function getSimilarMovies(req, res) {
    const {id} = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
        res.status(200).json({success:true,similar:data.results})

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export async function getMoviesByCategory(req, res) {
    const {category } = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
        res.status(200).json({success:true,content:data})

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}