const fs = require("fs");

const createQRCode = async (text) => {
  const endpointURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${text}`;
  try {
    const result = await fetch(endpointURL); // we call the endpoint url with the specific text (text can any string)
    const buffer = await result.arrayBuffer(); // we convert the result into an array buffer type (stream)
    console.log(buffer);
    /*
        ArrayBuffer {
            [Uint8Contents]: <89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 2c 00 00 01 2c 01 03 00 00 00 43 b3 1c 36 00 00 00 06 50 4c 54 45 ff ff ff 00 00 00 55 c2 d3 7e 00 00 00 09 70 48 59 73 00 00 0e c4 00 00 0e c4 01 95 2b 0e 1b 00 00 03 b2 49 44 41 54 68 81 e5 5a 41 92 a3 30 0c 14 e5 03 47 9e c0 53 f8 19 90 9f ... 942 more bytes>,
            byteLength: 1042
        }
    */

    // Write the array buffer and create a new PNG file
    const path = `qr_code_${new Date().getTime()}.png`; // our file will be named as the following example: "qr_code_123123123.png"
    const source = Buffer.from(buffer);
    const callback = (err) => {
      if (err) {
        console.log("There was an error writing the image");
      } else {
        console.log("Written File:" + path);
      }
    };
    fs.writeFile(path, source, "binary", callback);
  } catch (error) {
    console.log(error);
  }
};

createQRCode(
  "https://www.emag.ro/piscina-rotunda-metal-frame-intex-diametru-305-cm-inaltime-76-cm-4485-litri-structura-otel-pvc-albastru-dm1txjbbm/pd/DPD49WBBM/?ref=profiled_categories_home_fill_ninth_3_1&provider=rec&recid=rec_93_6052cb6ed4709c55dc2030e714a86c752153e00b7f6e239352a18491a751e35f_1718901210&scenario_ID=93"
);
