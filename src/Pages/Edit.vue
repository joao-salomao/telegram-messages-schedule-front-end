<template>
  <modal>
    <div v-if="!isLoading">
      <h1>Editando mensagem</h1>
      <Form
        :title="message.title"
        :groups="message.groups"
        :content="message.content"
        :dateTime="message.date_time"
        @save="updateMessage($event)"
        @cancel="$router.back()"
      />
    </div>
  </modal>
</template>
<script>
import api from "@/api";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
export default {
  components: {
    Form,
    Modal
  },
  data() {
    return {
      message: {},
      isLoading: true,
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    updateMessage(data) {
      const id = this.$route.params.messageId;
      api.updateMessage(id, data).then(() => {
        this.$emit("message-updated");
        this.$router.back();
      });
    },
    getMessage() {
      this.isLoading = true;
      api.getMessage(this.$route.params.messageId).then((data) => {
        this.message = {
          ...data,
          date_time: data.date_time.replace(" ", "T"),
          groups: data.groups.map((g) => g.id),
        };

        this.isLoading = false;
      });
    },
  },
};
</script>
