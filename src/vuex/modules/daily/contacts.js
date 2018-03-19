import Vue from 'vue';
import http from '../../../public/tools/http';
export default {
    namespaced: true,
    state: {
        vm:{
            iskeyboard:false,
            keys:[1,2,3,4,5,6,7,8,9,0,"*","#"],
            phone:""
        }
    },
    mutations:{
        selectKey(state,key){
            state.vm.phone += key;
        },
        removeKey(state){
            state.vm.phone = state.vm.phone.substring(0, state.vm.phone.length - 1);  
        }
    }
}