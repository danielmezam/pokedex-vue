<template>
  <div class="main-section">
    <div class="region">
      <router-link to="/Kanto">
        <b-button variant="danger">Lista de Kanto</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Johto">
        <b-button variant="danger">Lista de Johto</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Hoenn">
        <b-button variant="danger">Lista de Hoenn</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Sinnoh">
        <b-button variant="danger">Lista de Sinnoh</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Teselia">
        <b-button variant="danger">Lista de Teselia</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Kalos">
        <b-button variant="danger">Lista de Kalos</b-button>
      </router-link>
    </div>
    <div class="region">
      <router-link to="/Alola">
        <b-button variant="danger">Lista de Alola</b-button>
      </router-link>
    </div>

    <div class="region last">
      <router-link to="/Search">
        <b-button variant="success">Por Nombre</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      image: "../assets/Images/background-pokemon.jpeg"
    };
  },
  watch: {
    pokemonLimit() {
      this.fetchPokemon();
    }
  },
  methods: {
    addLimit() {
      this.pokemonOffset = this.pokemonOffset + 51;
      this.pokemonLimit = this.pokemonLimit + 51;
      this.isLoading = true;
    },
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
        await this.getPokemonInfo(i);
      }
    }
  },
  created() {
    this.fetchPokemon();
  }
};
</script>

<style scoped>
.main-section {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/Images/background-pokemon.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}

.main-section .region {
  background-color: transparent;
  width: 12.5%;
  height: 100vh;
  border-right: 2px solid #fff;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-section .region a {
  z-index: 2;
}

.main-section .region::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  display: block;
  content: "";
  transition: all 0.3s ease;
}

.main-section .region:hover::before {
  background-color: transparent;
}

.main-section .last {
  border-right: none;
}
</style>