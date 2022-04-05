<template>
  <div>
    <div class="d-flex justify-content-between border-bottom pb-3">
      <h1>Todos</h1>
      <button class="btn btn-primary px-5">Add todo</button>
    </div>
    <TableTodo :todos="getTodos" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TableTodo from "@/components/todo/TableTodo";

export default {
  name: "AllTodos",
  components: { TableTodo },
  computed: {
    ...mapGetters(["getTodos"]),
  },
};
</script>

<style scoped></style>
