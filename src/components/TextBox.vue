<template>
    <div id="textBox">
        <DetailsBox></DetailsBox>
        <!-- <h1>hhhh</h1> -->
    </div>
</template>

<script>
    import DetailsBox from './Details.vue'
    export default {
        name: 'TextBox',
        components: {
            DetailsBox,
        },
        data(){
            return {

            }
        },
        methods: {

        },
    }

</script>

<style>
    #textBox{
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: 1;
    }
</style>