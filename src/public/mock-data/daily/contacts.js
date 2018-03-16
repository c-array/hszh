import Mock from 'mockjs';

// 获取 mock.Random 对象
const Random = Mock.Random;

//随机从数组中取一个元素
function randomArr(arr){
    var n = Math.floor(Math.random() * arr.length + 1) - 1; 
    return arr[n];
}

//创建多条重复数据
function createList (length,obj){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(obj)
    }
    return arr;
}

//创建多条数据
function createListItem (length,callback){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(callback(i))
    }
    return arr;
}



//通讯录联系人
export const contact1 = createListItem(20,function(i){
    return {
        id: (i + 1),
        name:Random.cname(),
        career:Random.pick(["局领导","呼吸系统专家","查验员","检验员"]),
        phone:Random.pick(["13801654231","15801354231","13601654231","18601654231","17701654231"])
    }
})

//多媒体联系人
export const contact2 = createListItem(20,function(i){
    return {
        id: (i + 1),
        name:Random.cname(),
        num:Random.integer(1000,1099),
        type:Random.pick(["调度终端","移动终端","多媒体"])
    }
})