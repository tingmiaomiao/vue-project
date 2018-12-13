<template>
<div class='app'>
    <div class="cover"></div>
    <Header ></Header>
    <Todo ></Todo>
    <Footer></Footer>
</div>
    
</template>
<script>
import Header from './todo/header.vue';
import Todo from './todo/todo.vue';
import Footer from './todo/footer.jsx'
export default {
    components:{
        Header,
        Todo,
        Footer,
    },
    data(){
        return {
           
        }
    }
}
</script>
<style  lang="less" scoped>

.app{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: cover;
    // background-position: cover;
    .cover{
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #999;
        opacity: .9;
        z-index: -1

    }
}
</style>


