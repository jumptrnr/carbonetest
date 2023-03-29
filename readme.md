# Test App for Carbone Library

The original library is [here](https://carbone.io/)

The fork being used here is: [here](https://github.com/t7tran/carbone)

But it doesn't replace images correctly when they are repeated and iterated on multiple pages.
the refID for the image seems to be the same for all the images and so the last image is inserted in all the places.

Expected behaviour: the image should be replaced with the correct image on each page per the json data.

You must also install LibreOffice. You can download it from [here](https://www.libreoffice.org/download/download/).

In order to run the app, you need to have a local server running. You can use the following command:

```bash
yarn install
```

Then start with:

```bash
nodemon start
```
