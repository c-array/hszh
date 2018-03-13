<template>
    <div class="common-head">
        <div class="title"></div>
        <div class="summary">
            <span>{{date}}</span>
            <span>{{week}}</span>
            <span>{{time}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:"heads",
        data () {
            return {
                date:this.$formatDate({
                    type:"yyyy-mm-dd"
                }),
                week:this.$formatDate({
                    type:"week"
                }),
                time:this.$formatDate({
                    type:"hh:mm:ss"
                })
            }
        },
        created () {
            setInterval( _ => {
                this.time =  this.$formatDate({
                    type:"hh:mm:ss"
                });
            },1000)
        }
    }
</script>