/**Fizz esse arquivo porque o visual code tava alertando de erro nos mudolos/caminho para o app.vue */

/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
