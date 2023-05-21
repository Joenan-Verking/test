<template>
    <div id="detailsBox">
        <span class="details">
            <span class="title">
                <h2>{{ hello }}</h2>
                <h3>{{ welcome }}</h3>
            </span>
            <span class="email">
                <h4>{{ emailUrl }}</h4>
                <h4>{{ email }}</h4>
            </span>
        </span>
        <ButtonBox></ButtonBox>
    </div>
</template>

<script>
    import ButtonBox from './ButtonBox.vue'
    export default {
        name: 'Details',
        components: {
            ButtonBox
        },
        data() {
            return {
                hello: '你好',
                welcome: '这里是我一个demo项目',
                emailUrl:'2973574679@qq.com',
                email:'邮箱'
            }
        }
    }
</script>

<style>
    @media screen and (max-width:1200px) {
        #detailsBox{
            display: flex;
            flex-direction: row;
        }
    }
    @media screen {
        #detailsBox{
            display: flex;
            flex-direction: row;
        }
    }

    #detailsBox {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .details,
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span {
        margin-top: 10px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgba(255, 255, 255, 0.87);
    }

    .title{
        margin-top: 20px;
    }
    .title h3{
        margin-top: 30px;
    }
    .email{
        margin-top: 62px;
    }
    .email h4 {
        margin: 0;
    }
</style>