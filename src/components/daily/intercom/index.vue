<template>
    <div class="intercom">
        <div class="box-left">
            <ul>
                <li>
                    <div class="circle"><i class="el-icon-m-intercom"></i></div>
                    <div class="info">
                        <h3>对讲机1</h3>
                        <p>
                            <span>对讲机</span>
                            <span>1003</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div class="circle"><i class="el-icon-m-intercom"></i></div>
                    <div class="info">
                        <h3>对讲机1</h3>
                        <p>
                            <span>对讲机</span>
                            <span>1003</span>
                            <span>01：23：59</span>
                        </p>
                    </div>
                </li>
            </ul>
            <button><i class="el-icon-plus"></i></button>
        </div>
        <div class="box-right">
            <h3>对讲一组</h3>
            <div class="content">
                <div>
                    <div class="t-head">
                        <div class="t-head-bg"></div>
                        <div class="t-head-item">
                            <i class="el-icon-m-user"></i>
                            <i class="el-icon-m-point"></i>
                            <i class="el-icon-m-menu"></i>
                            <i class="el-icon-m-status"></i>
                            <i class="el-icon-m-action"></i>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="cell">
                                <img src="../../../public/images/desert.jpg" alt="">
                                <span>1000调度台</span>
                            </div>
                            <div class="cell">1000</div>
                            <div class="cell">调度台</div>
                            <div class="cell">
                                <i class="el-icon-m-wifi1"></i>
                            </div>
                            <div class="cell action">
                                <i class="el-icon-m-audio"></i>
                                <i class="el-icon-m-close"></i>
                            </div>
                        </li>
                        <li>
                            <div class="cell">
                                <img src="../../../public/images/desert.jpg" alt="">
                                <span>张三</span>
                            </div>
                            <div class="cell">1001</div>
                            <div class="cell">移动终端</div>
                            <div class="cell">
                                <i class="el-icon-m-que"></i>
                            </div>
                            <div class="cell action">
                                <i class="el-icon-m-audio"></i>
                                <i class="el-icon-m-close"></i>
                            </div>
                        </li>
                        <li>
                            <div class="cell">
                                <img src="../../../public/images/desert.jpg" alt="">
                                <span>张三</span>
                            </div>
                            <div class="cell">1002</div>
                            <div class="cell">对讲机</div>
                            <div class="cell">
                                <i class="el-icon-m-link-d default"></i>
                            </div>
                            <div class="cell action">
                                <i class="el-icon-m-audio"></i>
                                <i class="el-icon-m-close"></i>
                            </div>
                        </li>
                        <li>
                            <div class="cell">
                                <img src="../../../public/images/desert.jpg" alt="">
                                <span>李科</span>
                            </div>
                            <div class="cell">1003</div>
                            <div class="cell">IP电话</div>
                            <div class="cell">
                                <i class="el-icon-m-link"></i>
                            </div>
                            <div class="cell action">
                                <i class="el-icon-m-audio"></i>
                                <i class="el-icon-m-close"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="t-footer">
                    <div class="t-footer-bg"></div>
                    <div class="t-footer-item">
                        <i class="el-icon-m-user-add"></i>
                        <i class="el-icon-m-audio"></i>
                        <i class="el-icon-m-audion1"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../../public/less/modules/daily/intercom/index.less';
</style>
<script>
    export default {
        name:"meeting",
    }
</script>