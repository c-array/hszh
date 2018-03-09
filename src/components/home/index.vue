<template>
    <div class="inner bg">
        <div class="head">
            <div class="title"></div>
            <div class="summary">
                <span>2018年1月10号</span>
                <span>星期三</span>
                <span>06:12:12</span>
            </div>
        </div>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>出入境人数</dt>
                    <dd>
                        <ve-line 
                            height="100%" 
                            :legend="lineConfig.legend" 
                            :after-config="lineConfig.afterConfig" 
                            :grid="lineConfig.grid" 
                            :data="chartsData.accessPerson">
                        </ve-line>
                    </dd>
                </dl>
                <dl>
                    <dt>出入境航班数</dt>
                    <dd>
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend" 
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.accessFlight">
                        </ve-histogram>
                    </dd>
                </dl>
                <dl>
                    <dt>人员查验</dt>
                    <dd>
                        <ve-line 
                            height="100%"
                            :settings="lineConfig.settings" 
                            :colors="lineConfig.colors"
                            :legend="lineConfig.legend" 
                            :after-config="lineConfig.afterConfig" 
                            :grid="lineConfig.grid" 
                            :data="chartsData.personCheck">
                        </ve-line>
                    </dd>
                </dl>
            </div>
            <div class="box-center">
                <div class="area"></div>
                <ul class="steps">
                    <li class="active">
                        <span class="circle"></span>
                        <span class="line-right"></span>
                        <p>日</p>
                    </li>
                    <li>
                        <span class="circle"></span>
                        <span class="line-right"></span>
                        <p>周</p>
                    </li>
                    <li>
                        <span class="circle"></span>
                        <span class="line-right"></span>
                        <p>月</p>
                    </li>
                    <li>
                        <span class="circle"></span>
                        <p>季</p>
                    </li>
                </ul>
                <div class="check-alarm">
                    <div class="person"></div>
                    <div class="chemistry"></div>
                </div>
            </div>
            <div class="box-right">
                    <dl>
                        <dt>截留物</dt>
                        <dd>
                            <ve-pie height="100%" :settings="pieConfig.settings" :grid="pieConfig.grid" :colors="pieConfig.colors" :legend="pieConfig.legend" :data="chartsData.intercept"></ve-pie>
                        </dd>
                    </dl>
                    <dl>
                        <dt>微小气候</dt>
                        <dd>
                            <div class="switch">
                                <span>监测设备1</span>
                                <span>监测设备2</span>
                                <span>监测设备3</span>
                                <span>监测设备4</span>
                            </div>
                            <ve-histogram 
                                height="100%" 
                                :colors="histogramConfig.colors" 
                                :legend-visible="false"
                                :after-config="histogramConfig.afterConfig" 
                                :grid="histogramConfig.grid" 
                                :data="chartsData.micclmt">
                            </ve-histogram>
                        </dd>
                    </dl>
                    <dl>
                        <dt>核辐射报警数量</dt>
                        <dd>
                            <ve-line 
                                height="100%" 
                                :legend="lineConfig.legend" 
                                :after-config="lineConfig.afterConfig" 
                                :grid="lineConfig.grid" 
                                :data="chartsData.accessPerson">
                            </ve-line>
                        </dd>
                    </dl>
                </div>
        </div> 
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/home.less';
</style>
<script>
    import Vue from "vue";
    import {mapState,mapMutations} from 'vuex';
    import {Steps,Step,Carousel,CarouselItem} from "element-ui";
    Vue.component(Steps.name,Steps);
    Vue.component(Step.name,Step);
    Vue.component(Carousel.name,Carousel);
    Vue.component(CarouselItem.name,CarouselItem);
    export default {
        name:"home",
        computed: {
            ...mapState({
                lineConfig: state => state.common.lineConfig,
                histogramConfig: state => state.common.histogramConfig,
                pieConfig: state => state.common.pieConfig,
                chartsData: state => state.common.home.chartsData
            })
        }
    }
</script>