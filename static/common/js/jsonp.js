import originJsonp from "jsonp"
import {requestError,formatRequest} from "./config.js"
export default function jsonp(url,cof,opt){
    return new Promise((reosolve,reject)=>{
        originJsonp(formatRequest(url),opt,(err,data)=>{
            if(err){
                reject(requestError());
            }else{
                reosolve(data);
            }
        })
    })
}