const fs = require("fs");

// Creating a promise using the PromiseConstructor
const myPromise = new Promise((happy, sad) => {
  const list = [10];
  if (list.length > 1) {
    happy(list);
  } else {
    sad("The list doesn't have the length greater than 1.");
  }
});

// how to handle the created promise
myPromise
  // the good scenario (happy case)
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    // another operation
  })
  // the bad scenario (bad case / error)
  .catch((error) => {
    console.log(error);
  });

// const createQRCode = async () => {
//   try {
//     const result = await myPromise; // may take 1s or 10minutes
//     console.log("result from createQRCode promise: ", result);
//   } catch (error) {
//     console.log("error from createQRCode promise: ", error);
//   }
// };

const saveArrayAsFile = (arrayBuffer, filePath) => {
  fs.writeFile(filePath, Buffer.from(arrayBuffer), "binary", (err) => {
    if (err) {
      console.log("There was an error writing the image");
    } else {
      console.log("Written File :" + filePath);
    }
  });
};

const createQRCode = async (data) => {
  const endpointURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${data}`;
  try {
    const result = await fetch(endpointURL); // we called the endpointURL with the specific data that we wanted (data param)
    console.log(result);
    /*
      Response {
        [Symbol(realm)]: null,
        [Symbol(state)]: {
          aborted: false,
          rangeRequested: false,
          timingAllowPassed: true,
          requestIncludesCredentials: true,
          type: 'default',
          status: 200,
          timingInfo: {
            startTime: 33.877583,
            redirectStartTime: 0,
            redirectEndTime: 0,
            postRedirectStartTime: 33.877583,
            finalServiceWorkerStartTime: 0,
            finalNetworkResponseStartTime: 0,
            finalNetworkRequestStartTime: 0,
            endTime: 0,
            encodedBodySize: 397,
            decodedBodySize: 0,
            finalConnectionTimingInfo: null
          },
          cacheState: '',
          statusText: 'OK',
          headersList: HeadersList {
            cookies: null,
            [Symbol(headers map)]: [Map],
            [Symbol(headers map sorted)]: null
          },
          urlList: [ URL {} ],
          body: { stream: undefined }
        },
        [Symbol(headers)]: HeadersList {
          cookies: null,
          [Symbol(headers map)]: Map(9) {
            'server' => [Object],
            'date' => [Object],
            'content-type' => [Object],
            'transfer-encoding' => [Object],
            'connection' => [Object],
            'access-control-allow-origin' => [Object],
            'access-control-allow-methods' => [Object],
            'access-control-max-age' => [Object],
            'access-control-allow-headers' => [Object]
          },
          [Symbol(headers map sorted)]: null
        }
      }
    */
    const buffer = await result.arrayBuffer(); // converted the result into an ArrayBuffer (stream)
    console.log(buffer);
    /*
      ArrayBuffer {
        [Uint8Contents]: <89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 2c 00 00 01 2c 01 03 00 00 00 43 b3 1c 36 00 00 00 06 50 4c 54 45 ff ff ff 00 00 00 55 c2 d3 7e 00 00 00 09 70 48 59 73 00 00 0e c4 00 00 0e c4 01 95 2b 0e 1b 00 00 02 2a 49 44 41 54 68 81 ed 9a dd 71 c3 30 0c 83 b9 99 46 93 46 d3 28 d9 44 b5 ... 550 more bytes>,
        byteLength: 650
      }
    */

    // we save our buffer into a system file (image with PNG type)
    saveArrayAsFile(buffer, `./qr_code_${new Date().getTime()}.png`); // our file will be named as: qr_code_123123123.png
  } catch (error) {
    console.log(error);
  }
};

createQRCode("658333");
