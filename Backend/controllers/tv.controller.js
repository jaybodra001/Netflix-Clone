import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingTV(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
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

export async function getTVtrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        res.json({ success: true, trailers: data.results });
    } catch (e) {
        console.error(e);
        if (e.message.includes("404")) {
            return res.status(404).send(null);
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getTVDeatails(req, res) {
    const {id} = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.status(200).json({success:true,content:data})

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export async function getSimilarTV(req, res) {
    const {id} = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        res.status(200).json({success:true,similar:data.results})

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export async function getTVByCategory(req, res) {
    const {category } = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.status(200).json({success:true,content:data.results })

    }catch(e){
        if(e.message.includes("404")){
            return res.status(404).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}