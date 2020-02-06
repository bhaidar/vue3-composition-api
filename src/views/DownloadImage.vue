<template>
  <div class="download-image">
      <div class="download-image__actions">
        <a href="#">Download File</a>
      </div>
      <img src="/assets/women-technology.jpg" alt="Women in Technology">
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.download-image {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 80%;
  }

   &__actions{
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
