<template>
    <div class="inner home bg">
        <heads></heads>
        <div class="container">
            <div class="box-left">
                <dl>
                    <dt>出入境人数</dt>
                    <router-link to="/panoramic/person" tag="dd">
                        <ve-line 
                            height="100%" 
                            :legend="lineConfig.legend" 
                            :after-config="lineConfig.afterConfig" 
                            :grid="lineConfig.grid" 
                            :data="chartsData.accessPerson">
                        </ve-line>
                    </router-link>
                </dl>
                <dl>
                    <dt>出入境航班数</dt>
                    <router-link to="/panoramic/flight" tag="dd">
                        <ve-histogram 
                            height="100%" 
                            :colors="histogramConfig.colors" 
                            :legend="histogramConfig.legend" 
                            :after-config="histogramConfig.afterConfig" 
                            :grid="histogramConfig.grid" 
                            :data="chartsData.accessFlight">
                        </ve-histogram>
                    </router-link>
                </dl>
                <dl>
                    <dt>人员查验</dt>
                    <router-link to="/panoramic/check" tag="dd">
                        <ve-line 
                            height="100%"
                            :colors="lineConfig.colors"
                            :legend="lineConfig.legend" 
                            :after-config="lineConfig.afterConfig" 
                            :grid="lineConfig.grid" 
                            :data="chartsData.personCheck">
                        </ve-line>
                    </router-link>
                </dl>
            </div>
            <div class="box-center">
                <div class="area animated" :class="vm.isScreen ? 'zoomIn screen' : ''">
                    <i @click="vm.switch = !vm.switch" class="el-icon-m-switch icon"></i>
                    <i @click="vm.isScreen = !vm.isScreen" class="el-icon-m-screen icon active"></i>
                    <dimensions v-show="vm.switch" :class="vm.switch ? 'bounceInRight animated' : 'fadeOutLeft animated' "></dimensions>
                    <deviceMonitor v-show="!vm.switch" :class="!vm.switch ? 'bounceInRight animated' : 'fadeOutLeft animated' "></deviceMonitor>
                </div>
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
                    <div class="person">
                        <h3>人员查验</h3>
                        <div class="circle">
                            <div>
                                <el-progress type="circle" :width="140" :stroke-width="12" :percentage="60"></el-progress>
                                <p>检出率</p>
                            </div>
                            <div>
                                <el-progress type="circle" :width="140" :stroke-width="12" :percentage="35"></el-progress>
                                <p>确诊率</p>
                            </div>
                        </div>
                    </div>
                    <div class="chemistry">
                        <h3>化学毒气报警</h3>
                        <ul>
                            <li>
                                <i class="el-icon-m-alarm"></i>
                                <p>
                                    <span>正常</span>
                                    <span class="error">异常</span>
                                </p>
                            </li>
                            <li>
                                <div class="text">Confidence Test</div>
                                <p>Last Confidence test</p>
                                <p>2017-10-23  10:23:59  <span class="passed">PASSED</span></p>
                            </li>
                        </ul>
                    </div>
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
                        <router-link to="/panoramic/miccmlt" tag="dd">
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
                        </router-link>
                    </dl>
                    <dl>
                        <dt>核辐射报警数量</dt>
                        <router-link to="/panoramic/nuclear" tag="dd">
                            <ve-line 
                                height="100%" 
                                :legend="lineConfig.legend" 
                                :after-config="lineConfig.afterConfig" 
                                :grid="lineConfig.grid" 
                                :data="chartsData.nuclear">
                            </ve-line>
                        </router-link>
                    </dl>
                </div>
        </div> 
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/panoramic/index.less';
</style>
<script>
    import Vue from "vue";
    import {mapState,mapMutations} from 'vuex';
    import {Steps,Step,Carousel,CarouselItem,Progress} from "element-ui";
    Vue.component(Steps.name,Steps);
    Vue.component(Step.name,Step);
    Vue.component(Carousel.name,Carousel);
    Vue.component(CarouselItem.name,CarouselItem);
    Vue.component(Progress.name,Progress);
    import dimensions from './3d.vue';
    import deviceMonitor from './monitor/index.vue';
    import heads from '../common/head.vue';

    export default {
        name:"home",
        computed: {
            ...mapState({
                lineConfig: state => state.common.lineConfig,
                histogramConfig: state => state.common.histogramConfig,
                pieConfig: state => state.common.pieConfig,
                chartsData: state => state.common.panoramic.chartsData,
                vm: state => state.common.panoramic.vm
            })
        },
        components: {
            dimensions,
            deviceMonitor,
            heads
        }
    }
</script>