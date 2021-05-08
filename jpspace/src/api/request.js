import axios from "axios";
import {showMessage} from "@/utils";

const http = axios.create();
// 拦截器interceptors
http.interceptors.response.use((resp)=>{
    if(resp.data.code !== 0){
        const options = {
            content: resp.data.msg,
            type: "error"
        }
        showMessage(options);
        return null;
    }
    return resp.data.data;
})

export default http;