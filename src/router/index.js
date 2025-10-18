import { createRouter, createWebHistory } from 'vue-router';
import Contador from '../components/Contador.vue'; 
import ListaTarefa from '../components/ListaTarefa.vue'; 
import CalculadoraIMC from '../components/CalculadoraIMC.vue'

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
    },
    {
    path: '/imc',
    name: 'Calculadora',
    component: CalculadoraIMC,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
