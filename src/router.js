import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Kanto from "@/views/Kanto";
import Johto from "@/views/Johto";
import Hoenn from "@/views/Hoenn";
import Sinnoh from "@/views/Sinnoh";
import Teselia from "@/views/Teselia";
import Kalos from "@/views/Kalos";
import Alola from "@/views/Alola";
import Search from "@/views/Search";
import PokemonDetails from "@/views/PokemonDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Kanto",
      path: "/Kanto",
      component: Kanto
    },
    {
      name: "Johto",
      path: "/Johto",
      component: Johto
    },
    {
      name: "Hoenn",
      path: "/Hoenn",
      component: Hoenn
    },
    {
      name: "Sinnoh",
      path: "/Sinnoh",
      component: Sinnoh
    },
    {
      name: "Teselia",
      path: "/Teselia",
      component: Teselia
    },
    {
      name: "Kalos",
      path: "/Kalos",
      component: Kalos
    },
    {
      name: "Alola",
      path: "/Alola",
      component: Alola
    },
    {
      name: "Search",
      path: "/Search",
      component: Search
    },
    {
      name: "pokemon-detail",
      path: "/pokemon/:id",
      component: PokemonDetails
    }
  ]
});
