<template>
    <div class="inner person-check bg">
        <heads></heads>
        <div class="container-box">
            <div class="box-left space-around">
                <dl>
                    <dt>医学排查人数</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="histogramConfig.settings"
                            :data="chartsData.medicineCheck">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>2017年检出率</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="{
                                axisSite: { right: ['检出率'] },
                                yAxisType: ['KMB', 'percent'],
                                yAxisName: ['人数', '占比'],
                                showLine: ['检出率']
                            }"
                            :data="chartsData.checkOut">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
            <div class="box-center">
                <h3>人员来源地统计</h3>
                <div class="source">
                    <ve-map :data="chartsData.mapData" :legend-visible="false" height="800px" :settings="mapConfig.settings"></ve-map>
                </div>
            </div>
            <div class="box-right space-around">
                <dl>
                    <dt>2017年确诊率</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="{
                                axisSite: { right: ['确诊率'] },
                                yAxisType: ['KMB', 'percent'],
                                yAxisName: ['人数', '占比'],
                                showLine: ['确诊率']
                            }"
                            :data="chartsData.diagnose">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>2017年确诊病例统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="histogramConfig.settings"
                            :data="chartsData.diagnoseCases">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../../public/less/modules/panoramic/check.less';
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import heads from '../../common/head.vue';
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
                chartsData: state => state.common.check.chartsData
            })
        }
    }
</script>