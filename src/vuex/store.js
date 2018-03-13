import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import login from './modules/login';
import home from './modules/home';
import exitEnterPerson from './modules/exit-enter-person';
import exitEnterFlight from './modules/exit-enter-flight';

export default new Vuex.Store({
    modules: {
        common: {
            namespaced: true,
            state: {
                lineConfig: {
                    grid:{
                        top:'25%',
                        left: '4%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    colors:["#dec216","#1fd282","#e27d24","#1ec0ec"],
                    legend:{
                        textStyle:{
                            color:"#fff",
                            fontSize:12
                        },
                        icon:"circle",
                        top:10,
                        right:30
                    },
                    afterConfig(options){
                        options.xAxis.forEach(function(item,key){
                            item.axisLabel = {
                                color:'#fff'
                            }
                        })
                        options.yAxis.forEach(function(item,key){
                            item.axisLabel = {
                                color:'#fff'
                            }
                        })
                        return options;
                    },
                    settings:{
                        area:true
                    }
                },
                histogramConfig:{
                    grid:{
                        top:'25%',
                        left: '4%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    colors:["#1fd282","#e27d24"],
                    legend:{
                        textStyle:{
                            color:"#fff",
                            fontSize:12
                        },
                        icon:"circle",
                        top:10,
                        right:30
                    },
                    afterConfig(options){
                        options.xAxis.forEach(function(item,key){
                            item.axisLabel = {
                                color:'#fff'
                            }
                        })
                        options.yAxis.forEach(function(item,key){
                            item.axisLabel = {
                                color:'#fff'
                            }
                        })
                        return options;
                    }
                },
                pieConfig:{
                    colors:["#8957a1","#8c97cb","#84ccc9","#dec216","#1fd282","#e27d24","#95acbd"],
                    legend:{
                        textStyle:{
                            color:"#fff",
                            fontSize:12
                        },
                        icon:"circle",
                        top:10,
                        right:30
                    },
                    settings:{
                        radius:60,
                        offsetY:160,
                        level: [
                            ['检疫犬', '检疫人员','X光机'],
                            ['动物及动物制品', '植物及植物制品', '水产','其他']
                        ]
                    }
                },
                mapConfig:{
                    settings:{
                        position:'world',
                        roam:true,
                        label:{
                            normal: {
                                show:false
                            },
                            emphasis:{
                                color:"#fff"
                            }
                        },
                        selectData:true,
                        itemStyle: {
                            normal: {
                                areaColor: '#0071a1',
                                borderColor: '#60a5c2'
                            },
                            emphasis: {
                                areaColor: '#4eb8db'
                            }
                        }
                    }
                }
            },
            modules: {
                login,
                home,
                exitEnterPerson,
                exitEnterFlight
            }
        }
    }
})