<template>
  <div class="poke-table">
    <b-card
      v-if="pokemonData != undefined"
      :title="`${pokemonData.name} #${pokemonData.id}`"
      :img-src="pokemonData.sprites.front_default"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 card-pokemon"
    >
      <router-link :to="{name: 'pokemon-detail', params: {id: pokemonData.id}}">
        <b-button variant="outline-danger">Details</b-button>
      </router-link>
    </b-card>
    <p v-if="pokemonData === undefined" class="m-auto">No Pokemon Founded...😭</p>
  </div>
</template>

<script>
export default {
  name: "PxSinglePokemon",
  props: {
    pokemonData: {}
  }
};
</script>

<style scoped>
.poke-table {
  width: 90%;
  margin: auto;
  padding: 10px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap !important;
}
.card-pokemon {
  width: 50% !important;
  margin: auto;
  margin-top: 5px;
  text-transform: capitalize;
}
</style>