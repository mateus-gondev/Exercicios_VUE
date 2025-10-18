<template>
    <div class="cont-calculadora">
        <h2>Calculadora IMC</h2>

        <div class="cont-valores">
            <input v-model.number="peso" type="number" placeholder="Digite seu peso em KG">
            <input v-model.number="altura" type="number" placeholder="Digite sua altura em metros">
            <button class="btn" @click="calcular">Calcular</button>
        </div>

        <div class="cont-resul" v-if="resultado">
            <strong>Resultado: </strong> {{ resultado }}
            <br>
            <small class="text-muted">
                {{ mensagem }}
            </small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalculadoraIMC',

    data() {
        return {
            peso: null,
            altura: null,
            resultado: null
        }
    },

    computed: {
        mensagem() {
            if (this.resultado === null) { 
                return ''
            } 

            if (this.resultado < 18.5) {
                return 'Abaixo do peso'
            } else if (this.resultado < 25) {
                return 'Peso normal'
            } else if (this.resultado < 30) {
                return 'Sobrepeso'
            } else if (this.resultado < 35) {
                return 'Obesidade Grau I'
            } else if (this.resultado < 40) {
                return 'Obesidade Grau II'
            } else {
                return 'Obesidade Grau III'
            }
        }
    },

    methods: {
        calcular() {
            if (this.peso === null || this.altura === null) {
                alert('Preencha peso e altura antes de calcular!')
                return
            }

            const imc = this.peso / (this.altura ** 2)
            this.resultado = imc.toFixed(2)
        }
    }
}
</script>

<style scoped>
    .cont-calculadora {
        background: linear-gradient(90deg, #1b2b5f 0%, #304b8c 50%, #4969c3 100%);
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        max-width: 400px;
        margin: 40px auto;
        color: #fff;
        text-align: center;
    }

    h2 {
        margin-bottom: 1rem;
    }

    .cont-valores {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1rem;
    }

    input {
        border-radius: 8px;
        border: none;
        padding: 10px;
        text-align: center;
    }

    button.btn {
        background: #15244f;
        color: #bfc8f8;
        border: none;
        border-radius: 12px;
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button.btn:hover {
        opacity: 0.9;
        transform: scale(1.03);
    }
</style>
