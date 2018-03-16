<template>
    <div class="inner daily bg">
        <heads></heads>
        <div class="container-box">
            <ul class="tabs">
                <li @click="tab = 1" :class="{active:tab == 1}">
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-contacts"></i>
                </li>
                <li @click="tab = 2" :class="{active:tab == 2}">
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-meeting meeting"></i>
                </li>
                <li @click="tab = 3" :class="{active:tab == 3}">
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-intercom"></i>
                </li>
                <li @click="tab = 4" :class="{active:tab == 4}">
                    <div class="quadrilateral"></div>
                    <i class="el-icon-m-camera"></i>
                </li>
            </ul>
            <contacts v-if="tab == 1"></contacts>
            <meeting v-else-if="tab == 2"></meeting>
            <intercom v-else-if="tab == 3"></intercom>
            <videos v-else-if="tab == 4"></videos>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/modules/daily/index.less';
</style>
<script>
    import heads from '../common/head.vue';
    import contacts from './contacts/index.vue';
    import meeting from './meeting/index.vue';
    import intercom from './intercom/index.vue';
    import videos from './video/index.vue';
    export default {
        name:"daily",
        data () {
            return {
                tab:1      
            }
        },
        components:{
            heads,
            contacts,
            meeting,
            intercom,
            videos
        }
    }
</script>