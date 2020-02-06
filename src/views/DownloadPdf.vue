<template>
  <div class="download-pdf">
     <DownloadFileButton link="Download Pdf File"
      @download-file-btn="downloadFile('dummy.pdf', 'application/pdf')" />

     <div class="download-image__results">
        <span v-if="showSpinner" class="spinner">Downloading ...</span>
        <span v-if="showSuccess" class="success">File downloaded successfully!</span>
        <span v-if="showErrors" class="failure">File failed to download!</span>
      </div>

      <embed src="/assets/dummy.pdf" type="application/pdf">
  </div>
</template>

<script>
import { useDownloadFile } from '@/cmp-functions/download-file';
import DownloadFileButton from '@/components/DownloadFileButton.vue';

export default {
  components: {
    DownloadFileButton,
  },
  setup() {
    const {
      showSpinner, showSuccess, showErrors, downloadFile,
    } = useDownloadFile();

    return {
      showSpinner, showSuccess, showErrors, downloadFile,
    };
  },
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
}
</style>
