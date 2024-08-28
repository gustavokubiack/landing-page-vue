<template>
    <section id="inscricao" class="py-5">
      <div class="container">
        <h2>Inscreva-se</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input v-model="nome" type="text" class="form-control" id="nome" placeholder="Digite seu nome" />
          </div>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Digite seu e-mail" />
          </div>
          <button type="submit" class="btn btn-custom" :disabled="isLoading">
            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-if="!isLoading">Enviar</span>
            <span v-if="isLoading">Enviando...</span>
          </button>
        </form>
      </div>
    </section>
  </template>
  
<script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        nome: '',
        email: '',
        isLoading: false,
      };
    },
    methods: {
      submitForm() {
        this.isLoading = true;
  
        const formData = new FormData();
        formData.append('name', this.nome);
        formData.append('email', this.email);
  
        this.$axios.post('/send-email/', formData)
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso!',
              text: 'Seu e-mail foi enviado com sucesso.',
            }).then(() => {
              this.nome = '';
              this.email = '';
            });
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Erro!',
              text: 'Houve um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.',
            });
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
    },
  };
  </script>
  