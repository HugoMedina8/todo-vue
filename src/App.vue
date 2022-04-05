<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/">Todos</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/done">Done</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>
