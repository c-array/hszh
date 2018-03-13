<template>
    <div class="inner exit-enter-person bg">
        <heads></heads>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>出入境人数</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.exitEnterPerson">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>入境发热病人国际统计</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :legend-visible="false" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.fever">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>入境发热病人来源地统计</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :legend-visible="false" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.source">
                        </ve-line>
                    </dd>
                </dl>
            </div>
            <div class="box-center">
                <h3>入境人员来源地统计</h3>
                <div class="source">
                    <ve-map :data="chartsData.mapData" :legend-visible="false" height="800px" :settings="mapConfig.settings"></ve-map>
                </div>
            </div>
            <div class="box-right">
                <dl>
                    <dt>航空公司出入境人数统计</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.exitEnterPerson">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>出境到达港人数统计</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.exitEnterPerson">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>入境携带有害生物人数统计</dt>
                    <dd>
                        <ve-line height="100%" :legend="lineConfig.legend" :after-config="lineConfig.afterConfig" :grid="lineConfig.grid" :data="chartsData.exitEnterPerson">
                        </ve-line>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/exit-enter-person.less';
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import heads from '../common/head.vue';
    export default {
        name: "exit-enter-person",
        components: {
            heads
        },
        computed: {
            ...mapState({
                lineConfig: state => state.common.lineConfig,
                mapConfig: state => state.common.mapConfig,
                chartsData: state => state.common.exitEnterPerson.chartsData
            })
        }
    }
</script>