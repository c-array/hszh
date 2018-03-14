import Mock from 'mockjs';

// 获取 mock.Random 对象
const Random = Mock.Random;

//随机从数组中取一个元素
function randomArr(arr){
    var n = Math.floor(Math.random() * arr.length + 1) - 1; 
    return arr[n];
}

//创建多条数据
function createList (length,obj){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(obj)
    }
    return arr;
}

//核辐射实时数据统计
export const nuclear = {
    columns: ['xAxis','value'],
    rows: [
        {xAxis: '中子',value: Random.integer(0, 100)},
        {xAxis: '伽马',value: Random.integer(0, 100)},
    ]
}

//核辐射设备报警数量统计
export const nuclearAlarmNum = {
    columns: ['xAxis','中子','伽马'],
    rows: [
        {xAxis: '入境设备1', "中子": Random.integer(0, 100), "伽马": Random.integer(0, 100)},
        {xAxis: '入境设备2', "中子": Random.integer(0, 100), "伽马": Random.integer(0, 100)},
        {xAxis: '入境设备3', "中子": Random.integer(0, 100), "伽马": Random.integer(0, 100)},
        {xAxis: '入境设备4', "中子": Random.integer(0, 100), "伽马": Random.integer(0, 100)}
    ]
}

//核超标人员来源地
export const nuclearSource = {
    columns: ['xAxis','value'],
    rows: [
        {xAxis: '中国',value: Random.integer(0, 100)},
        {xAxis: '泰国',value: Random.integer(0, 100)},
        {xAxis: '老挝',value: Random.integer(0, 100)},
        {xAxis: '南非',value: Random.integer(0, 100)},
        {xAxis: '尼日尼亚',value: Random.integer(0, 100)}
    ]
}

//核超标人员年龄分布
export const nuclearAge = {
    columns: ['xAxis','value'],
    rows: [
        {xAxis: '0-16岁',value: Random.integer(0, 100)},
        {xAxis: '17-35岁',value: Random.integer(0, 100)},
        {xAxis: '36-55岁',value: Random.integer(0, 100)},
        {xAxis: '55岁以上',value: Random.integer(0, 100)},
    ]
}