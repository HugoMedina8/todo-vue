<template>
  <div>
    <div class="border-bottom pb-3">
      <h1>Done</h1>
    </div>
    <TableTodo :todos="getDoneTodos" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TableTodo from "@/components/todo/TableTodo";

export default {
  name: "DoneTodos",
  components: { TableTodo },
  computed: {
    ...mapGetters(["getDoneTodos"]),
  },
};
</script>

<style scoped></style>
