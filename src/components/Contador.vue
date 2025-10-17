<template>
    <div class="cont-contador">
        <h2>Contador do Mateus</h2>

        <small v-if="mensagem" class="text-muted">
            {{ mensagem }}
        </small>

        <div class="contador">
            <!-- Os botões negativos -->
            <button class="btn" @click="decrementar5">-5</button>
            <button class="btn" @click="decrementar">-1</button>

            <!-- Contador -->
            <div class="valor-contador">
                <strong>{{ contador }}</strong>
            </div>

            <!-- Botões Positivos -->
            <button class="btn" @click="incrementar">+1</button>
            <button class="btn" @click="incrementar5">+5</button>
        </div>

        <!-- Reset -->
        <button class="btn-reset" @click="resetar">Reset</button>
    </div>
</template>

<script>
    export default {
        name: "Contador",
        data() {
            return {
                contador: 0,
                mensagem: ""
            };
        },
        watch: {
            contador(novoValor) {
                if (novoValor === 10) {
                    this.mensagem = "🎉 Você chegou em 10, parabéns!!";
                } else {
                    this.mensagem = "";
                }
            }
        },
        methods: {
            incrementar() {
                this.contador++;
            },
            incrementar5() {
                this.contador += 5;
            },
            decrementar5() {
                if (this.contador >= 5) {
                    this.contador -= 5;
                }
            },  
            decrementar() {
                if (this.contador > 0) {
                    this.contador--;
                }
            },
            resetar() {
                this.contador = 0;
            }
        }
    };
</script>

<style scoped>
.cont-contador {
    background: linear-gradient(90deg, #1b2b5f 0%, #304b8c 50%, #4969c3 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    max-width: 500px;
    margin: 2rem auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

h2 {
    margin: 0 0 0.8rem 0;
    font-weight: 700;
}

.text-muted {
    display: block;
    font-size: 0.9rem;
    color: #c8d4ff;
    margin-bottom: 1rem;
    font-style: italic;
}

/* ===== ÁREA DOS BOTÕES ===== */
.contador {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

/* ===== BOTÕES ===== */
.btn {
    background: #304b8c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 50px;
}

.btn:hover {
    background: #4969c3;
    transform: translateY(-2px);
}

/* ===== VALOR DO CONTADOR ===== */
.valor-contador {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    min-width: 80px;
}

/* ===== BOTÃO RESET ===== */
.btn-reset {
    background: #15244f;
    color: #bfc8f8;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.btn-reset:hover {
    background: #0d1737;
    color: white;
    transform: scale(1.05);
}
</style>
