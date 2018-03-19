<template>
    <div class="meeting">
        <div class="box-left">
            <ul>
                <li>
                    <div class="circle"><i class="el-icon-m-meeting"></i></div>
                    <p>周一例会会议室</p>
                </li>
                <li>
                    <div class="circle"><i class="el-icon-m-meeting"></i></div>
                    <p>第三会议室</p>
                </li>
                <li>
                    <div class="circle"><i class="el-icon-m-meeting"></i></div>
                    <p>第二会议室</p>
                </li>
                <li>
                    <div class="circle"><i class="el-icon-m-meeting"></i></div>
                    <p>第一会议室</p>
                </li>
            </ul>
            <button @click="showDialog({title:'添加会议室'})"><i class="el-icon-plus"></i></button>
        </div>
        <div class="box-right">
            <h3>周一例会会议室</h3>
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
                                <i class="el-icon-m-warning error"></i>
                            </div>
                            <div class="cell action">
                                <i class="el-icon-m-call2 error"></i>
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
                                <i class="el-icon-m-call2 error"></i>
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
                                <i class="el-icon-m-call2 error"></i>
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
                                <i class="el-icon-m-call2 error"></i>
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
                        <i class="el-icon-m-call1"></i>
                        <i class="el-icon-m-audio"></i>
                        <i class="el-icon-m-call1 rotate"></i>
                        <i class="el-icon-m-sms"></i>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :title="dialog.title"
            :visible.sync="dialog.visible"
            width="35%">
            <el-form class="form-list" label-width="90px" :model="formModel">
                <el-form-item class="col-md-7" label="会议室名称">
                    <el-input v-model="formModel.name"></el-input>
                </el-form-item>
                <el-form-item class="col-md-5" label="会议室人数">
                    <el-input v-model="formModel.num"></el-input>
                </el-form-item>
            </el-form>
            <el-tabs class="contact-tabs">
                <el-tab-pane label="通讯录联系人">
                    <contacts1></contacts1>
                </el-tab-pane>
                <el-tab-pane label="多媒体联系人">
                    <contacts2></contacts2>
                </el-tab-pane>
                <el-tab-pane label="临时联系人">
                    <contacts3></contacts3>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>
<style scoped lang="less">
    @import '../../../public/less/modules/daily/meeting/index.less';
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import contacts1 from '../part/contacts1.vue';
    import contacts2 from '../part/contacts2.vue';
    import contacts3 from '../part/contacts3.vue';
    export default {
        name:"meeting",
        components: {
            contacts1,
            contacts2,
            contacts3
        },
        computed: {
            ...mapState({
                dialog: state => state.common.daily.dialog,
                formModel: state => state.common.daily.formModel,
                queryModel: state => state.common.meeting.queryModel,
            })
        },
        methods: {
            ...mapMutations({
                showDialog: "common/daily/showDialog"
            })
        }
    }
</script>