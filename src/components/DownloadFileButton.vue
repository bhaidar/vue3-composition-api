<template>
   <div class="download-file-button">
        <a href="javascript:void(0)" @click.prevent="click">{{ link }}</a>
      </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'Download File',
    },
  },
  methods: {
    click(e) {
      this.$emit('download-file-btn', e);
    },
  },
};
</script>

<style lang="scss">
.download-file-button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
</style>
