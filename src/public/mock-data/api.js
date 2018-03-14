import Mock from 'mockjs';

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