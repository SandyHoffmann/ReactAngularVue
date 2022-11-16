<script setup>
defineProps({
  contatos: {
    type: Array,
    default: () => [],
    required: true,
  },
});
</script>

<template>
  <div v-for="contato in contatos" :key="contato.id" class="contato">
    <div>
      <div className="imgContato"></div>
    </div>
    <h3>{{ contato.nome }}</h3>
    <p>telefone:{{ contato.telefone }}</p>
    <p>email: {{ contato.email }}</p>
  </div>
</template>

<style scoped>
.contato {
  flex: 1;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 40px 15px 40px 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.imgContato {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: bisque;
  background-image: url("./static/userIcon.png");
  background-size: cover;
}
.contato p {
  margin: 0;
}
</style>
