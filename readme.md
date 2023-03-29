# Test App for Carbone Library

The original library is [here](https://carbone.io/)

The fork being used here is: [here](https://github.com/t7tran/carbone)

## Problem

The library doesn't replace images correctly when they are repeated and iterated on multiple pages.
the refID for the image seems to be the same for all the images and so the last image is inserted in all the places.

Expected behaviour: the image should be replaced with the correct image on each page per the json data.

## How to run

### Installation

```bash
yarn install
```

You must also install LibreOffice. You can download it from [here](https://www.libreoffice.org/download/download/).

### Running the test app

```bash
nodemon start
```

- When the app starts it navigate to http://localhost:8005 or wherever you install it
- Look at the ./test/output.pdf file and note the two images are the same, but in fact should be different, and correspond to the base64 images in the provided data.json file.
