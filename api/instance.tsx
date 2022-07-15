import axios from "axios";

const instance = axios.create({
    baseURL: 'https://620237e9b8735d00174cb87f.mockapi.io'
})
export default instance