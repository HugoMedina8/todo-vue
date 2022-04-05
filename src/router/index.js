import { createRouter, createWebHistory } from "vue-router";
import AllTodos from "@/views/AllTodos";
import DoneTodos from "@/views/DoneTodos";

const routes = [
  {
    path: "/",
    name: "Todos",
    component: AllTodos,
  },
  {
    path: "/done",
    name: "Done",
    component: DoneTodos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
