<template>
    <div class="helper">
        <span class="left">{{unFinishedItemsLength}}items left</span>
        <div class="tabs" >
            <span :class="['item', state==filter  ? 'actived' : '' ]" 
                v-for="state in states" 
                :key=state
                @click="toggleFilter(state)"
            >
            {{state}}
            </span>
        </div>       
        <span class="clear" @click="clearCompleted">Clear Completed</span>
     </div>
</template>
<script>

export default {
    data(){
        return {
             states:['all', 'active', 'completed'],
        }
    },
     props :{
        filter: {
            type: String,
            required: true
        },
        todos:{
            type: Array,
            required: true,
        }
     },

    computed:{
        unFinishedItemsLength(){
            return this.todos.filter(todo => !todo.completed).length;
        }
    },
    methods:{
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearCompleted(){
            this.$emit('clear')
        }
    }
}
</script>

<style lang="less" scoped>
.helper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 100;
    padding: 5px 0;
    font-size: 14px;
    line-height: 30px;
    .left,.clear{
        width: 150px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .left{
        text-align: left;
        box-sizing: border-box;
    }
    .clear{
        text-align: right;
        cursor: pointer;
    }
    .tabs{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        cursor: pointer;
        .item{
            padding: 0 10px;
             &.actived{
                 border:1px solid rgba(175,47,47,0.4);
                 border-radius :5px;
        }
        }
       
    }
}
</style>
