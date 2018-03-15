<template>
    <div class="inner contacts bg">
        <heads></heads>
        <div class="container">
            <ul class="tabs">
                <li class="active">
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-contacts"></i>
                </li>
                <li>
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-meeting meeting"></i>
                </li>
                <li>
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-intercom"></i>
                </li>
                <li>
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-camera"></i>
                </li>
            </ul>
            <div class="content">
                <div class="box-left">
                    <div class="tab-saml">
                        <button class="active" type="button">常用联系人</button>
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
                            <button type="button">
                                <i class="el-icon-plus"></i>
                            </button>
                            <button type="button">
                                <i class="el-icon-m-point"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="box-right-bg">
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
                                <div class="flag">全国知名<br />呼吸系统专家</div>
                                <div class="status">
                                    <i class="el-icon-m-call call"></i>
                                    <p><span>通话中</span> <i class="el-icon-m-point1"></i></p>
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
                                            <span>1分12秒 <i class="el-icon-m-point1"></i></span>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../../public/less/modules/daily/contacts/index.less';
</style>
<script>
    import heads from '../../common/head.vue';
    export default {
        name: "contacts",
        components: {
            heads
        }
    }
</script>