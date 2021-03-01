<template>
  <div>
    <div class="mb-2">
      <label>Título</label>
      <input v-model="form.title" />
    </div>
    <div class="mb-2">
      <label> Data e hora de envio </label>
      <input v-model="form.date_time" type="datetime-local" />
    </div>
    <div class="mb-2">
      <label>Conteúdo</label>
      <textarea v-model="form.content" />
    </div>
    <div class="mb-2">
      <label> Grupos </label>
      <Groups v-model:groups="form.groups" />
    </div>
    <div>
      <div class="buttons">
        <button class="button" @click="$emit('cancel')">Cancelar</button>
        <button class="button" style="margin-right: 10px" @click="onClickSave">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Groups from "@/components/Groups";
export default {
  components: {
    Groups,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    groups: {
      type: Array,
      default: () => [],
    },
    dateTime: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const form = ref({
      title: props.title,
      groups: props.groups,
      content: props.content,
      date_time: props.dateTime,
    });

    const onClickSave = () => {
      emit("save", {
        ...form.value,
        date_time: form.value.date_time.replace("T", " "),
      });
    };

    return {
      form,
      onClickSave,
    };
  },
};
</script>
<style scoped>
label {
  display: block;
}

input,
textarea {
  width: 100%;
}

textarea {
  min-height: 100px;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
}

.button {
  display: block;
}

.mb-2 {
  margin-bottom: 10px;
}
</style>
