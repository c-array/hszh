<template>
    <div class="content">
        <div class="box-left">
            <div class="tab-saml">
                <button class="active" type="button">
                    <span>常用联系人</span>
                </button>
                <button type="button">通讯录</button>
            </div>
            <div class="contacts-list">
                <div class="search">
                    <input type="text">
                    <i class="el-icon-m-search"></i>
                </div>
                <ul>
                    <li>
                        <div class="circle">
                            <i class="el-icon-m-intercom"></i>
                        </div>
                        <div class="info">
                            <h3>对讲机1</h3>
                            <p>
                                <span>对讲机</span>
                                <span>1003</span>
                            </p>
                        </div>
                        <div class="action-btn">
                            <i class="el-icon-m-delete"></i>
                            <i class="el-icon-m-sms"></i>
                            <i class="el-icon-m-call"></i>
                        </div>
                    </li>
                    <li>
                        <div class="circle dispatch">
                            <i class="el-icon-m-dispatch"></i>
                        </div>
                        <div class="info">
                            <h3>调度台</h3>
                            <p>
                                <span>调度台</span>
                                <span>1003</span>
                                <span>01：23：59</span>
                            </p>
                        </div>
                        <div class="action-btn">
                            <i class="el-icon-m-delete"></i>
                            <i class="el-icon-m-sms"></i>
                            <i class="el-icon-m-call"></i>
                        </div>
                    </li>
                    <li>
                        <div class="circle terminal">
                            <i class="el-icon-m-terminal"></i>
                        </div>
                        <div class="info">
                            <h3>移动终端</h3>
                            <p>
                                <span>移动终端</span>
                                <span>1003</span>
                            </p>
                        </div>
                        <div class="action-btn">
                            <i class="el-icon-m-delete"></i>
                            <i class="el-icon-m-sms"></i>
                            <i class="el-icon-m-call"></i>
                        </div>
                    </li>
                    <li>
                        <div class="circle landline">
                            <i class="el-icon-m-landline"></i>
                        </div>
                        <div class="info">
                            <h3>电话</h3>
                            <p>
                                <span>电话</span>
                                <span>1003</span>
                            </p>
                        </div>
                        <div class="action-btn">
                            <i class="el-icon-m-delete"></i>
                            <i class="el-icon-m-sms"></i>
                            <i class="el-icon-m-call"></i>
                        </div>
                    </li>
                    <li>
                        <div class="circle phone">
                            <i class="el-icon-m-phone"></i>
                        </div>
                        <div class="info">
                            <h3>手机</h3>
                            <p>
                                <span>手机</span>
                                <span>1003</span>
                            </p>
                        </div>
                        <div class="action-btn">
                            <i class="el-icon-m-delete"></i>
                            <i class="el-icon-m-sms"></i>
                            <i class="el-icon-m-call"></i>
                        </div>
                    </li>
                    <!-- <li>
                            <div class="circle check"><i class="el-icon-m-intercom1"></i></div>
                            <div class="info">
                                <h3>查验台</h3>
                                <p><span>查验台</span> <span>1003</span></p>
                            </div>
                            <div class="action-btn">
                                <i class="el-icon-m-delete"></i>
                                <i class="el-icon-m-sms"></i>
                                <i class="el-icon-m-call"></i>
                            </div>
                        </li> -->
                </ul>
                <div class="action">
                    <button @click="showDialog({title:'选择联系人'})" type="button">
                        <i class="el-icon-plus"></i>
                    </button>
                    <button @click="vm.iskeyboard = !vm.iskeyboard" type="button">
                        <i class="el-icon-m-point"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="box-right">
            <div v-show="!vm.iskeyboard" class="box-right-bg">
                <div class="detail-head">
                    <div class="picture">
                        <img src="../../../public/images/desert.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>张北华</h3>
                        <p>全国知名呼吸系统专家</p>
                    </div>
                </div>
                <div class="detail-content">
                    <div class="">
                        <div class="flag">全国知名
                            <br />呼吸系统专家</div>
                        <div class="status">
                            <i class="el-icon-m-call call"></i>
                            <p>
                                <span>通话中</span>
                                <i class="el-icon-m-point1"></i>
                            </p>
                            <p>12:21</p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <i class="el-icon-m-phone"></i>
                            <span>18212345678</span>
                        </li>
                        <li>
                            <i class="el-icon-m-landline"></i>
                            <span>010-1234567</span>
                        </li>
                        <li>
                            <i class="el-icon-m-sms"></i>
                            <span>12345678@163.com</span>
                        </li>
                        <li class="record">
                            <i class="el-icon-m-call-record"></i>
                            <dl class="record-list">
                                <dd>
                                    <p>1月12日 &nbsp;&nbsp;18：26</p>
                                    <p class="phone">18212345678</p>
                                    <span>1分12秒</span>
                                </dd>
                                <dd>
                                    <p>1月12日 &nbsp;&nbsp;18：26</p>
                                    <p class="phone">18212345678</p>
                                    <span>1分12秒</span>
                                </dd>
                                <dd>
                                    <p>1月12日 &nbsp;&nbsp;18：26</p>
                                    <p class="phone">18212345678</p>
                                    <span>1分12秒
                                        <i class="el-icon-m-point1"></i>
                                    </span>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-show="vm.iskeyboard" class="box-right-bg">
                <div class="keyboard-head">
                    <input v-model="vm.phone" type="text">
                </div>
                <div class="keyboard-content">
                    <div class="key-num">
                        <span @click="selectKey(item)" v-for="item in vm.keys">{{item}}</span>
                        <i @click="removeKey" class="el-icon-m-remove"></i>
                    </div>
                    <i class="el-icon-m-call1"></i>
                    <i class="el-icon-m-point1"></i>
                </div>
            </div>
        </div>
        <el-dialog
            :title="dialog.title"
            :visible.sync="dialog.visible"
            width="30%">
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
    @import '../../../public/less/modules/daily/contacts/index.less';
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import contacts1 from '../part/contacts1.vue';
    import contacts2 from '../part/contacts2.vue';
    import contacts3 from '../part/contacts3.vue';
    export default {
        name: "contacts",
        components: {
            contacts1,
            contacts2,
            contacts3
        },
        computed: {
            ...mapState({
                dialog: state => state.common.daily.dialog,
                vm: state => state.common.contacts.vm,
                pageConfig: state => state.common.daily.pageConfig
            })
        },
        created() {
        },
        methods: {
            ...mapMutations({
                showDialog: "common/daily/showDialog",
                selectKey: "common/contacts/selectKey",
                removeKey: "common/contacts/removeKey",
            })
        }
    }
</script>