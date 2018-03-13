/**
 * Created by Administrator on 2015/10/10.
 */
//包装函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //cssmin插件的配置信息--压缩css代码
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['style.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        //less插件的配置信息--监控文件变化，文件一旦变化，要立即执行哪些插件
        less: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'public/less', //要压缩的文件夹路径
                    src: ['*.less'], //要压缩的文件后缀
                    dest: 'public/css', //压缩后要输出的文件夹
                    ext: '.css' //压缩后生成的文件后缀
                }]
            }
        },
        //watch插件的配置信息--监控文件变化，文件一旦变化，要立即执行哪些插件
        watch:{
            build:{
                files:['public/css/*.css','public/less/*.less'],
                tasks:['less','cssmin'],
                options:{
                    spawn: false
                }
            }
        }
    });

    //要使用的插件
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //使用cssmin
    grunt.loadNpmTasks('grunt-contrib-less'); //使用less
    grunt.loadNpmTasks('grunt-contrib-watch'); //使用watch
    //告诉grunt当我们在终端输入grunt时需要做些什么（注意先后顺序）；
    grunt.registerTask('default',['less','cssmin','watch']);
};