<template>
  <div class="download-image">
     <DownloadFileButton link="Download Image File" @download-file-btn="downloadImage" />
      <img src="/assets/women-technology.jpg" alt="Women in Technology">
  </div>
</template>

<script>
import DownloadFileButton from '@/components/DownloadFileButton.vue';

export default {
  data() {
    return {
      showSuccess: false,
      showErrors: false,
    };
  },
  components: {
    DownloadFileButton,
  },
  methods: {
    downloadImage() { },
  },
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
}
</style>
