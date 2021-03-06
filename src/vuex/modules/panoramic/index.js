import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        vm:{
            isScreen:false,
            switch:true
        },
        chartsData: {
            accessPerson: { //出入境人数
                columns: ['xAxis', '出境', '入境'],
                rows: [
                    { 'xAxis': '当天', '出境': 500, '入境': 300 },
                    { 'xAxis': '昨天', '出境': 456, '入境': 420 },
                    { 'xAxis': '前天', '出境': 300, '入境': 200 },
                    { 'xAxis': 'D-3', '出境': 368, '入境': 80 },
                    { 'xAxis': 'D-4', '出境': 60, '入境': 150 },
                    { 'xAxis': 'D-5', '出境': 150, '入境': 116 }
                ]
            },
            accessFlight: { //出入境航班数
                columns: ['xAxis', '出境', '入境'],
                rows: [
                    { 'xAxis': '当天', '出境': 500, '入境': 300 },
                    { 'xAxis': '昨天', '出境': 456, '入境': 420 },
                    { 'xAxis': '前天', '出境': 300, '入境': 200 },
                    { 'xAxis': 'D-3', '出境': 368, '入境': 80 },
                    { 'xAxis': 'D-4', '出境': 60, '入境': 150 },
                    { 'xAxis': 'D-5', '出境': 150, '入境': 116 }
                ]
            },
            personCheck: { //人员查验
                columns: ['xAxis', '确认率', '采样', '流调', '报警'],
                rows: [
                    { 'xAxis': '当天', '确认率': 10, '采样': 6, '流调': 1, '报警': 4 },
                    { 'xAxis': '昨天', '确认率': 1, '采样': 2, '流调': 6, '报警': 8 },
                    { 'xAxis': '前天', '确认率': 3, '采样': 5, '流调': 3, '报警': 5 },
                    { 'xAxis': 'D-3', '确认率': 5, '采样': 1, '流调': 5, '报警': 10 },
                    { 'xAxis': 'D-4', '确认率': 8, '采样': 7, '流调': 10, '报警': 1 },
                    { 'xAxis': 'D-5', '确认率': 4, '采样': 3, '流调': 2, '报警': 7 }
                ]
            },
            intercept: { //截留物
                columns: ['name', 'value'],
                rows: [
                    { 'name': '动物及动物制品', 'value': 1000 },
                    { 'name': '植物及植物制品', 'value': 960 },
                    { 'name': '水产', 'value': 600 },
                    { 'name': '其他', 'value': 300 },
                    { 'name': '检疫犬', 'value': 4123 },
                    { 'name': '检疫人员', 'value': 4123 },
                    { 'name': 'X光机', 'value': 4123 },
                ]
            },
            micclmt: { //微小气候
                columns: ['xAxis', '出境', '入境'],
                rows: [
                    { 'xAxis': '风速', '出境': 200},
                    { 'xAxis': '温度', '出境': 280},
                    { 'xAxis': '湿度', '出境': 160},
                    { 'xAxis': 'PM2.5', '出境': 220},
                    { 'xAxis': '一氧化碳', '出境': 310},
                    { 'xAxis': '二氧化碳', '出境': 100},
                    { 'xAxis': 'PM10', '出境': 130},
                    { 'xAxis': '光照', '出境': 268},
                    { 'xAxis': '甲醛', '出境': 160}
                ]
            },
            nuclear: { //出入境人数
                columns: ['xAxis', '中子', '伽马'],
                rows: [
                    { 'xAxis': '当天', '中子': 500, '伽马': 300 },
                    { 'xAxis': '昨天', '中子': 456, '伽马': 420 },
                    { 'xAxis': '前天', '中子': 300, '伽马': 200 },
                    { 'xAxis': 'D-3', '中子': 368, '伽马': 80 },
                    { 'xAxis': 'D-4', '中子': 60, '伽马': 150 },
                    { 'xAxis': 'D-5', '中子': 150, '伽马': 116 }
                ]
            }
        },
    },
    mutations: {
        getPerson(state,param){
            Vue.$http.get({
                url:"/alarmNum",
                success: data => {
                    console.log(data);
                },
                error: msg => {
                    console.log(msg);
                }
            })
        } 
    },
    actions:{
        getPerson({commit},param){
            commit('getPerson');
        }
    }
}