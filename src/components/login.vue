<template>
    <div class="title">{{title}}</div>
</template>
<style scoped lang="less">
    @import '../public/less/login.less';
</style>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'login',
        computed: {
            ...mapState({
                title: state => state.common.login.title
            })
        }
    }
</script>