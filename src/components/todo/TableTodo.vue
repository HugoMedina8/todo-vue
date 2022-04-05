<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">created at</th>
        <th scope="col">actions</th>
      </tr>
    </thead>
    <tbody>
      <TableRow v-for="todo in todos" :key="todo.id" :todo="todo" />
    </tbody>
  </table>
</template>

<script>
import TableRow from "@/components/todo/TableRow";

export default {
  name: "TableTodo",
  components: { TableRow },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
