import axios from 'axios';


  const axiosInstance=  axios.create({
        baseURL:'https://api.themoviedb.org/3',
        // headers:{},
        params:{
          api_key:"9f2fb3fcbeeebf0c040dea080ce0e2f2"
        }
    })

export default axiosInstance