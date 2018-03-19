import Vue from 'vue';
import http from '../../../public/tools/http';
export default {
    namespaced: true,
    state: {
        dialog:{
            visible:false,
            title:"提示"
        },
        pageConfig:{
            currentPage:1,
            pageSize:8,
            pageSizes:[8,20,30,50,80],
            total:0
        },
        pageConfig2:{
            currentPage:1,
            pageSize:8,
            pageSizes:[8,20,30,50,80],
            total:0
        },
        contact1:[],
        contact2:[],
        formModel:{
            name:"",
            phone:""
        }
    },
    mutations:{
        getContact1(state){ //获取通讯录联系人
            http.post({
                url:"/contact1",
                data:state.pageConfig,
                success: data => {
                    state.contact1 = data.list;
                    state.pageConfig.total = data.total;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        getContact2(state){ //获取多媒体联系人
            http.post({
                url:"/contact2",
                data:state.pageConfig2,
                success: data => {
                    console.log(data);
                    state.contact2 = data.list;
                    state.pageConfig2.total = data.total;
                },
                error: msg => {
                    console.log(msg);
                }
            })
        },
        showDialog(state,param){
            state.dialog.visible = true;
            state.dialog.title = param.title;
        }
    }
}