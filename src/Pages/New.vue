<template>
  <Modal>
    <h1>Cadastrando mensagem</h1>
    <Form @cancel="$router.back()" @save="createMessage($event)" />
  </Modal>
</template>
<script>
import api from "@/api";
import Modal from "@/components/Modal";
import Form from "@/components/Form";
export default {
  components: {
    Modal,
    Form,
  },
  methods: {
    createMessage(form) {
      api.createMessage(form).then(() => {
        this.$router.back();
        this.$emit("message-created");
      });
    },
  },
};
</script>
