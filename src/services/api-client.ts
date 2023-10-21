import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"b9853f3330774cfba297d1b27e05c160"
    }
})
