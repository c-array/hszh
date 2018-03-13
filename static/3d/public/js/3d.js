/*
 * @Author: 曹琦敏 
 * @Date: 2017-08-28 10:29:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-14 15:15:30
 */

(function () {
    //模块
    var scene, camera, renderer, axes, light, scale, mouse, raycaster, stats;

    //常量逻辑控制
    var currentFloor = '立体', intersected, currentMesh;

    //创建组
    var globalGroup = new THREE.Group(); //所有的3d模型都添加到这个组里面去
    for (var i = 1; i < 5; i++) { //动态创建四个组，分别代表四个楼层，添加到globalGroup里面去
        var group = new THREE.Group();
        group.name = 'floor' + i;
        globalGroup.add(group);
    }
    globalGroup.name = 'myGroup';

    var mouse = new THREE.Vector2(); //向量
    var raycaster = new THREE.Raycaster(); //射线

    //加载器
    var jsonLoad = new THREE.JSONLoader();

    var rotateOption = { //旋转场景配置项
        flag: -1, //0:鼠标左键，2：鼠标右键
        enable: false,
        x: '',
        y: ''
    };

    //楼层模型配置项
    var floorModel = [
        {
            url: './public/model/floor/floor1.js',
            solidOption: { //立体动画参数
                startY: -1000,
                endY: 0,
                delayTime: 0
            },
            flatOption: { //平面动画参数
                x: -3000,
                z: -1800,
                fov: 100
            },
            floor: 1
        },
        {
            url: './public/model/floor/floor2.js',
            solidOption: { //立体动画参数
                startY: 3000,
                endY: 600,
                delayTime: 200
            },
            flatOption: { //平面动画参数
                x: 3000,
                z: -1800,
                fov: 100
            },
            floor: 2
        },
        {
            url: './public/model/floor/floor3.js',
            solidOption: { //立体动画参数
                startY: 3000,
                endY: 1200,
                delayTime: 400
            },
            flatOption: { //平面动画参数
                x: -3000,
                z: 1800,
                fov: 100
            },
            floor: 3
        },
        {
            url: './public/model/floor/floor4.js',
            solidOption: { //立体动画参数
                startY: 3000,
                endY: 1800,
                delayTime: 600
            },
            flatOption: { //平面动画参数
                x: 3000,
                z: 1800,
                fov: 100
            },
            floor: 4
        }
    ];

    //区域模型配置项
    var areaModel = [
        {
            name: 'nuclear',
            description: '核辐射',
            type:'核生化', //业务类型
            url: './public/model/area/floor1/nuclear.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'D001', //编号
                    animate:{
                        camera:{
                            fov: 1,
                            z:3000,
                            lookAt: {
                                x: 0,
                                y: -700,
                                z: 0
                            }
                        },
                        x: 270
                    },
                    rotation: { //模型的旋转角度
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    position: { //模型坐标
                        x: -470,
                        y: -10,
                        z: 565
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 1,
                    pointCode: 'D002', //编号
                    animate:{
                        camera:{
                            fov: 1,
                            z:3000,
                            lookAt: {
                                x: 0,
                                y: -700,
                                z: 0
                            }
                        },
                        x: 230
                    },
                    rotation: { //模型的旋转角度
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    position: { //模型坐标
                        x: -430,
                        y: -10,
                        z: 565
                    }
                }
            ]
        },
        {
            name: 'channel',
            description: '查验通道',
            type:'人员查验', //业务类型
            url: './public/model/area/floor1/check-channel.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'A001', //编号
                    animate:{
                        camera:{
                            fov: 1,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 250
                    },
                    position: { //坐标
                        x: -466.8,
                        y: -10,
                        z: 480
                    }
                }
            ]
        },
        {
            name: 'channel',
            description: '查验通道',
            type:'人员查验', //业务类型
            url: './public/model/area/floor4/check-channel.js',
            child: [
                {
                    cId: 2, //唯一标识
                    floor: 4,
                    pointCode: 'A002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -70
                    },
                    position: { //坐标
                        x: -130,
                        y: -10,
                        z: 370
                    }
                }
            ]
        },
        {
            name: 'wisdomCheck',
            description: '智能检疫查验台',
            type:'人员查验', //业务类型
            url: './public/model/area/floor2/wisdom-check.js',
            child: [
                {
                    cId: 6, //唯一标识
                    floor: 2,
                    pointCode: 'H006', //编号
                    animate:{
                        camera:{
                            fov: 1,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -450,
                                z: 0
                            }
                        },
                        x: 160
                    },
                    position: { //坐标
                        x: -360,
                        y: -10,
                        z: 620
                    }
                }
            ]
        },
        {
            name: 'wisdomCheck',
            description: '智能检疫查验台',
            type:'人员查验', //业务类型
            url: './public/model/area/floor1/wisdom-check.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'H001', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 320
                    },
                    position: { //坐标
                        x: -519,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 1,
                    pointCode: 'H002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 300
                    },
                    position: { //坐标
                        x: -502,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 3, //唯一标识
                    floor: 1,
                    pointCode: 'H003', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 280
                    },
                    position: { //坐标
                        x: -484.3,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 4, //唯一标识
                    floor: 1,
                    pointCode: 'H004', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 260
                    },
                    position: { //坐标
                        x: -466.9,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 5, //唯一标识
                    floor: 1,
                    pointCode: 'H005', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 240
                    },
                    position: { //坐标
                        x: -449.5,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 7, //唯一标识
                    floor: 4,
                    pointCode: 'H007', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -70
                    },
                    position: { //坐标
                        x: -138.6,
                        y: -10,
                        z: 370
                    }
                },
                {
                    cId: 8, //唯一标识
                    floor: 4,
                    pointCode: 'H008', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -70
                    },
                    position: { //坐标
                        x: -121.25,
                        y: -10,
                        z: 370
                    }
                },
                {
                    cId: 9, //唯一标识
                    floor: 4,
                    pointCode: 'H009', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -70
                    },
                    position: { //坐标
                        x: -103.88,
                        y: -10,
                        z: 370
                    }
                }
            ]
        },
        {
            name: 'complexCheck',
            description: '综合检疫查验台',
            type:'人员查验', //业务类型
            url: './public/model/area/floor1/complex-check.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'J001', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -330,
                                z: 0
                            }
                        },
                        x: 190
                    },
                    position: { //坐标
                        x: -390,
                        y: -10,
                        z: 480
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 4,
                    pointCode: 'J002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -25
                    },
                    position: { //坐标
                        x: -180,
                        y: -10,
                        z: 370
                    }
                }
            ]
        },
        {
            name: 'ordinaryCheck',
            description: '智能检疫查验台普通版',
            type:'人员查验', //业务类型
            url: './public/model/area/floor1/ordinary-check.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'I001', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 145,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: -1.6,
                            z: 0
                        },
                        x: 540
                    },
                    position: { //坐标
                        x: -450,
                        y: -10,
                        z: 550
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 4,
                    pointCode: 'I002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -290,
                                z: 0
                            }
                        },
                        x: -100
                    },
                    rotation: {
                        x: 0,
                        y: -1.55,
                        z: 0
                    },
                    position: { //坐标
                        x: -105,
                        y: -10,
                        z: 430
                    }
                },
                {
                    cId: 3, //唯一标识
                    floor: 4,
                    pointCode: 'I003', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 50,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: -1.6,
                            z: 0
                        },
                        x: 400
                    },
                    rotation: {
                        x: 0,
                        y: -1.55,
                        z: 0
                    },
                    position: { //坐标
                        x: -280,
                        y: -10,
                        z: 400
                    }
                },
                {
                    cId: 4, //唯一标识
                    floor: 4,
                    pointCode: 'I004', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 50,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: -1.6,
                            z: 0
                        },
                        x: 440
                    },
                    rotation: {
                        x: 0,
                        y: -1.55,
                        z: 0
                    },
                    position: { //坐标
                        x: -280,
                        y: -10,
                        z: 440
                    }
                }
            ]
        },
        {
            name: 'electronicCheck',
            description: '电子行李查验台',
            type:'携带物', //业务类型
            url: './public/model/area/floor1/electronic-check.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'C001', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -220,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: -3.1,
                            z: 0
                        },
                        x: -230
                    },
                    rotation: { //模型的旋转角度
                        x: 0,
                        y: -1.6,
                        z: 0
                    },
                    position: { //坐标
                        x: -420,
                        y: -10,
                        z: -340
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 1,
                    pointCode: 'C002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -30,
                                z: 0
                            }
                        },
                        x: 380
                    },
                    position: { //坐标
                        x: -580,
                        y: -10,
                        z: 30
                    }
                },
                {
                    cId: 3, //唯一标识
                    floor: 1,
                    pointCode: 'C003', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -150,
                                z: 0
                            }
                        },
                        x: 380
                    },
                    position: { //坐标
                        x: -580,
                        y: -10,
                        z: 220
                    }
                }
            ]
        },
        {
            name: 'chemical',
            description: '化学毒气',
            type:'核生化', //业务类型
            url: './public/model/area/floor1/chemical.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'E001', //编号
                    animate:{
                        camera:{
                            fov: 1,
                            z:3000,
                            lookAt: {
                                x: 0,
                                y: -700,
                                z: 0
                            }
                        },
                        x: 305
                    },
                    position: { //坐标
                        x: -515,
                        y: -10,
                        z: 550
                    }
                }
            ]
        },
        {
            name: 'micclmt',
            description: '微小气候',
            type:'微小气候', //业务类型
            url: './public/model/area/floor1/micclmt.js',
            child: [
                {
                    cId: 1, //唯一标识
                    floor: 1,
                    pointCode: 'F001', //编号
                    animate:{
                        camera:{
                            fov: 0.3,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 280,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: -3.1,
                            z: 0
                        },
                        x: -230
                    },
                    position: { //坐标
                        x: -449,
                        y: 4,
                        z: 492
                    }
                },
                {
                    cId: 2, //唯一标识
                    floor: 2,
                    pointCode: 'F002', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 170,
                                z: 0
                            }
                        },
                        x: 380
                    },
                    rotation: {
                        x: 0,
                        y: -1.4,
                        z: 0
                    },
                    position: { //坐标
                        x: -580.8,
                        y: 3,
                        z: -287
                    }
                },
                {
                    cId: 3, //唯一标识
                    floor: 3,
                    pointCode: 'F003', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 370,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: 0.2,
                            z: 0
                        },
                        x: 830
                    },
                    rotation: {
                        x: 0,
                        y: 0.9,
                        z: 0
                    },
                    position: { //坐标
                        x: -868.5,
                        y: 7,
                        z: -821.7
                    }
                },
                {
                    cId: 4, //唯一标识
                    floor: 3,
                    pointCode: 'F004', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: 550,
                                z: 0
                            }
                        },
                        x: -1600
                    },
                    rotation: {
                        x: 0,
                        y: 1.4,
                        z: 0
                    },
                    position: { //坐标
                        x: 1392,
                        y: 7,
                        z: -1114.4
                    }
                },
                {
                    cId: 5, //唯一标识
                    floor: 3,
                    pointCode: 'F005', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -550,
                                z: 0
                            }
                        },
                        x: 550
                    },
                    rotation: {
                        x: 0,
                        y: 1.8,
                        z: 0
                    },
                    position: { //坐标
                        x: -760,
                        y: 7,
                        z: 764
                    }
                },
                {
                    cId: 6, //唯一标识
                    floor: 3,
                    pointCode: 'F006', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -870,
                                z: 0
                            }
                        },
                        x: -1880
                    },
                    rotation: {
                        x: 0,
                        y: 1.5,
                        z: 0
                    },
                    position: { //坐标
                        x: 1673,
                        y: 7,
                        z: 1128
                    }
                },
                {
                    cId: 7, //唯一标识
                    floor: 4,
                    pointCode: 'F007', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -300,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: 1.7,
                            z: 0
                        },
                        x: 570
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    position: { //坐标
                        x: -581,
                        y: -0.8,
                        z: -620
                    }
                },
                {
                    cId: 8, //唯一标识
                    floor: 4,
                    pointCode: 'F008', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -180,
                                z: 0
                            }
                        },
                        rotation: {
                            x: 0,
                            y: 1.7,
                            z: 0
                        },
                        x: -140
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    position: { //坐标
                        x: -490,
                        y: -0.8,
                        z: 96
                    }
                },
                {
                    cId: 9, //唯一标识
                    floor: 4,
                    pointCode: 'F009', //编号
                    animate:{
                        camera:{
                            fov: 0.5,
                            z:5000,
                            lookAt: {
                                x: 0,
                                y: -260,
                                z: 0
                            }
                        },
                        x: -20
                    },
                    rotation: {
                        x: 0,
                        y: -1.4,
                        z: 0
                    },
                    position: { //坐标
                        x: -208,
                        y: -0.5,
                        z: 384.5
                    }
                }
            ]
        }
    ];

    //初始化
    function init() {

        //FPS性能监听
        stats = initStats();

        //创建场景
        scene = new THREE.Scene();

        //创建相机
        camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
        //设置相机位置
        camera.position.set(0, 3000, 2000);
        //相机看向哪个坐标
        camera.lookAt({ x: 0, y: 0, z: 0 });
        scene.add(camera);

        THREE.onEvent(scene, camera); //动画监听

        //创建渲染器
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true  //抗锯齿
        });

        renderer.setClearColor('', 0); //设置渲染器颜色
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMapEnabled = true; // 启用阴影选项
        renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染器大小

        //在屏幕上显示的轴线
        axes = new THREE.AxisHelper(500);
        scene.add(axes);

        /* 环境光灯光 */
        light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        /* 平行光,投射阴影 */
        var directionalLight = new THREE.DirectionalLight( 0xffffff);
        directionalLight.position.set( -40, 60, -10 );
        directionalLight.castShadow = true; //告诉平行光需要开启阴影投射
        /*directionalLight.shadow.camera.near = 20; //产生阴影的最近距离
        directionalLight.shadow.camera.far = 200; //产生阴影的最远距离
        directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
        directionalLight.shadow.camera.right = 50; //最右边
        directionalLight.shadow.camera.top = 50; //最上边
        directionalLight.shadow.camera.bottom = -50; //最下面

        //这两个值决定使用多少像素生成阴影 默认512
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.mapSize.width = 1024;*/
        scene.add(directionalLight);

        scene.add(globalGroup);

        document.getElementById('three').appendChild(renderer.domElement);

        loadArea(); //加载区域模型
        loadFloor(); //加载楼层模型
        //createParticles();
    }

    //加载区域模型
    function loadArea() {
        var areaIndex = 0; //遍历时的索引
        async.whilst(function () {
            return areaIndex < areaModel.length;
        }, function (callback) {
            var item = areaModel[areaIndex]; //取得当前区域的信息
            jsonLoad.load(item.url, function (geometry, materials) {
                geometry.center();
                //遍历当前模型类型的数量，然后克隆
                var currentAreaConfig = ''; //获取模型对应的配置项，因areaNuclearConfig的长度和item.quantity是一一对应的，所有可以直接通过索引i取得相应的配置项
                var child = item.child;
                var length = child.length;
                for (var i = length; i--;) {
                    var currentAreaConfig = child[i];
                    var currentGroup = scene.getObjectByName('floor' + currentAreaConfig.floor, true) //根据当前楼层找到对应的组
                    materials = new THREE.MeshLambertMaterial({ color: 0x005ca3 });
                    /*materials = new THREE.MeshBasicMaterial({
                        color: 0x38a2f4,
                        side: THREE.DoubleSide,
                        depthTest:false,
                        transparent:true,
                        opacity:0.3
                    });*/
                    var meshNew = new THREE.Mesh(geometry, materials); //根据几何和材质创建物体;//克隆网格模型
                    if (currentAreaConfig.rotation) {
                        meshNew.rotation.set(currentAreaConfig.rotation.x, currentAreaConfig.rotation.y, currentAreaConfig.rotation.z);
                    }
                    meshNew.name = item.name + currentAreaConfig.cId; //当前物体绑定名称
                    meshNew.animate = currentAreaConfig.animate; //进入区域动画参数
                    meshNew.floor = currentAreaConfig.floor; //当前物体绑定楼层
                    meshNew.flag = item.type;
                   //meshNew.unique = item.name + currentAreaConfig.cId;
                    meshNew.visible = false; //先隐藏区域模型，否则楼层未加载完会看见区域模型
                    meshNew.position.set(currentAreaConfig.position.x, currentAreaConfig.position.y, currentAreaConfig.position.z); //设置物体的坐标
                    meshNew.castShadow = true; // 启用阴影选项
                    meshNew.on('hover', function (m) {
                        m.material.color.setHex(0x187ac5); //设置高亮颜色
                    }, function (m) {
                        m.material.color.setHex(0x005ca3); //设置默认颜色
                    });

                    //点击某个区域，判断当前是否在1,2,3,4层
                    meshNew.on('click', function (m) {
                        if (currentFloor == 1 || currentFloor == 2 || currentFloor == 3 || currentFloor == 4) {
                            docking3D.enterArea(1,m);
                        }
                    });

                    currentGroup.add(meshNew);
                }
                areaIndex++;
                callback();
            });
        })
    }


    //加载楼层模型
    function loadFloor() {
        var floorIndex = 0; //遍历时的索引
        async.whilst(function () {
            return floorIndex < floorModel.length;
        }, function (callback) {
            var item = floorModel[floorIndex]; //取得当前楼层的信息
            jsonLoad.load(item.url, function (geometry, materials) {
                var currentGroup = scene.getObjectByName('floor' + item.floor, true); //根据当前楼层找到对应的组
                geometry.center(); //获取几何模型的中心点
                materials = new THREE.MeshFaceMaterial(materials); //创建材质
                /*materials = new THREE.MeshBasicMaterial({
                    color: 0x38a2f4,
                    side: THREE.DoubleSide,
                    depthTest:false,
                    transparent:true,
                    opacity:0.3
                });*/
                var mesh = new THREE.Mesh(geometry, materials); //根据几何和材质创建物体
                currentGroup.solidAnimate = item.solidOption; //立体动画参数绑定
                currentGroup.flatAnimate = item.flatOption; //平面动画参数绑定
                currentGroup.floor = item.floor;
                currentGroup.position.set(200, item.solidOption.startY, 0); //当前组的坐标
                mesh.name = 'mesh' + item.floor; //当前楼层物体的名称
                mesh.receiveShadow = true; // 启用接受阴影选项
                currentGroup.add(mesh); //当前楼层追加到当前组里
                floorIndex++;
                callback();
            });
        }, function (err) { //楼层加载完
            if (err) {
                console.log(err);
                return false;
            }
            render(); //渲染场景

            globalGroup.children.forEach(function (item, index) {
                item.children.forEach(function (obj, key) { //让所有区域和报警点模型展示
                    obj.visible = true;
                })
                //执行楼层落下动画
                new TWEEN.Tween(item.position).to({ y: item.solidAnimate.endY }, 2000).delay(item.solidAnimate.delayTime).start();
            });
            //执行楼层旋转动画 
            new TWEEN.Tween(globalGroup.rotation).to({ y: -0.4 }, 2500).start();

            console.log('楼层加载结束');
        })
    }

    //创建报警点模型
    var planeGeometry = new THREE.PlaneGeometry(24, 24);
    function createAlarmPoint(obj) {
        var currentGroup = scene.getObjectByName('floor' + obj.floor, true); //根据当前楼层找到对应的组
        var planeMaterial = new THREE.MeshBasicMaterial( {
            map:new THREE.TextureLoader().load("./public/images/11.png"),
            color: obj.color,
            side: THREE.DoubleSide,
            depthTest:false,
            transparent:true,
            opacity:0.8
        });
        var plane = new THREE.Mesh( planeGeometry, planeMaterial);

        plane.position.set(Number(obj.position.x) + 8, obj.position.y, Number(obj.position.z));
        plane.castShadow = true; //启用投影
        plane.name = 'A_' + obj.pointCode;
        plane.pointCode = obj.pointCode;
        plane.pointId = obj.pointId;
        var tweenA = new TWEEN.Tween(plane.position).to({y: 20}, 4000);
        var tweenB = new TWEEN.Tween(plane.position).to({y: obj.position.y}, 4000);
        tweenA.chain(tweenB);
        tweenB.chain(tweenA);
        tweenA.start();
        plane.on('click',function (m) {
            onMicclmtClick({
                pointId:m.pointId
            })
        });
        currentGroup.add( plane );
        createParticles(currentGroup,obj.position.x,obj.position.z,obj.color,obj.pointCode);
    }

    //取一个区间的随机数
    function RandomNumBoth(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    }

    //创建粒子效果
    function createParticles(group,x,z,color,pointCode) {
        var particleCount = 50;
        var durationTime = 5000;
        var sprites = new THREE.Group();
        sprites.name = 'sprite_' + pointCode;
        // 依次创建单个粒子
        for(var p = 0; p < particleCount; p++) {
            var material = new THREE.SpriteMaterial({
                map: new THREE.TextureLoader().load("./public/images/particle2.png"),
                color: color,
                transparent:true,
                opacity:1
            });
            // 粒子范围在x到x + 15之间
            var pX = RandomNumBoth(x,x + 15),
                pY = 12,
                pZ = RandomNumBoth(z,z + 15);
            // 将粒子加入场景
            var sprite = new THREE.Sprite( material );
            sprite.position.set(pX, pY, pZ);
            sprite.scale.set(5,100,5);
            sprite.randomOffset = p / particleCount;
            sprites.add(sprite)
        }
        group.add(sprites);
        var pos = {val: 0};
        var tween = new TWEEN.Tween(pos).to({val: 1}, durationTime).onUpdate(callback);
        tween.repeat(Infinity);
        tween.start();

        function callback() {
            var val = this.val;
            sprites.children.forEach(function (item, index) {
                var animateProgressTemp = val + item.randomOffset;
                var animateProgress = animateProgressTemp > 1 ? animateProgressTemp - 1 : animateProgressTemp;
                if(animateProgress < .1) {
                    item.material.opacity = animateProgress / .1;
                } else if (animateProgress < .2) {
                    item.material.opacity = 2 - animateProgress / .1;
                } else {
                    item.material.opacity = 0;
                }
            });
        }
    }

    //监听3D性能
    function initStats() {
        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        // Align top-left
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.getElementById("statsOutput").appendChild(stats.domElement);

        return stats;
    }

    //高亮突出
    function highlight(type) {
        var color = '';
        if (type == 1 && intersected.material.materials) {
            intersected.material.materials.forEach(function (item, key) {
                color = item.emissive.getHex();
                item.emissive.setHex(0x0c61a2);
            });
        } else if (type == 2 && intersected) {
            if (intersected.material && intersected.material.materials) {
                intersected.material.materials.forEach(function (item, key) {
                    item.emissive.setHex(color);
                });
            }
        }
    }

    //移动翻转
    function rotateFlip(e) {
        var x = e.clientX;
        var y = e.clientY;
        globalGroup.rotation.y += (x - rotateOption.x) * 0.01;
        globalGroup.rotation.x += (y - rotateOption.y) * 0.01;
        rotateOption.x = e.clientX;
        rotateOption.y = e.clientY;
    }

    //平移
    function translate(e) {
        var x = e.clientX;
        var y = e.clientY;
        globalGroup.position.z += (y - rotateOption.y);
        globalGroup.position.x += (x - rotateOption.x);
        rotateOption.x = e.clientX;
        rotateOption.y = e.clientY;
    }

    //窗口大小改变
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //浏览器窗口改变
    window.addEventListener('resize', onWindowResize, false);

    //鼠标按下
    document.addEventListener('mousedown', function (e) {
        e.preventDefault();
        rotateOption.flag = e.button;
        rotateOption.x = e.clientX;
        rotateOption.y = e.clientY;
    }, false);

    //禁止鼠标右键弹出选项
    document.oncontextmenu = function (event) {
        event.cancelBubble = true;
        event.returnValue = false;
        return false;
    };

    //鼠标移动
    document.addEventListener('mousemove', function (e) {
        e = e || event;
        e.preventDefault();
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        if (currentFloor == '立体' || currentFloor == '平面') {
            var intersects = raycaster.intersectObjects(scene.children, true);
            if (intersects.length > 0) {
                if (intersected != intersects[0].object) {
                    if (intersected) {
                        highlight(2);
                    }
                    intersected = intersects[0].object;
                    highlight(1);
                }
            } else {
                if (intersected) {
                    highlight(2);
                }
                intersected = null;
            }
        } else {
            highlight(2);
        }

        if (rotateOption.flag === 0) { //点击的是鼠标左键可以旋转、翻转
            rotateFlip(e);
        } else if (rotateOption.flag === 2) { //点击的是鼠标右键可以平移
            translate(e);
        }
    }, false);

    //鼠标离开
    document.addEventListener('mouseup', function (e) {
        e.preventDefault();
        rotateOption.flag = -1;
        rotateOption.x = e.clientX;
        rotateOption.y = e.clientY;
    }, false);

    //滚动鼠标放大缩小相机
    function wheel(e) {
        e = e || window.event;
        e.preventDefault() || e.defaultPrevented;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                camera.fov -= (camera.near < camera.fov ? 1.5 : 0);
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                camera.fov += (camera.fov < camera.far ? 1.5 : 0);
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail < 0) { //当滑轮向上滚动时
                camera.fov -= 1.5;
            }
            if (e.detail > 0) { //当滑轮向下滚动时
                camera.fov += 1.5;
            }
        }
        camera.updateProjectionMatrix();
    }
    //注册事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', wheel, false); //firefox
        document.addEventListener('mousewheel', wheel, false); //IE/Opera/Chrome/Safari
    }

    //渲染
    function render() {
        stats.update();
        TWEEN.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    init(); //初始化

    //外部接口
    window.docking3D = {
        initMicclmt:function (obj) {
            var pointMesh = scene.getObjectByName('A_' + obj.no,true);
            var spritesGroup = scene.getObjectByName('sprite_' + obj.no, true); //根据当前编号找到对应的组
            var color;
            if(obj.status == 'NORMAL'){ //正常
                color = 0xff0099;
            }else if(obj.status == 'ALARM' || obj.status == 'EXCEED'){ //报警
                color = 0xff0000;
            }else{ //异常离线 || 无设备
                color = 0xeeeeee;
            }
            if(!pointMesh){  //没有报警点，创建报警点
                createAlarmPoint({
                    position:obj.position,
                    pointCode:obj.no,
                    pointId:obj.pointId,
                    tip:obj.tip,
                    floor:obj.floor,
                    status:obj.status,
                    color:color
                })
            }else { //有报警点更新状态
                pointMesh.material.color.setHex(color); //更新点位颜色
                spritesGroup.children.forEach(function(item,key){
                    item.material.color.setHex(color); //更新精灵颜色
                })
            }
        },
        enterArea:function(type,item){ //进入区域
            globalGroup.rotation.set(0,0,0);
            globalGroup.position.set(0,0,0);
            var animate = '';
            if(type == 1){
                animate = item.animate;
            }else if(type == 2){
                var obj = scene.getObjectByName(item.name + item.cId,true);
                animate = obj.animate;
            }
            camera.position.z = animate.camera.z;
            camera.lookAt(new THREE.Vector3(animate.camera.lookAt.x, animate.camera.lookAt.y, animate.camera.lookAt.z))
            new TWEEN.Tween(camera).to({fov: 30}, 1000).onUpdate(function () {
                camera.updateProjectionMatrix();
            }).onComplete(function () {
                new TWEEN.Tween(camera).to({fov: animate.camera.fov}, 1000).delay(1000).onUpdate(function () {
                   camera.updateProjectionMatrix();
                }).start();
            }).start();

            if(animate.rotation){
                new TWEEN.Tween(globalGroup.rotation).to(animate.rotation, 1000).delay(1000).start();
            }
            new TWEEN.Tween(globalGroup.position).to({x: animate.x}, 1000).delay(1000).start();
        },
        enterFloor: function (index) { //进入某一楼层
            currentFloor = index; //当前点击的楼层
            globalGroup.rotation.set(0, 0, 0); //设置最外层group的旋转值
            globalGroup.position.set(0, 0, 0); //设置最外层group的旋转值
            camera.position.set(0, 3000, 2000);
            //相机看向哪个坐标
            camera.lookAt({ x: 0, y: 0, z: 0 });

            globalGroup.children.forEach(function (item, key) {
                if (item.name == 'floor' + index) { //当前楼层组
                    item.visible = true;
                    if (camera.fov >= 80) {
                        new TWEEN.Tween(item.position).to({ x: 200, y: 0, z: 0 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                            new TWEEN.Tween(camera).to({ fov: 20 }, 1000).onUpdate(function () {
                                camera.updateProjectionMatrix();
                            }).start();
                        }).start();
                    } else {
                        new TWEEN.Tween(camera).to({ fov: 75 }, 1000).onUpdate(function () {
                            camera.updateProjectionMatrix();
                        }).start();
                        new TWEEN.Tween(item.position).to({ x: 200, y: 0, z: 0 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                            new TWEEN.Tween(camera).to({ fov: 20 }, 1000).onUpdate(function () {
                                camera.updateProjectionMatrix();
                            }).start();
                        }).start();
                    }
                } else { //其他楼层组
                    switch (item.name) {
                        case 'floor1':
                            new TWEEN.Tween(item.position).to({ y: 3000, x: -6000 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                                item.visible = false;
                            }).start();
                            break;
                        case 'floor2':
                            new TWEEN.Tween(item.position).to({ y: 3000, x: 6000 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                                item.visible = false;
                            }).start();
                            break;
                        case 'floor3':
                            new TWEEN.Tween(item.position).to({ y: -3000, x: -6000 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                                item.visible = false;
                            }).start();
                            break;
                        case 'floor4':
                            new TWEEN.Tween(item.position).to({ y: -3000, x: 6000 }, 1000).easing(TWEEN.Easing.Cubic.InOut).onComplete(function () {
                                item.visible = false;
                            }).start();
                            break;
                    }
                }
            })
        },
        solidFlatToggle: function (value) { //切换平面立体图
            currentFloor = value; //当前楼层赋值，用于处理动画逻辑使用
            globalGroup.rotation.set(0,0,0);
            if (value == '立体') {
                globalGroup.children.forEach(function (item, index) {
                    item.position.set(200, item.solidAnimate.startY, 0) //当前组的坐标
                    item.visible = true;
                    //执行楼层落下动画
                    new TWEEN.Tween(item.position).to({ y: item.solidAnimate.endY }, 2000).delay(item.solidAnimate.delayTime).start();
                });
                //执行楼层旋转动画 
                new TWEEN.Tween(globalGroup.rotation).to({ y: -0.4 }, 2500).start();
                new TWEEN.Tween(camera).to({ fov: 80 }, 1000).onUpdate(function () {
                    camera.updateProjectionMatrix();
                }).start();
            } else if (value == '平面') {
                globalGroup.children.forEach(function (item, index) {
                    item.visible = true;
                    //执行楼层落下动画
                    new TWEEN.Tween(item.position).to({ x: item.flatAnimate.x, y: 0, z: item.flatAnimate.z }, 2000).start();
                    new TWEEN.Tween(camera).to({ fov: 90 }, 1000).onUpdate(function(){
                        camera.updateProjectionMatrix();
                    }).start();
                    new TWEEN.Tween(globalGroup.rotation).to({x: 0.6}, 1000).start();
                });
            }
        },
        hoverHighlight:function(type,name){ //鼠标滑到业务区域高亮显示
            globalGroup.children.forEach(function(item,key){
                item.children.forEach(function(obj,index){
                    if(type == 1 && obj.flag == name){
                        obj.material.color.setHex(0x187ac5); //设置高亮颜色
                    }else if(type == 2 && obj.flag == name){
                        obj.material.color.setHex(0x005ca3); //设置默认颜色
                    }
                })
            })
        }
    }

})();

