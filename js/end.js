function load_image(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    img_url = "../image/main/level/" + theRequest['level'] + "/" + theRequest['img']
    console.log(img_url)
    var img = document.getElementById("end_img");
    img.src=img_url
    
    var parentElement = document.getElementById("main_fireworks");
    parentElement.style.opacity='0'
}

function startAnimation(){
    console.log("startAnimation")
    // 获取父元素
    var parentElement = document.getElementById("main_fireworks");
    parentElement.style.opacity='1'

}
