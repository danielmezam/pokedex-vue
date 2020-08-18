<template>
  <div class="pokemon-template">
    <div
      class="spinner-container w-100 d-flex justify-content-center align-items-center vh-100"
      v-if="isLoading"
    >
      <b-spinner type="grow" label="Loading..." variant="danger"></b-spinner>
    </div>
    <div class="pokemon-detail">
      <div class="pokemon-img">
        <img :src="dataPokemon.sprites.front_default" />
      </div>
      <div class="pokemon-info">
        <div class="pokemon-main-info">
          <h5>Name: {{ dataPokemon.name }}</h5>
          <h5>Height: {{ dataPokemon.height }} ''</h5>
          <h5>Weight: {{ dataPokemon.weight }} kg</h5>
        </div>
        <div class="pokemon-types">
          <div class="main-type type" :class="dataPokemon.types[0].type.name">
            <p>{{ dataPokemon.types[0].type.name }}</p>
          </div>
          <div
            class="second-type type"
            v-if="dataPokemon.types.length === 2"
            :class="dataPokemon.types[1].type.name"
          >
            <p>{{ dataPokemon.types[1].type.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <a @click="$router.go(-1)">
      <b-button variant="danger" class="back-button w-100">Go Back !</b-button>
    </a>
  </div>
</template>

<script>
export default {
  name: "PokemonDetails",
  data() {
    return {
      dataPokemon: {
        isLoading: false
      }
    };
  },
  props: {
    goBackPath: String
  },
  methods: {
    async pokemonDetails() {
      this.isLoading = true;
      const id = this.$route.params.id;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const results = await response.json();
      this.dataPokemon = results;
      console.log(this.dataPokemon.sprites.back_default);
      this.isLoading = false;
    }
  },
  created() {
    this.pokemonDetails();
  }
};
</script>

<style scoped>
h3 {
  text-transform: capitalize;
}

.pokemon-template {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 131, 179);
  background: linear-gradient(
    90deg,
    rgba(0, 131, 179, 0.7637429971988796) 0%,
    rgba(89, 184, 222, 0.3267682072829131) 100%
  );
}

.pokemon-detail {
  width: 40%;
  margin-top: -200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 7px;
  background-color: #fff;
}

.pokemon-info {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pokemon-main-info {
  width: 60%;
}

.pokemon-types {
  width: 30%;
}

.pokemon-img {
  width: 50%;
  text-align: center;
}

.type {
  border: 2px solid #000;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
  color: #fff;
  text-transform: capitalize;
}

.back-button {
  margin-top: 40px;
}

.type p {
  margin-top: 12px;
}

.steel {
  background-color: #9e979a;
}

.water {
  background-color: #3899f7;
}

.bug {
  background-color: #a9ba37;
}

.dragon {
  background-color: #7a67cd;
}

.electric {
  background-color: #eec467;
}

.ghost {
  background-color: #595990;
}

.fire {
  background-color: #ed4834;
}

.fairy {
  background-color: #f2aeef;
}

.ice {
  background-color: #7ad9fa;
}

.fighting {
  background-color: #7c4336;
}

.normal {
  background-color: #bfbcb1;
}

.grass {
  background-color: #81b45c;
}

.psychic {
  background-color: #dd6c90;
}

.rock {
  background-color: #9c8b58;
}

.dark {
  background-color: #655556;
}

.ground {
  background-color: #d2bc56;
}

.poison {
  background-color: #794970;
}

.flying {
  background-color: #7395db;
}
</style>