<template>
  <div class="main">
    <div :key="i" class="group" v-for="(item, i) in options">
      <button
        @click="toggleSelected(item)"
        :class="item.selected ? 'selected' : ''"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
<script>
import api from "@/api";
import { ref, onMounted, computed } from "vue";
export default {
  props: {
    groups: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const options = ref([]);

    const groupsId = computed(() => {
      return options.value.reduce((values, p) => {
        if (p.selected) {
          values.push(p.value);
        }
        return values;
      }, []);
    });

    const getGroups = () => {
      api.getGroups().then((data) => {
        options.value = data.map((g) => {
          return {
            value: g.id,
            label: g.name,
            selected: props.groups.includes(g.id),
          };
        });
      });
    };

    const toggleSelected = (option) => {
      option.selected = !option.selected;
      emit("update:groups", groupsId.value);
    };

    onMounted(getGroups);

    return {
      options,
      toggleSelected,
    };
  },
};
</script>
<style scoped>
.main {
  display: flex;
  padding: 4px 0px 4px 0px;
  flex-direction: row;
  flex-wrap: wrap;
}

.group {

  margin-bottom: 2px;
  padding: 3px;
  
}

.selected {
  background: rgb(100, 144, 177);
}

button:focus {
  outline: none;
}
</style>
