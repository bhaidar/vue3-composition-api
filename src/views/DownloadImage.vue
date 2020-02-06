<template>
  <div class="download-image">
    <DownloadFileButton link="Download Image File"
      @download-file-btn="downloadImage('women-technology.jpg')" />
    <img src="/assets/women-technology.jpg" alt="Women in Technology">
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
    downloadImage(fileName) {
      this.status = { ...this.status, showSpinner: true };
      // eslint-disable-next-line no-console
      console.log({ status: this.status });

      axios.get(`/assets/${fileName}`, {
        responseType: 'arraybuffer',
        headers: {
          Accept: 'image/jpg',
        },
      }).then((response) => {
        this.status = { ...this.status, showSpinner: false, showSuccess: true };

        // eslint-disable-next-line no-console
        console.log({ status: this.status });

        const arrayBufferView = new Uint8Array(response.data);
        const blob = new Blob([arrayBufferView], {
          type: 'image/jpg',
        });
        const urlCreator = window.URL || window.webkitURL;
        const fileUrl = urlCreator.createObjectURL(blob);
        const fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.setAttribute('download', `${this.randomNumber()}-${fileName}`);
        document.body.appendChild(fileLink);
        fileLink.click();
      }).catch(() => {
        this.status = { ...this.status, showSpinner: false, showErrors: true };
        // eslint-disable-next-line no-console
        console.log({ status: this.status });
      });
    },
    randomNumber() {
      return Math.floor(Math.random() * 100);
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
}
</style>
