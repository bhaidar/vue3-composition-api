import axios from '@/http-common.js';

export default {
  data() {
    return {
      status: {
        spinner: false,
        sucess: false,
        errors: null,
      },
    };
  },
  computed: {
    showSpinner() {
      return this.status.spinner;
    },
    showSuccess() {
      return this.status.success;
    },
    showErrors() {
      return this.status.errors;
    },
  },
  methods: {
    async downloadFile(fileName, contentType) {
      this.status = { ...this.status, spinner: true };

      axios.get(`/assets/${fileName}`, {
        responseType: 'arraybuffer',
        headers: {
          Accept: contentType,
        },
      }).then(value => new Promise(resolve => setTimeout(resolve, 2000, value)))
        .then((response) => {
          const blobResults = this.getBlobResults(response.data, contentType);
          const blobFileUrl = this.createBlobFileUrl(blobResults);
          const fileLink = this.generateFileLink(fileName, blobFileUrl);

          this.status = { ...this.status, spinner: false, success: true };

          // Download file
          fileLink.click();
        }).catch((err) => {
          this.status = { ...this.status, spinner: false, errors: err };
        });
    },
    createBlobFileUrl(blob) {
      const urlCreator = window.URL || window.webkitURL;
      return urlCreator.createObjectURL(blob);
    },
    generateFileLink(fileName, blobUrl) {
      const fileLink = document.createElement('a');

      fileLink.href = blobUrl;
      fileLink.setAttribute('download', `${this.randomNumber()}-${fileName}`);

      document.body.appendChild(fileLink);

      return fileLink;
    },
    getBlobResults(fileContent, contentType) {
      const arrayBufferView = new Uint8Array(fileContent);
      return new Blob([arrayBufferView], {
        type: contentType,
      });
    },
    randomNumber() {
      return Math.floor(Math.random() * 100);
    },
    wait(ms, value) {
      return new Promise(resolve => setTimeout(resolve, ms, value));
    },
  },
};
