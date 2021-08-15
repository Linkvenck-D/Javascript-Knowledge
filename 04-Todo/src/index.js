import './style.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

const todolist = new TodoList();
const tarea = new Todo("Ver naruto");

todolist.nuevoTodo(tarea);
console.log(todolist);

crearTodoHtml(tarea);