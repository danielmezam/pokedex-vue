<template>
  <div>
    <b-input-group prepend="Search" class="mt-3 input-filter">
      <b-form-input v-model="filter"></b-form-input>
    </b-input-group>
    <div class="poke-table">
      <b-card
        v-for="p in filteredPokemon"
        :key="p.id"
        :title="`${p.name} #${p.id}`"
        :img-src="p.sprites.front_default"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 card-pokemon"
      >
        <router-link :to="{name: 'pokemon-detail', params: {id: p.id}}">
          <b-button variant="outline-danger">Details</b-button>
        </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxPokemonTable",
  data() {
    return {
      filter: ""
    };
  },
  props: {
    pokeData: {}
  },
  computed: {
    filteredPokemon() {
      if (!this.filter) return this.pokeData;
      return this.pokeData.filter(item =>
        item.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.input-filter {
  width: 90%;
  margin: auto !important;
  margin-top: 50px !important;
}

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
  width: 24% !important;
  margin-top: 5px;
  text-transform: capitalize;
}
</style>