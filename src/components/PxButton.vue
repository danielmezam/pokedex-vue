<template>
  <div class="buttons">
    <b-button variant="outline-primary" class="w-100" @click="addLimit">
      <slot></slot>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "PxButton",
  //   props: {
  //     limit: 0
  //   },
  methods: {
    addLimit() {
      this.$emit("addLimit");
    }
  }
};
</script>

<style scoped>
.buttons {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>