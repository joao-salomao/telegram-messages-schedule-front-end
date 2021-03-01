<template>
  <div style="width: 100%">
    <div class="messages">
      <div id="cadastrar">
        <button @click="$router.push('/messages/new')">
          Cadastrar mensagem
        </button>
      </div>
      <div :key="i" class="card" v-for="(message, i) in messages">
        <div class="header">
          <h2>{{ message.title }}</h2>
          <h3>{{ formatDate(message.date_time, "DD/MM/YYYY HH:MM") }}</h3>
        </div>
        <div class="content">
          <div style="margin-bottom: 5px">
            {{ message.content }}
          </div>
          <div>
            {{
              `Grupos: ${
                message.groups.length
                  ? message.groups.map((g) => g.name).join(", ")
                  : "-"
              }`
            }}
          </div>
        </div>
        <div class="footer">
          <button @click="$router.push('/messages/edit/' + message.id)">
            Editar
          </button>
          <button @click="onClickDeleteMessage(message.id)">Deletar</button>
        </div>
      </div>
    </div>
    <router-view
      @message-updated="getMessages()"
      @message-created="getMessages()"
    />
  </div>
</template>

<script>
import api from "@/api";
import { ref, onMounted } from "vue";
import { formatDate } from "@/formaters";
export default {
  name: "Messages",
  setup() {
    const showModal = ref(false);
    const messages = ref([]);

    const getMessages = () => {
      api.getMessages().then((data) => {
        messages.value = data;
      });
    };

    const onClickDeleteMessage = (id) => {
      if (confirm("Você tem certeza ?")) {
        api.deleteMessage(id).then(() => {
          messages.value = messages.value.filter((i) => i.id !== id);
        });
      }
    };

    onMounted(getMessages);

    return {
      messages,
      showModal,
      formatDate,
      getMessages,
      onClickDeleteMessage,
    };
  },
};
</script>

<style >
button {
  border-radius: 5px;
  font-size: 15px !important;
}

#cadastrar {
  display: block;
  width: 100%;
  max-width: 830px;
  text-align: end;
}

#cadastrar button {
  padding: 10px;
  font-weight: bold;
  text-align: center;
  color: rgb(7, 7, 7);
  background: white;
}

.messages {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card {
  border: solid gray 2px;
  padding: 15px;
  width: 100%;
  max-width: 800px;
  margin: 30px 20px;
  font-weight: bold;
  text-align: justify;
  border-radius: 5px;
  color: rgb(7, 7, 7);
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
}

.content {
  margin-bottom: 10px;
}

.footer {
  display: flex;
  justify-content: flex-end;
}

.footer button {
  margin-right: 10px;
}
</style>
