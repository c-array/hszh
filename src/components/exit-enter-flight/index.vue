<template>
    <div class="inner exit-enter-person bg">
        <heads></heads>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>承运人航班数</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.carrierFlight">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>航空公司搭载人数统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.flightPerson">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>入境航班出发港统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.enterFlight">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
            <div class="box-center">
                <h3>入境航班来源地统计</h3>
                <div class="source">
                    <ve-map :data="chartsData.mapData" :legend-visible="false" height="800px" :settings="mapConfig.settings"></ve-map>
                </div>
            </div>
            <div class="box-right order">
                <dl>
                    <dt>出境航班到达国家统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.enterFlight">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>出境航班到达港统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.enterFlight">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/exit-enter-flight.less';
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import heads from '../common/head.vue';
    export default {
        name: "exit-enter-flight",
        components: {
            heads
        },
        computed: {
            ...mapState({
                lineConfig: state => state.common.lineConfig,
                histogramConfig: state => state.common.histogramConfig,
                mapConfig: state => state.common.mapConfig,
                chartsData: state => state.common.exitEnterFlight.chartsData
            })
        }
    }
</script>