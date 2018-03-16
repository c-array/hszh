import Vue from 'vue';
import http from '../../../public/tools/http';
export default {
    namespaced: true,
    state: {
        dialog:{
            visible:false,
            title:"提示"
        },
        formModel:{
            name:"",
            num:""
        }
    },
    mutations:{
        
    }
}