<template>
    <div>
        <el-table :data="contact2" style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="用户名称"></el-table-column>
            <el-table-column prop="num" label="号码"></el-table-column>
            <el-table-column prop="type" label="账户类型"></el-table-column>
        </el-table>
        <el-pagination 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="pageConfig2.currentPage"
            :page-sizes="pageConfig2.pageSizes" 
            :page-size="pageConfig2.pageSize" 
            layout="prev, pager, next, jumper, sizes, total"
            :total="pageConfig2.total">
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
        name:"contacts2",
        computed:{
            ...mapState({
                dialog:state => state.common.contacts.dialog,
                contact2:state => state.common.contacts.contact2,
                pageConfig2:state => state.common.contacts.pageConfig2
            })
        },
        created () {
            this.getContact2();
        },
        methods:{
            ...mapMutations({
                getContact2:"common/contacts/getContact2"
            }),
            handleSizeChange(size){
                this.pageConfig2.pageSize = size;
                this.getContact2();
            },
            handleCurrentChange(currentPage){
                this.pageConfig2.currentPage = currentPage;
                this.getContact2();
            }
        }
    }
</script>