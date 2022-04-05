<template>
  <tr :class="rowBackground">
    <td>{{ todo.id }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.createdAt }}</td>
    <td class="d-flex justify-content-around">
      <button class="btn btn-danger" @click.prevent="deleteTodo">Delete</button>
      <button class="btn btn-success" @click.prevent="toggleDoneTodo">
        <span v-if="todo.isDone">Undo</span>
        <span v-else>Done</span>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDoneTodo() {
      this.$store.commit("TOGGLE_DONE", this.todo);
    },
    deleteTodo() {
      this.$store.commit("DELETE", this.todo);
    },
  },
  computed: {
    rowBackground() {
      return this.todo.isDone ? "bg-warning" : "";
    },
  },
};
</script>

<style scoped></style>
