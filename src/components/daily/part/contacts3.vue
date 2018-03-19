<template>
    <div class="form-model">
        <el-form label-width="80px" :model="formModel">
            <el-form-item label="姓名">
                <el-input v-model="formModel.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="formModel.phobe"></el-input>
            </el-form-item>
        </el-form>
        <div class="el-dialog__footer">
            <span class="dialog-footer">
                <button @click="dialog.visible = false" type="button" class="el-button el-button--default">
                    <span>取 消</span>
                </button>
                <button @click="dialog.visible = false" type="button" class="el-button el-button--primary">
                    <span>添 加</span>
                </button>
            </span>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    export default {
        name: "contacts3",
        computed: {
            ...mapState({
                dialog: state => state.common.daily.dialog,
                formModel: state => state.common.daily.formModel
            })
        },
    }
</script>