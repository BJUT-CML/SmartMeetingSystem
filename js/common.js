//获取请求地址的参数
function getParam(name) {
  　　  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   　　 let r = window.location.search.substr(1).match(reg);
   　　 if(r != null) return decodeURIComponent(r[2]);
    　　return null;
}

const weeks_in_zh = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

function getTime(){
    let time = new Date();
    return time.toLocaleDateString()+"    "+time.toLocaleTimeString()+"  "+weeks_in_zh[time.getDay()];
}






