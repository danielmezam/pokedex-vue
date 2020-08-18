<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger" class="p-3 main-menu">
      <b-navbar-brand href="#">
        <router-link to="/">
          <h4 class="text-white">Vuedex</h4>
        </router-link>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto main-menu">
        <b-nav-item-dropdown text="Regíon" right>
          <b-dropdown-item href="#">
            <router-link to="/kanto">Kanto</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/johto">Johto</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/hoenn">Hoenn</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/sinnoh">Sinnoh</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/teselia">Teselia</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/kalos">Kalos</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link to="/alola">Alola</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.main-menu {
  z-index: 9999999999999999999999999 !important;
}
</style>