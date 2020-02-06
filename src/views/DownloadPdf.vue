<template>
  <div class="download-pdf">
     <DownloadFileButton link="Download Pdf File" @download-file-btn="downloadPdf" />
      <embed src="/assets/dummy.pdf" type="application/pdf">
  </div>
</template>

<script>
import DownloadFileButton from '@/components/DownloadFileButton.vue';

export default {
  data() {
    return {
      status: {
        showSpinner: false,
        showSuccess: false,
        showErrors: false,
      },
    };
  },
  components: {
    DownloadFileButton,
  },
  methods: {
    downloadPdf() {},
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
