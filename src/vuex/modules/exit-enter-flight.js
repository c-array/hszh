import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        chartsData: {
            carrierFlight: { //出入境人数
                columns: ['xAxis', '出境', '入境'],
                rows: [
                    { 'xAxis': '中国国际航空公司', '出境': 500, '入境': 300 },
                    { 'xAxis': '中国南方航空公司', '出境': 456, '入境': 420 },
                    { 'xAxis': '东方航空', '出境': 300, '入境': 200 },
                    { 'xAxis': '山东航空', '出境': 368, '入境': 80 },
                    { 'xAxis': '四川航空', '出境': 60, '入境': 150 },
                    { 'xAxis': '海南航空', '出境': 150, '入境': 116 },
                    { 'xAxis': '全日空航空', '出境': 150, '入境': 116 },
                    { 'xAxis': '肯尼迪航空', '出境': 150, '入境': 116 },
                    { 'xAxis': '汉莎航空', '出境': 150, '入境': 116 },
                ]
            },
            mapData:{
                columns: ['位置', ' 入境航班'],
                rows: [
                    { '位置': 'China', ' 入境航班': 123 }
                ]
            },
            flightPerson: { //航空公司搭载人数统计
                columns: ['xAxis', '出境', '入境'],
                rows: [
                    { 'xAxis': '澳大利亚航空', '出境': 500, '入境': 300 },
                    { 'xAxis': '俄罗斯空桥航空', '出境': 456, '入境': 420 },
                    { 'xAxis': '韩亚航空', '出境': 300, '入境': 200 },
                    { 'xAxis': '印尼狮子航空', '出境': 368, '入境': 80 },
                    { 'xAxis': '泰国亚洲航空', '出境': 60, '入境': 150 },
                    { 'xAxis': '中华航空', '出境': 150, '入境': 116 },
                    { 'xAxis': '亚洲长运航空', '出境': 150, '入境': 116 },
                ]
            },
            enterFlight: { //入境航班出发港统计
                columns: ['xAxis', '出发港'],
                rows: [
                    { 'xAxis': '槟城', '出发港': 500},
                    { 'xAxis': '墨尔本', '出发港': 456},
                    { 'xAxis': '圣披德堡', '出发港': 300},
                    { 'xAxis': '马累', '出发港': 368},
                    { 'xAxis': '仁川', '出发港': 60},
                    { 'xAxis': '台北', '出发港': 150},
                    { 'xAxis': '清迈', '出发港': 190},
                    { 'xAxis': '大阪', '出发港': 250}
                ]
            },
        }
    },
    mutations: {

    }
}