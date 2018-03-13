var app = new Vue({
    el: '#app',
    data:{
        vm:{
            visible:false,
            floor:'', //过滤楼层数据使用
            isAlarm:false,
            isSubalarm:false,
            flatValue:'立体', //1：立体展示，2：平面展示
            imgPath:'/static/3d/public/images/vertical-floor.png'
        },
        businessData:[ //业务数据
            {
                id:27,
                className:'micclmt',
                description:'微小气候',
                visible:true,
                child:[
                    {
                        id:28,
                        cId:1,
                        floor: 1,
                        name:'micclmt',
                        description:'微小气候',
                    },
                    {
                        id:29,
                        cId:2,
                        floor: 2,
                        name:'micclmt',
                        description:'微小气候',
                    },
                    {
                        id:30,
                        cId:3,
                        floor: 3,
                        name:'micclmt',
                        description:'微小气候1',
                    },
                    {
                        id:31,
                        cId:4,
                        floor: 3,
                        name:'micclmt',
                        description:'微小气候2',
                    },
                    {
                        id:32,
                        cId:5,
                        floor: 3,
                        name:'micclmt',
                        description:'微小气候3',
                    },
                    {
                        id:33,
                        cId:6,
                        floor: 3,
                        name:'micclmt',
                        description:'微小气候4',
                    },
                    {
                        id:34,
                        cId:7,
                        floor: 4,
                        name:'micclmt',
                        description:'微小气候1',
                    },
                    {
                        id:35,
                        cId:8,
                        floor: 4,
                        name:'micclmt',
                        description:'微小气候2',
                    },
                    {
                        id:36,
                        cId:9,
                        floor: 4,
                        name:'micclmt',
                        description:'微小气候3',
                    }
                ]
            }
        ],
        floorData:[ //楼层数据
            {
                id:4,
                check:false
            },
            {
                id:3,
                check:false
            },
            {
                id:2,
                check:false
            },
            {
                id:1,
                check:false
            }
        ]
    },
    methods:{
        showBusinessArea:function(item) {
            this.vm.visible = true;
            this.selectFloor(item);
        },
        selectFloor:function (item) { //点击左侧按钮选择楼层
            this.vm.flatValue = '';
            this.vm.visible = true;
            this.vm.floor = item.id;
            this.floorData.forEach(function (obj,key) {
               if(obj.id != item.id){
                   obj.check = false;
               }else {
                   obj.check = true;
               }
            });
    
            for(var i = 0; i < this.businessData.length; i++){
                var current = this.businessData[i];
                for(var k = 0; k < current.child.length; k++){
                    if(current.child[k].floor == this.vm.floor){
                        current.visible = true;
                        break;
                    }else{
                        current.visible = false;
                    }
                }
            }
            docking3D.enterFloor(item.id);
        },
        selectArea:function (item,obj) { //选择区域
            obj.check = true;
            item.child(function (ele,key) {
                if(ele.id != obj.id){
                    ele.check = false;
                }
            });
            docking3D.enterArea(2,{
                name:obj.name,
                cId:obj.cId
            })
        },
        highlighted:function (type,name) { //鼠标滑到业务区域高亮显示
            if(type == 2){
                this.businessData(function (item,key) {
                    item.child(function (obj,key) {
                        obj.check = false;
                    })
                });
            }
            docking3D.hoverHighlight(type,name);
        },
        flatSolid:function () { //切换平面立体图
            if(this.vm.flatValue == '立体'){
                this.vm.flatValue = '平面';
                this.vm.imgPath = '/static/3d/public/images/horizontal-floor.png';
            }else{
                this.vm.flatValue = '立体';
                this.vm.imgPath = '/static/3d/public/images/vertical-floor.png';
            }
            this.vm.visible = false;
            this.floorData.forEach(function (obj,key) {
                obj.check = false;
            });
            docking3D.solidFlatToggle(this.vm.flatValue,function () {
                this.vm.visible = true;
            });
        }
    }
})