<template>
    <div class="detalhes-operadora">
        <button @click="voltar" class="back-button">← Voltar</button>

        <div v-if="loading" class="loading">Carregando...</div>

        <div v-if="operadora" class="operadora-details">
            <h2>{{ operadora.Razao_Social }}</h2>
            <p v-if="operadora.Nome_Fantasia"><strong>Nome Fantasia:</strong> {{ operadora.Nome_Fantasia }}</p>

            <div class="details-grid">
                <div class="detail-item">
                    <h3>Informações Básicas</h3>
                    <p><strong>Registro ANS:</strong> {{ operadora.Registro_ANS }}</p>
                    <p><strong>CNPJ:</strong> {{ operadora.CNPJ }}</p>
                    <p><strong>Modalidade:</strong> {{ operadora.Modalidade }}</p>
                    <p><strong>Data de Registro:</strong> {{ operadora.Data_Registro_ANS }}</p>
                </div>

                <div class="detail-item">
                    <h3>Endereço</h3>
                    <p>{{ operadora.Logradouro }}, {{ operadora.Numero }} {{ operadora.Complemento }}</p>
                    <p>{{ operadora.Bairro }}</p>
                    <p>{{ operadora.Cidade }}/{{ operadora.UF }} - CEP: {{ operadora.CEP }}</p>
                </div>

                <div class="detail-item">
                    <h3>Contato</h3>
                    <p v-if="operadora.Telefone"><strong>Telefone:</strong> ({{ operadora.DDD }}) {{ operadora.Telefone
                        }}</p>
                    <p v-if="operadora.Fax"><strong>Fax:</strong> {{ operadora.Fax }}</p>
                    <p v-if="operadora.Endereco_eletronico"><strong>E-mail:</strong> {{ operadora.Endereco_eletronico }}
                    </p>
                </div>

                <div class="detail-item">
                    <h3>Representante</h3>
                    <p><strong>Nome:</strong> {{ operadora.Representante }}</p>
                    <p><strong>Cargo:</strong> {{ operadora.Cargo_Representante }}</p>
                </div>
            </div>
        </div>

        <div v-else-if="!loading" class="error-message">
            Operadora não encontrada.
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DetalhesOperadora',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            operadora: null,
            loading: true,
            error: null
        }
    },
    created() {
        this.carregarOperadora()
    },
    methods: {
        async carregarOperadora() {
            this.loading = true
            try {
                const response = await axios.get(`/operadoras/${this.id}`)
                this.operadora = response.data
            } catch (error) {
                console.error('Erro ao carregar operadora:', error)
                this.error = error
            } finally {
                this.loading = false
            }
        },
        voltar() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.detalhes-operadora {
    padding: 1rem;
}

.back-button {
    background: none;
    border: none;
    color: #2c3e50;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
}

.back-button:hover {
    text-decoration: underline;
}

.operadora-details {
    max-width: 800px;
    margin: 0 auto;
}

.operadora-details h2 {
    color: #2c3e50;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.detail-item {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
}

.detail-item h3 {
    margin-top: 0;
    color: #2c3e50;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
}

.loading,
.error-message {
    text-align: center;
    padding: 2rem;
    color: #666;
}
</style>