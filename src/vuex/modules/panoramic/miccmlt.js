import Vue from 'vue';
import http from '../../../public/tools/http';
export default {
    namespaced: true,
    state: {
        chartsData:{
            alarmNum:[], //各监测点报警数量统计
            alarmSpecies:[], //报警种类统计
            monitorPoint:[], //监测点统计
        },
    },
    mutations:{
        getAlarmNum(state,param){ //各监测点报警数量统计
            http.get({
                url:"/alarmNum",
                success: data => {
                    state.chartsData.alarmNum = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getAlarmSpecies(state,param){ //报警种类统计
            http.get({
                url:"/alarmSpecies",
                success: data => {
                    state.chartsData.alarmSpecies = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getMonitorPoint(state,param){ //监测点统计
            http.get({
                url:"/monitorPoint",
                success: data => {
                    console.log(data);
                    state.chartsData.monitorPoint = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        }
    }
}