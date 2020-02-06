<template>
  <div class="download-pdf">
     <DownloadFileButton link="Download Pdf File" @download-file-btn="downloadPdf('dummy.pdf')" />
      <embed src="/assets/dummy.pdf" type="application/pdf">
  </div>
</template>

<script>
import axios from '@/http-common.js';
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
    downloadPdf(fileName) {
      axios.get(`/assets/${fileName}`, {
        responseType: 'arraybuffer',
        headers: {
          Accept: 'application/pdf',
        },
      }).then((response) => {
        const arrayBufferView = new Uint8Array(response.data);
        const blob = new Blob([arrayBufferView], {
          type: 'application/pdf',
        });
        const urlCreator = window.URL || window.webkitURL;
        const fileUrl = urlCreator.createObjectURL(blob);
        const fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.setAttribute('download', `${this.randomNumber()}-${fileName}`);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
    randomNumber() {
      return Math.floor(Math.random() * 100);
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
