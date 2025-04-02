<template>
    <div class="operadora-card">
        <h3>{{ operadora.Razao_Social }}</h3>
        <p v-if="operadora.Nome_Fantasia"><strong>Nome Fantasia:</strong> {{ operadora.Nome_Fantasia }}</p>
        <p><strong>Modalidade:</strong> {{ operadora.Modalidade }}</p>
        <p><strong>Localização:</strong> {{ operadora.Cidade }}/{{ operadora.UF }}</p>
        <p><strong>Registro ANS:</strong> {{ operadora.Registro_ANS }}</p>
    </div>
</template>

<script>
export default {
    props: {
        operadora: {
            type: Object,
            required: true
        }
    },
    methods: {
        verDetalhes() {
            this.$router.push({ name: 'detalhes', params: { id: this.operadora.Registro_ANS } })
        }
    }
}
</script>

<style scoped>
.operadora-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.operadora-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.operadora-card h3 {
    margin-top: 0;
    color: #2c3e50;
}
</style>