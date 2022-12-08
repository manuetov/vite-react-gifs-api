
const getGifs = async (category) => {
   console.log(category);
   const url = `https://api.giphy.com/v1/gifs/search?api_key=cRtgVU7qbxYGTVEt1pqAfq6kiQh25oOF&q=${category}&limit=${10}`
   const res = await fetch(url)
   // console.log(res);
   const { data } = await res.json()
   // console.log(data)

   const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      image: img.images.downsized_medium.url,
   }))

   console.log(gifs);
   return gifs

}

export default getGifs