import Vue from 'vue';
//获取日期
export const formatDate = (params => {
    function fillIn(value){
        if(value < 10){
            return "0" + value;
        }else{
            return value;
        }
    }
    var time;
    var d = '';
    if(params.date){
        d = new Date(params.date);
    }else {
        d = new Date();
    }
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var ndate = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if(params.type == 'yyyy-mm-dd'){
        time = year + '-' + fillIn(month) + '-' + fillIn(ndate);
    }else if(params.type == 'yyyy-mm'){
        time = year + '-' + fillIn(month);
    }else if(params.type == 'mm-dd'){
        time = fillIn(month) + '-' + fillIn(ndate);
    }else if(params.type == 'hh:mm:ss'){
        time = fillIn(hour) + ':' + fillIn(minute) + ':' + fillIn(second);
    }else if(params.type == 'time'){
        time = d.getTime();
    }else{
        time = year + '-' + fillIn(month) + '-' + fillIn(ndate) + ' ' + fillIn(hour) + ':' + fillIn(minute) + ':' + fillIn(second);
    }
    return time;
});

//深度copy对象
export const copyObj = (obj => {
    return JSON.parse(JSON.stringify(obj));
});
