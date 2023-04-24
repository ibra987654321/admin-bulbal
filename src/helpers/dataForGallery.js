import axios from "axios";

export const dataImage = (topic, maxHeight, range) => {
    return axios.get(`https://api.unsplash.com/search/photos?query=${topic}&per_page=${range}`,
         {
             headers: {
                 Authorization: "Client-ID 5C84XakVl44t6sdB6F6qZ5kpvM2MsuuWibBxiRtVaE0",
                 "Accept-Version": "v1"
             }
         })
         .then(response => {
             if (maxHeight) {
                 return response.data.results.filter(f => f.height >= maxHeight)
             }
             return response.data.results
         })
         .catch((e) => {
             console.log(e)
         })
}
