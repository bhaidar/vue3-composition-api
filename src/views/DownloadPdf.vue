<template>
  <div class="download-pdf">
     <div class="download-pdf__actions">
        <a href="#">Download File</a>
      </div>
      <embed src="/assets/dummy.pdf" type="application/pdf">
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.download-pdf {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  embed {
    width: 80%;
    height: 80%;
  }

  &__actions{
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
