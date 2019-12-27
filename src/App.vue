<template>
    <div class="wrap">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    props: [],
    data(){
        return{
            name: "hejiamin"
        }
    }
}
</script>

<style lang="less" scoped>
    .wrap{
        height: 60px;
        background-color: gray;
        h1{
            color: yellow;
        }
    }
</style>


