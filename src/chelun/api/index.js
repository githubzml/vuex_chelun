const sendRequest = (url, type = 'GET', body = {})=>{
    // 处理url,添加时间戳，保证每次请求不会被缓存
    if (/\?/.test(url)){
        url += '&_='+(+new Date());
    }else{
        url += '?_='+(+new Date());
    }
    return fetch(url, {
        type,
        body
    }).then(res=>res.json());
}
//拼接
const host = /localhost:8080/ig.test(window.location.host)?'http://baojia.chelun.com':
            'https://baojia.chelun.com';
// 获取品牌列表
export let getBrandList = ()=>{
    return sendRequest('https://baojia.chelun.com/v2-car-getMasterBrandList.html');
}
//获取车辆
export let sendBrandList = (id)=>{
    return sendRequest(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}
//获取各个车辆信息
export let goDetail = (id)=>{
    return sendRequest(`http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`);
}
//询问低价信息
export let price = (id)=>{
    return sendRequest(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${id}&cityId=201`);
}

/**
 * 询问报价
 * @param carId         车型id
 * @param mobile        用户手机号
 * @param dealerIds     经销商id列表
 * @param location      用户所在城市
 * @param carname       选择车型的名字
 * @param locationid    用户所在城市id
 * @param name          用户的姓名
 * @param openUDID      设备号
 * @param flag          默认值1
 * @param orderTypeId   默认值1
 * @param channelId     默认值0
 * @return promise      返回一个pomise
 */
export let submit = (info)=>{
    let search = ``;
    for (let item in info){
        search += `&${item}=${info[item]}`;
    }
    search[0] = '?'
    return sendRequest(`${host}/h2-submit-lowprice.html${search}`);
}

/**
 * 获取车系图片分类列表
 * @param id   车系id
 * @param colorId   颜色id(可选)
 * @param carId     车型id(可选)
 * @return promise 返回一个promise
 */
export let getImgList = (id, colorId, carId)=>{
    let search = `SerialID=${id}`;
    if (colorId){
        search += `&ColorID=${colorId}`;
    }
    if (carId){
        search += `&CarID=${carId}`;
    }
    return sendRequest(`${host}/v2-car-getImageList.html?${search}`)
}
/**
 * 获取车系颜色分类
 * @param id   车系id
 * @return promise 返回一个promise
 */
export let getColorList = (id)=>{
    return sendRequest(`${host}/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}

/**
 * 获取城市列表(如果传省份id返回城市列表，如果不传返回省份列表)
 * @param provinceId   省份id
 * @return promise 返回一个promise
 */
export let getCityList = (provinceId)=>{
    let search = ``;
    if (provinceId){
        search += `provinceid=${provinceId}`;
    }
    return sendRequest(`${host}/v1-city-alllist.html?${search}`)
}

// https://baojia.chelun.com/v1-city-alllist.html?provinceid=1&_1536572426811

// export let getDetailCity = (provinceId)=>{
//     return sendRequest(`${host}/v1-city-alllist.html?provinceid=${search}`)
// }
