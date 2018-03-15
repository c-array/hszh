import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        chartsData: {
            exitEnterPerson: { //出入境人数
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
            mapData:{
                columns: ['位置', ' 入境人数'],
                rows: [
                    { '位置': 'China', ' 入境人数': 123 }
                ]
            },
            fever: { //入境发热病人国际统计
                columns: ['xAxis', '发热病'],
                rows: [
                    { 'xAxis': '芬兰', '发热病': 500},
                    { 'xAxis': '新西兰', '发热病': 456},
                    { 'xAxis': '泰国', '发热病': 300},
                    { 'xAxis': '日本', '发热病': 368},
                    { 'xAxis': '马来西亚', '发热病': 60},
                    { 'xAxis': '韩国', '发热病': 150},
                    { 'xAxis': '美国', '发热病': 190},
                    { 'xAxis': '西班牙', '发热病': 250}
                ]
            },
            source: { //入境发热病人国际统计
                columns: ['xAxis', '来源地'],
                rows: [
                    { 'xAxis': '芬兰', '来源地': 500},
                    { 'xAxis': '新西兰', '来源地': 456},
                    { 'xAxis': '泰国', '来源地': 300},
                    { 'xAxis': '日本', '来源地': 368},
                    { 'xAxis': '马来西亚', '来源地': 60},
                    { 'xAxis': '韩国', '来源地': 150},
                    { 'xAxis': '美国', '来源地': 190},
                    { 'xAxis': '西班牙', '来源地': 250}
                ]
            },
        }
    },
    mutations: {

    }
}