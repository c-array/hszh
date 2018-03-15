<template>
    <div class="device">
        <h3>核心设备状态监控</h3>
        <div class="check-aisle">
            <div class="title">
                <i class="el-icon-m-aisle"></i>
                监测通道
            </div>
            <ul>
                <li>
                    <h4>出发厅</h4>
                    <p>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                    </p>
                    <p>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                    </p>
                    <p>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                    </p>
                </li>
                <li class="transfer">
                    <h4>中转厅</h4>
                    <p>
                        <span>●</span>
                        <span>●</span>
                    </p>
                    <p>
                        <span>●</span>
                        <span>●</span>
                    </p>
                    <p>
                        <span>●</span>
                        <span>●</span>
                    </p>
                </li>
                <li>
                    <h4>到达厅</h4>
                    <p>
                        <span class="offline">●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                    </p>
                    <p>
                        <span class="offline">●</span>
                        <span>●</span>
                        <span class="aberrant">●</span>
                    </p>
                    <p>
                        <span class="offline">●</span>
                        <span>●</span>
                        <span class="aberrant">●</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="check-aisle">
            <div class="title">
                <i class="el-icon-m-chemistry small"></i>
                化学毒气
            </div>
            <ul>
                <li class="col-10">
                    <p>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                        <span class="offline">●</span>
                        <span class="offline">●</span>
                        <span class="aberrant">●</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="check-aisle">
            <div class="title">
                <i class="el-icon-m-nuclear small"></i>
                核辐射
            </div>
            <ul>
                <li class="col-10">
                    <p>
                        <span>●</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="check-aisle">
                <div class="title">
                    <i class="el-icon-m-temperature"></i>
                    微小气候
                </div>
                <ul class="climate">
                    <li>
                        <h4>出发厅</h4>
                        <p>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                        </p>
                    </li>
                    <li class="transfer">
                        <h4>中转厅</h4>
                        <p>
                            <span>●</span>
                        </p>
                    </li>
                    <li class="transfer">
                        <h4>候机厅</h4>
                        <p>
                            <span class="aberrant">●</span>
                        </p>
                    </li>
                    <li class="transfer">
                        <h4>到达厅</h4>
                        <p>
                            <span class="aberrant">●</span>
                            <span class="offline">●</span>
                        </p>
                    </li>
                </ul>
            </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../../public/less/modules/panoramic/monitor.less';
</style>
<script>
    export default {
        name: "device-monitor",
    }
</script>