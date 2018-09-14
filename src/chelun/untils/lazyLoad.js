//el 选择器
export default (el) => {
    //图片距离底部10px时加载
    let scroll_distance = 10;
    // 找到所有需要懒加载的元素
    let nodes = document.querySelectorAll("[data-src]")
    // console.log(nodes);
    // 判断元素是否出现在视口中
    let inView = (ele) => {
        let rect = ele.getBoundingClientRect();
        //获取到 这个元素的本本身信息
        if (rect.top > 0 && rect.top < window.innerHeight + scroll_distance && rect.left > 0 && rect.right > 0) {
            return true;
        }
        return false;
    }

    // 判断元素是否加载过
    let isDeal = (ele) => {
        return ele.src == ele.dataset.src;
    }

    let load = () => {
        nodes.forEach((item) => {
            if (inView(item) && !isDeal(item)) {
                item.src = item.dataset.src;
            }
        })
    }

    load();//初始化一下图片
    document.querySelector(el).addEventListener('scroll', load);
}