<template>
  <div class="download-pdf">
     <DownloadFileButton link="Download Pdf File" @download-file-btn="downloadPdf('dummy.pdf')" />

     <div class="download-image__results">
        <span v-if="showSpinner" class="spinner">Downloading ...</span>
        <span v-if="showSuccess" class="success">File downloaded successfully!</span>
        <span v-if="showErrors" class="failure">File failed to download!</span>
      </div>

      <embed src="/assets/dummy.pdf" type="application/pdf">
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
    downloadPdf(fileName) {
      this.downloadFile(fileName, 'application/pdf');
    },
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
