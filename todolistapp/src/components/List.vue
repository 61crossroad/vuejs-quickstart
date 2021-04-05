<style>
* { box-sizing: border-box; }
ul { margin: 0; padding: 0; }
ul li {
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px; transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
}
ul li:hover { background: #ddd; }
ul li.checked {
    background: #BBB; color:#fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px;
    top: 10px; left: 16px; transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px;
}
.close:hover {
    background-color: #f44336; color: white;
}
</style>
<template>
    <ul id="todolist">
        <!-- <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle(a.id)"> -->
        <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle({ id: a.id })">
            <span>{{ a.todo }}</span>
            <span v-if="a.done">(완료)</span>
            <!-- <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span> -->
            <span class="close" @click.stop="deleteTodo({id:a.id})">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
import Constant from '../Constant'
import { mapState } from 'vuex'
// import { mapState, mapMutations } from 'vuex'
// import mapState from 'vuex'
// import eventBus from '../EventBus'

export default {
    name: 'List',
    /* ch09 - EventBus
    created : function() {
        eventBus.$on('add-todo', this.addTodo);
    },
    data : function() {
        return {
            todolist : [
            { id:1, todo : "영화보기", done:false },
            { id:2, todo : "주말 산책", done:true },
            { id:3, todo : "ES6 학습", done:false },
            { id:4, todo : "잠실 야구장", done:false }
            ]
        }
    }
    */
    /*
    computed : {
        todolist() {
            return this.$store.state.todolist;
        }
    },
    */
    computed : mapState(['todolist']),
    /*
    computed : mapState({
        todolist2 : (state)=> state.todolist
    }),
    */
    methods : {
        checked : function(done) {
            if (done) return { checked: true };
            else return { checked : false };
        },
        /* ch09 - EventBus
        addTodo : function(todo) {
            if (todo !== "") {
                this.todolist.push(
                    { id:new Date().getTime(), todo : todo, done:false }
                );
            }
        },
        */

        /*
        doneToggle : function(id) {
            this.$store.commit(Constant.DONE_TOGGLE, {id:id});
        },
        deleteTodo : function(id) {
            this.$store.commit(Constant.DELETE_TODO, {id:id});
        },
        */

        deleteTodo : function(payload) {
            this.$store.dispatch(Constant.DELETE_TODO, payload);
        },
        doneToggle : function(payload) {
            this.$store.dispatch(Constant.DONE_TOGGLE, payload);
        }
        
        /*
        , ...mapMutations([
        Constant.DELETE_TODO,
        Constant.DONE_TOGGLE
        ])
        */
        /*
        ...mapMutations({
            removeTodo : Constant.DELETE_TODO,
            toggleTodo : Constant.DONE_TOGGLE
        })
        */
    }
}
</script>