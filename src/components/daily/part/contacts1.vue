<template>
    <div>
        <el-table :data="contact1" style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="career" label="职务"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
        </el-table>
        <el-pagination 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="pageConfig.currentPage"
            :page-sizes="pageConfig.pageSizes" 
            :page-size="pageConfig.pageSize" 
            layout="prev, pager, next, jumper, sizes, total"
            :total="pageConfig.total">
        </el-pagination>
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
    import {mapState,mapMutations} from 'vuex';
    export default {
        name:"contacts1",
        computed:{
            ...mapState({
                dialog:state => state.common.daily.dialog,
                contact1:state => state.common.daily.contact1,
                pageConfig:state => state.common.daily.pageConfig
            })
        },
        created () {
            this.getContact1();
        },
        methods:{
            ...mapMutations({
                getContact1:"common/daily/getContact1"
            }),
            handleSizeChange(size){
                this.pageConfig.pageSize = size;
                this.getContact1();
            },
            handleCurrentChange(currentPage){
                this.pageConfig.currentPage = currentPage;
                this.getContact1();
            }
        }
    }
</script>