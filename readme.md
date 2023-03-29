# Test App for Carbone Library

The original library is [here](https://carbone.io/)

The fork being used here is: [here](https://github.com/t7tran/carbone)

## Problem

The library doesn't replace images correctly when they are repeated and iterated on multiple pages.
the refID for the image seems to be the same for all the images and so the last image is inserted in all the places.

Expected behaviour: the images in the output.pdf should correspond with the correct images from the data.json file provided.

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

- When the app starts it navigate to [yourapp](http://localhost:8005) at localhost:8085 or wherever you are running it
- Look at the ./test/output.pdf file and note the two images are the same, but in fact should be different, and correspond to the base64 images in the provided data.json file.
