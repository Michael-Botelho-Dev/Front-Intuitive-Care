<template>
  <div id="app">
    <header class="header">
      <h1>Consulta de Operadoras de Saúde</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <p>Sistema de consulta de operadoras registradas na ANS</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.footer {
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: #f5f5f5;
}

</style>
