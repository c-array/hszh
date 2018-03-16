import Mock from 'mockjs';

//数组分页方法
function pagination(pageNo, pageSize, array) {  
    var offset = (pageNo - 1) * pageSize;  
    return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);  
}

import {alarmNum,alarmSpecies,monitorPoint} from './panoramic/miccmlt';

//各监测点报警数量统计
Mock.mock('/api/alarmNum', 'get', {
    'status':0,
    'message':'成功',
    'result':alarmNum
});

//报警种类统计
Mock.mock('/api/alarmSpecies', 'get', {
    'status':0,
    'message':'成功',
    'result':alarmSpecies
});

//监测点统计
Mock.mock('/api/monitorPoint', 'get', {
    'status':0,
    'message':'成功',
    'result':monitorPoint()
});

import {nuclear,nuclearAlarmNum,nuclearSource,nuclearAge} from './panoramic/nuclear';
//核辐射实时数据统计
Mock.mock('/api/getNuclear', 'get', {
    'status':0,
    'message':'成功',
    'result':nuclear
});

//核辐射实时数据统计
Mock.mock('/api/nuclearAlarmNum', 'get', {
    'status':0,
    'message':'成功',
    'result':nuclearAlarmNum
});

//核辐射实时数据统计
Mock.mock('/api/nuclearSource', 'get', {
    'status':0,
    'message':'成功',
    'result':nuclearSource
});

//核辐射实时数据统计
Mock.mock('/api/nuclearAge', 'get', {
    'status':0,
    'message':'成功',
    'result':nuclearAge
});


import {contact1,contact2} from './daily/contacts';

//通讯录联系人
Mock.mock('/api/contact1', 'post', function(options){
    let params = JSON.parse(options.body);
    return {
        status:0,
        message:'成功',
        result:{
            list:pagination(params.currentPage,params.pageSize,contact1),
            total:contact1.length
        }
    };
});

//多媒体联系人
Mock.mock('/api/contact2', 'post', function(options){
    let params = JSON.parse(options.body);
    return {
        status:0,
        message:'成功',
        result:{
            list:pagination(params.currentPage,params.pageSize,contact2),
            total:contact2.length
        }
    };
});