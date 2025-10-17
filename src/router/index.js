import { createRouter, createWebHistory } from 'vue-router';
import Contador from '../components/Contador.vue'; 
import ListaTarefa from '../components/ListaTarefa.vue'; 

const routes = [
    {
    path: '/', 
    name: 'Home',
    component: Contador, 
    },
    {
    path: '/tarefas', 
    name: 'Tarefas',
    component: ListaTarefa, 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
