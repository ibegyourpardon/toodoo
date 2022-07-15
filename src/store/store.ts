/*
 * @Date: 2022-06-07 17:29:28
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 23:07:54
 * @FilePath: \toodoo\src\store\store.ts
 */
import { defineStore } from 'pinia';
import { today } from '@/utils/time';
import { saveData, loadData } from '../utils/storage';

const useToodooStore = defineStore('toodoo', {
  state: () => ({
    todolist: [] as any,
    currentTodo: {} as Todo,
    onEditing: false,
  }),
  actions: {
    changeShowEditingPop() {
      this.onEditing = !this.onEditing;
    },
    addTodo() {
      const id = (new Date()).valueOf();
      const todo = {
        id,
        type: 'todo',
        title: this.currentTodo.title,
        description: '',
        status: 0,
        finished: false,
        createdTime: today(),
        updatedTime: '',
        expectedTime: '',
        finishedTime: '',
      };
      this.todolist.push(todo);
      console.log(id);
      console.log(this.todolist);
      this.currentTodo = {} as Todo;
      saveData(this.todolist);
    },
    getTodos() {
      const data = loadData();
      if (data) {
        this.todolist = data;
      } else {
        this.todolist = [{}] as Todos;
      }
    },
    markDone(id: number) {
      this.todolist.forEach((todo: { id: number; finished: boolean; }) => {
        if (todo.id === id) {
          todo.finished = true;
        }
      });
      // this.getTodos();
      saveData(this.todolist);
    },
    markUndone(id: number) {
      this.todolist.forEach((todo: { id: number; finished: boolean; }) => {
        if (todo.id === id) {
          todo.finished = false;
        }
      });
      saveData(this.todolist);
    },
    deleteTodo(id: number) {
      this.todolist.forEach((todo: { id: number; }, index: number) => {
        if (todo.id === id) {
          this.todolist.splice(index, 1);
        }
      });
      saveData(this.todolist);
    },
    updateTodo(id: number, todo: Todo) {
      this.todolist.forEach((todoItem: { id: number; }, index: number) => {
        if (todoItem.id === id) {
          this.todolist[index] = todo;
        }
      });
      saveData(this.todolist);
    },
    clearFinished() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const todos: Todos = this.todolist.filter((todo) => todo.finished === false);
      this.todolist = todos;
      saveData(this.todolist);
    },
    clearUnfinished() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const todos: Todos = this.todolist.filter((todo) => todo.finished === true);
      this.todolist = todos;
      saveData(this.todolist);
    },
    clearAllTodos() {
      this.todolist = [];
      saveData(this.todolist);
    },
  },
});

export default useToodooStore;
