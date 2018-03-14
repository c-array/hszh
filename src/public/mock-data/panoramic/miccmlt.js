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

//各监测点报警数量统计
export const alarmNum = {
    columns: ['xAxis','温度','湿度','风速','一氧化碳','二氧化碳','PM2.5','PM10','照度','甲醛'],
    rows: (function(){
        var arr = [];
        for(let i = 0; i < 5; i++){
            arr.push({ 
                xAxis: '监测点' + (i + 1),
                "温度": Random.integer(0, 100),
                "湿度": Random.integer(0, 100),
                "风速": Random.integer(0, 100),
                "一氧化碳": Random.integer(0, 100),
                "二氧化碳": Random.integer(0, 100),
                "PM2.5": Random.integer(0, 100),
                "PM10": Random.integer(0, 100),
                "照度": Random.integer(0, 100),
                "甲醛": Random.integer(0, 100),
            })
        }
        return arr;
    })()
}

//报警种类统计
export const alarmSpecies = {
    columns: ['xAxis','value'],
    rows: [
        { xAxis: '温度',value: Random.integer(100, 1000)},
        { xAxis: '湿度',value: Random.integer(100, 1000)},
        { xAxis: '风速',value: Random.integer(100, 1000)},
        { xAxis: '一氧化碳',value: Random.integer(100, 1000)},
        { xAxis: '二氧化碳',value: Random.integer(100, 1000)},
        { xAxis: 'PM2.5',value: Random.integer(100, 1000)},
        { xAxis: 'PM10',value: Random.integer(100, 1000)},
        { xAxis: '照度',value: Random.integer(100, 1000)},
        { xAxis: '甲醛',value: Random.integer(100, 1000)}
    ]
}

//监测点统计
export const monitorPoint = _ => {
    var arr = []
    for(let i = 0; i < 4; i++){
        arr.push({
            name:"微小气候监测点" + (i + 1),
            chart:{
                columns: ['xAxis','value'],
                rows: [
                    { xAxis: '温度',value: Random.integer(100, 1000)},
                    { xAxis: '湿度',value: Random.integer(100, 1000)},
                    { xAxis: '风速',value: Random.integer(100, 1000)},
                    { xAxis: '一氧化碳',value: Random.integer(100, 1000)},
                    { xAxis: '二氧化碳',value: Random.integer(100, 1000)},
                    { xAxis: 'PM2.5',value: Random.integer(100, 1000)},
                    { xAxis: 'PM10',value: Random.integer(100, 1000)},
                    { xAxis: '照度',value: Random.integer(100, 1000)},
                    { xAxis: '甲醛',value: Random.integer(100, 1000)}
                ]
            }
        })
    }
    return arr;
}