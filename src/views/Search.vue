<template>
  <div class="container mt-5">
    <b-form-group class="mb-0" label="Search Pokemon by name" label-for="input-formatter">
      <b-form-input id="input-formatter" placeholder="Write a name or id" v-model="searchPokemon"></b-form-input>
    </b-form-group>
    <b-button variant="primary" class="mt-2 w-100" @click="searchPokemonData">Search</b-button>
    <px-single-pokemon :pokemonData="pokemonData" />
  </div>
</template>

<script>
import PxSinglePokemon from "@/components/PxSinglePokemon";

export default {
  name: "Search",
  components: { PxSinglePokemon },
  data() {
    return {
      searchPokemon: "",
      pokemonData: null
    };
  },
  methods: {
    async searchPokemonData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.searchPokemon.toLowerCase()}`
        );

        const results = await response.json();
        this.pokemonData = results;
      } catch (error) {
        this.pokemonData = undefined;
      }
    }
  }
};
</script>