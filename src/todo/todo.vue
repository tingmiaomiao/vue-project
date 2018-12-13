<template>
    <div class="todo">
        <input type="text" 
            class="input"
            placeholder="接下来要做什么" 
            autofocus="autofocus"
            @keyup.enter="addTodo">
        <item  :todo="todo"  
            :key="todo.id" 
            @del="deleteTodo"
            v-for=" todo in filteredTodos">
        </item>
        <tabs :todos="todos" 
            :filter="filter"
            @toggle="toggle"
            @clear="clearAllCompleted">
        </tabs>
        
        
    </div>
</template>
<script>
import tabs from './tabs.vue';
import item from './item.vue';
var  id=0;
export default {
    name: 'todo',
    components: {
        tabs,
        item,
    },
    data(){
        return{
            todos:[],
            filter:'all',
        }
    },
    computed:{
       filteredTodos(){
           if(this.filter == 'all'){
               return this.todos;
           }
           const completed = this.filter == 'completed';
           return this.todos.filter(todo => completed === todo.completed);
       } 
    }

    ,
    methods:{
        addTodo(e){
            this.todos.unshift(
                {
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false,

                }
            )
            e.target.value='';
        },
        deleteTodo(){
            this.todos.splice(this.todos.findIndex(todo => todo.id == id),1)
        },
        toggle(state){
          this.filter = state;  
        },
        clearAllCompleted(){
           this.todos= this.todos.filter(todo => !todo.completed)
        }
    }

}
</script>
<style lang="less" scoped>
.todo{
    width: 600px;
    background: #fff;
    margin: 0 auto;
    box-sizing:  border-box;
    .input{
        width: 100%;
        margin: 0;
        color: inherit;
        font-size: 24px;
        line-height: 1.4em;
        font-family: inherit;
        font-weight: inherit;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        // border: 1px solid rgb(77, 77, 77)
;
        // box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        // padding: 15px 100px;
        padding: 16px 16px 16px 60px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(247, 243, 243);

    }
}
</style>


