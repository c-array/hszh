<template>
    <div class="inner miccmlt bg">
        <heads></heads>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>各监测点报警数量统计</dt>
                    <dd class="space">
                        <ve-histogram 
                            height="100%" 
                            :legend="histogramConfig.legend"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="{
                                metrics: ['温度','湿度','风速','一氧化碳','二氧化碳','PM2.5','PM10','照度','甲醛'],
                                stack: { '单价': ['温度','湿度','风速','一氧化碳','二氧化碳','PM2.5','PM10','照度','甲醛'] }
                            }"
                            :data="chartsData.alarmNum">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>报警种类统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :tooltip="histogramConfig.tooltip"
                            :data="chartsData.alarmSpecies">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl v-for="item in chartsData.monitorPoint">
                    <dt>{{item.name}}</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :tooltip="histogramConfig.tooltip"
                            :data="item.chart">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/miccmlt.less';
</style>
<script>
    import {mapState,mapMutations} from 'vuex';
    import heads from '../common/head.vue';
    export default {
        name:"miccmlt",
        components: {
            heads
        },
        computed: {
            ...mapState({
                histogramConfig: state => state.common.histogramConfig,
                chartsData: state => state.common.miccmlt.chartsData
            }) 
        },
        created () {
          this.getAlarmNum();  
          this.getAlarmSpecies();  
          this.getMonitorPoint();  
        },
        methods: {
            ...mapMutations({
                getAlarmNum:'common/miccmlt/getAlarmNum',
                getAlarmSpecies:'common/miccmlt/getAlarmSpecies',
                getMonitorPoint:'common/miccmlt/getMonitorPoint',
            })
        }
    }
</script>