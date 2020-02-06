<template>
  <div class="download-image">
    <DownloadFileButton link="Download Image File"
      @download-file-btn="downloadImage('women-technology.jpg')" />

      <div class="download-image__results">
        <span v-if="showSpinner" class="spinner">Downloading ...</span>
        <span v-if="showSuccess" class="success">File downloaded successfully!</span>
        <span v-if="showErrors" class="failure">File failed to download!</span>
      </div>

    <img src="/assets/women-technology.jpg" alt="Women in Technology">
  </div>
</template>

<script>
import DownloadFileMixin from '@/mixins/DownloadFile.mixin';
import DownloadFileButton from '@/components/DownloadFileButton.vue';

export default {
  mixins: [DownloadFileMixin],
  components: {
    DownloadFileButton,
  },
  methods: {
    downloadImage(fileName) {
      this.downloadFile(fileName, 'image/jpg');
    },
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

  &__results {
    text-align: center;

    span {
      display: block;
    }

    .success {
      color: green;
    }

    .failure {
      color: red;
    }

    .spinner {
      color: blue;
    }
  }
}
</style>
