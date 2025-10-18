<script setup lang="ts"></script>

<template>
  <div class="app">
    <!--NAVBAR-->
    <header>
      <div class="container">
        <h1 class="mb-0">Exercícios Mateus Dev</h1>
        <p class="subtitle">SEMANA 01</p>

        <div class="nav-vertical">
          <p>Segunda-Feira</p>
          <ul class="links">
            <li><router-link to="/">Contador</router-link></li>
            <li><router-link to="/tarefas">Lista de Tarefas</router-link></li>
            <li><router-link to="/imc">Calculadora IMC</router-link></li>
          </ul>
        </div>

      </div>
    </header>

    <!--CONTEUDO DA PAGINA-->
    <div class="container">
      <router-view></router-view>
    </div>

    <footer class="footer">
      <div class="container">
        <p>
          Direitos reservados |
          <a href="#" target="_blank">Documentação Mateus</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<!--Vai puxar os conteúdos da paginas-->
<script>

export default {
  name: 'App',
};

</script>


<style>
/* ======== GLOBAL ======== */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6fc;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ======== HEADER (NAVBAR) ======== */
header {
  background: linear-gradient(90deg, #1b2b5f 0%, #304b8c 50%, #4969c3 100%);
  color: white;
  padding: 1rem 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

header .container {
  margin: 0 auto;
  margin-left: 40px;
}

header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-right: 200px;
}

header .subtitle {
  margin-top: 1.2rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

.nav-vertical {
  margin-top: 1.6rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  border-left: 3px solid #a3b8ff;
  max-width: 180px; 
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.nav-vertical p {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.nav-vertical ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-vertical li {
  margin-bottom: 0.4rem;
}

.nav-vertical a {
  color: #d6e0ff;
  text-decoration: none;
  transition: 0.3s ease;
}

.nav-vertical a:hover {
  color: #ffffff;
  text-decoration: underline;
}


/* ======== FOOTER ======== */
.footer {
  background: linear-gradient(90deg, #0f1a3c 0%, #1c2b5e 50%, #283a7c 100%);
  color: #d0d6f2;
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.2);
}

.footer a {
  color: #b8c4ff;
  text-decoration: none;
  transition: 0.3s ease;
}

.footer a:hover {
  color: white;
  text-decoration: underline;
}
</style>
