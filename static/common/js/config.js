export function requestError(url){
    const msg = `fetch data faild,please checked request url${url}`;
    return new Error(msg);
}
export function formatRequest(url,cof){
    url+="?";
    for(let key in cof){
        url+=`${url}=${cof[key]}&`
    }
    return url;
}