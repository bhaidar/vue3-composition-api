/* eslint-disable import/prefer-default-export */
import { reactive, computed } from '@vue/composition-api';
import axios from '@/http-common.js';

export const useDownloadFile = () => {
  const status = reactive({
    spinner: false,
    success: false,
    errors: null,
  });

  const randomNumber = () => Math.floor(Math.random() * 100);

  const showSpinner = computed(() => status.spinner);

  const showSuccess = computed(() => status.success);

  const showErrors = computed(() => status.errors);

  const createBlobFileUrl = (blob) => {
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };

  const generateFileLink = (fileName, blobUrl) => {
    const fileLink = document.createElement('a');

    fileLink.href = blobUrl;
    fileLink.setAttribute('download', `${randomNumber()}-${fileName}`);

    document.body.appendChild(fileLink);

    return fileLink;
  };

  const getBlobResults = (fileContent, contentType) => {
    const arrayBufferView = new Uint8Array(fileContent);
    return new Blob([arrayBufferView], {
      type: contentType,
    });
  };

  const downloadFile = async (fileName, contentType) => {
    status.spinner = true;
    status.errors = null;
    status.success = false;

    axios.get(`/assets/${fileName}`, {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'image/jpg',
      },
    }).then(value => new Promise(resolve => setTimeout(resolve, 2000, value)))
      .then((response) => {
        const blobResults = getBlobResults(response.data, contentType);
        const blobFileUrl = createBlobFileUrl(blobResults);
        const fileLink = generateFileLink(fileName, blobFileUrl);

        status.spinner = false;
        status.errors = null;
        status.success = true;

        // Download file
        fileLink.click();
      }).catch((err) => {
        status.errors = err;
        status.success = false;
        status.spinner = false;
      });
  };

  return {
    showSpinner, showSuccess, showErrors, downloadFile,
  };
};
