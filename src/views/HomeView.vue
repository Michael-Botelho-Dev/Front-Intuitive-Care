<template>
  <div class="home">
    <div class="search-container">
      <input type="text" v-model="searchTerm" @input="buscarOperadoras"
        placeholder="Digite o nome da operadora, cidade ou modalidade..." class="search-input">
      <button @click="buscarOperadoras" class="search-button">Buscar</button>
    </div>

    <div v-if="loading" class="loading">Carregando...</div>

    <div v-if="resultados?.length > 0">
      <h2>Resultados da busca ({{ totalResultados }})</h2>
      <div class="results-container">
        <OperadoraCard v-for="operadora in resultados" :key="operadora.Registro_ANS" :operadora="operadora" />
      </div>
    </div>

    <div v-else-if="searchTerm && !loading" class="no-results">
      Nenhuma operadora encontrada para "{{ searchTerm }}"
    </div>

    <div v-else class="initial-message">
      <p>Use o campo acima para buscar operadoras de saúde registradas na ANS.</p>
      <p>Você pode buscar por nome, cidade, estado ou modalidade.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import OperadoraCard from '@/components/OperadoraCard.vue'

export default {
  name: 'HomeView',
  components: {
    OperadoraCard
  },
  data() {
    return {
      searchTerm: '',
      resultados: [],
      totalResultados: 0,
      loading: false
    }
  },
  methods: {
    async buscarOperadoras() {
      if (!this.searchTerm.trim()) {
        this.resultados = []
        this.totalResultados = 0
        return
      }

      this.loading = true
      try {

        const response = await axios.get('/busca', {
          headers: { "Accept": "application/json" },
          params: {
            q: this.searchTerm,
            limit: 20
          }
        })

        this.resultados = response.data.resultados
        this.totalResultados = response.data.total_resultados
      } catch (error) {
        console.error('Erro na busca:', error)
        this.resultados = []
        this.totalResultados = 0
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 1rem;
}

.search-container {
  display: flex;
  margin-bottom: 2rem;
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.search-button {
  padding: 0 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
}

.search-button:hover {
  background-color: #1a2a3a;
}

.results-container {
  margin-top: 1rem;
}

.loading,
.no-results,
.initial-message {
  text-align: center;
  padding: 2rem;
  color: #666;
}
</style>