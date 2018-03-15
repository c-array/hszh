import Vue from 'vue';
import http from '../../../public/tools/http';
export default {
    namespaced: true,
    state: {
        chartsData:{
            nuclear:[], //核辐射实时数据统计
            nuclearAlarmNum:[], //核辐射设备报警数量统计
            nuclearSource:[], //核超标人员来源地
            nuclearAge:[], //核超标人员年龄分布
        },
    },
    mutations:{
        getNuclear(state,param){ //核辐射实时数据统计
            http.get({
                url:"/getNuclear",
                success: data => {
                    data.rows.unshift({xAxis: '总数',value: data.rows[0].value + data.rows[1].value},)
                    state.chartsData.nuclear = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getNuclearAlarmNum(state,param){ //核辐射设备报警数量统计
            http.get({
                url:"/nuclearAlarmNum",
                success: data => {
                    state.chartsData.nuclearAlarmNum = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getNuclearSource(state,param){ //核超标人员来源地
            http.get({
                url:"/nuclearSource",
                success: data => {
                    state.chartsData.nuclearSource = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getNuclearAge(state,param){ //核超标人员年龄分布
            http.get({
                url:"/nuclearAge",
                success: data => {
                    state.chartsData.nuclearAge = data;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        }
    }
}