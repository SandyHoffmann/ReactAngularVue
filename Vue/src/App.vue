<script setup>
import { RouterView } from "vue-router";
import ContatosApp from "./components/ContatosApp.vue";
</script>

<template>
  <div>
    <div class="naveContatos">
      <div class="headerContatos">
        <h1>Lista de Contatos</h1>
        <div class="divBotoes">
          <button class="botao add" @click="this.modalAdd = true">
            Adicionar
          </button>
          <button class="botao remover" @click="removerContato">Remover</button>
          <button class="botao editar">Editar</button>
        </div>
      </div>
    </div>
    <div class="Conteudo">
      <ContatosApp :contatos="this.contatos" />
    </div>
    <div class="modalBg" v-if="this.modalAdd">
      <div class="modal modalComprasAdd">
        <div class="modalFechar">
          <span @click="this.modalAdd = false" class="xFechar">X</span>
        </div>
        <div class="modalConteudo">
          <h1 class="tituloModal">Adicionar Novos Contatos</h1>
          <hr />
          <h2 class="subtituloModal">Adicionar quantos novos contatos?</h2>
          <select
            class="selectModalQtd"
            @change="(e) => (this.qtdDadosAdd = e.target.value)"
          >
            <option value="1">1</option>
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="1000">1000</option>
            <option value="10000">10000</option>
            <option value="100000">100000</option>
            <option value="1000000">1000000</option>
          </select>
        </div>
        <hr />
        <div class="modalFooter">
          <button class="botao add" @click="adicionarContato">Adicionar</button>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
<script>
export default {
  name: "App",
  components: {
    ContatosApp,
  },
  data() {
    return {
      contatos: [],
      qtdDadosAdd: 1,
      modalAdd: false,
    };
  },
  methods: {
    adicionarContato() {
      for (let i = 0; i < this.qtdDadosAdd; i++) {
        this.contatos.push({
          id: this.contatos.length + 1,
          nome: "Contato " + (this.contatos.length + 1),
          telefone: "Telefone " + (this.contatos.length + 1),
          email: "Email " + (this.contatos.length + 1),
        });
      }
      this.modalAdd = false;
    },

    removerContato() {
      this.contatos = [];
    },
  },
};
</script>
<style scoped>
.Conteudo {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.bodyCRUD {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #f5f5f5;
}

.naveContatos {
  padding-right: 45px;
  padding-left: 45px;
  background-color: #fff;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.headerContatos {
  padding-right: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.headerContatos h1 {
  margin-right: 30px;
  font-size: 35px;
}

.divBotoes {
  padding: 15px;
}

.botao {
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 20px;
  margin: 5px;
}

.add {
  background-color: #4caf50;
}

.remover {
  background-color: #f44336;
}

.editar {
  background-color: #2196f3;
}

.modal {
  z-index: 2;
  background-color: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}

.modal .xFechar {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 5px;
  z-index: 3;
}

.modal .tituloModal {
  text-align: center;
  font-size: 35px;
}

.modal .subtituloModal {
  text-align: center;
  font-size: 25px;
}

.modal .selectModalQtd {
  width: 100%;
  height: 30px;
  font-size: 20px;
}

.modalBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
