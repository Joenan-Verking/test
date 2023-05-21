<template>
    <div id="picBox" >
        <img src="../assets/头像.jpg" :class={imgHover:isHover} >
        <!-- v-bind:class, 当isHover为true时，class = imgHover -->
    </div>
</template>

<script>
    // import component from './component.vue';
    export default {

        name:'PicBox',

        components: {

        },

        data() {

            return {};
        },

        methods: {

        },

        props: {
            isHover:{ default: false }
           
        },

        computed: {

        },

        watch: {

            immediate: true
        },

        beforeCreate() {

        },  // 生命周期 - 创建之前

        created() {

        },  // 生命周期 - 创建完成（可以访问当前this实例）

        beforeMount() {

        },  // 生命周期 - 挂载之前

        mounted() {

        },  // 生命周期 - 挂载完成（可以访问DOM元素）

        beforeUpdate() {

        },  // 生命周期 - 更新之前

        updated() {

        },  // 生命周期 - 更新之后

        beforeDestroy() {

        },  // 生命周期 - 销毁之前

        destroyed() {

        },  // 生命周期 - 销毁完成

        activated() {

        },  // 如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>
    #picBox{
       height: 70px;
   
    }

    img{
        position: relative;
        top: -50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: 0.4s;
        box-shadow: 0px 0px 15px 10px #12121270;
        /* z-index: 1; */
    }

    .imgHover{
        width: 120px;
        height: 120px;
        border-radius: 30px;
    }
</style>