<template>
  <div class="container">
    <h1 class="text-center mt-5">Kalos</h1>
    <h5 class="text-center mt-5" v-if="isLoading">Cargando lista...</h5>
    <px-pokemon-table :pokeData="pokeData" />
    <px-button @addLimit="addLimit" v-if="!stopBtn">Cargar más</px-button>
  </div>
</template>

<script>
import PxPokemonTable from "@/components/PxPokemonTable";
import PxButton from "@/components/PxButton";

export default {
  name: "Kalos",
  components: { PxPokemonTable, PxButton },
  data() {
    return {
      isLoading: false,
      pokeData: [],
      pokemonOffset: 650,
      pokemonLimit: 670,
      stopBtn: false
    };
  },
  watch: {
    pokemonOffset() {
      this.fetchPokemon();
    }
  },
  methods: {
    async getPokemonInfo(limit) {
      this.isLoading = true;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${limit}`
      );
      const results = await response.json();
      this.pokeData.push(results);
      this.isLoading = false;
    },
    async fetchPokemon() {
      for (let i = this.pokemonOffset; i < this.pokemonLimit; i++) {
        if (i === 722) {
          this.stopBtn = true;
          return false;
        }
        await this.getPokemonInfo(i);
      }
    },
    addLimit() {
      this.pokemonOffset += 20;
      this.pokemonLimit += 20;
      this.isLoading = true;
    }
  },
  created() {
    this.fetchPokemon();
  }
};
</script>
