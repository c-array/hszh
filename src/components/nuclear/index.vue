<template>
    <div class="inner nuclear bg">
        <heads></heads>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>核辐射</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :settings="histogramConfig.settings"
                            :data="chartsData.nuclear">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>核辐射设备报警数量统计</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.nuclearAlarmNum">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>核超标人员来源地</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.nuclearSource">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>核超标人员年龄分布</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend-visible="false"
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.nuclearAge">
                        </ve-histogram>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/nuclear.less';
</style>
<script>
    import {mapState,mapMutations} from 'vuex';
    import heads from '../common/head.vue';
    export default {
        name:"nuclear",
        components: {
            heads
        },
        computed: {
            ...mapState({
                histogramConfig: state => state.common.histogramConfig,
                chartsData: state => state.common.nuclear.chartsData
            }) 
        },
        created () {
          this.getNuclear();  
          this.getNuclearAlarmNum();  
          this.getNuclearSource();  
          this.getNuclearAge();  
        },
        methods: {
            ...mapMutations({
                getNuclear:'common/nuclear/getNuclear',
                getNuclearAlarmNum:'common/nuclear/getNuclearAlarmNum',
                getNuclearSource:'common/nuclear/getNuclearSource',
                getNuclearAge:'common/nuclear/getNuclearAge',
            })
        }
    }
</script>