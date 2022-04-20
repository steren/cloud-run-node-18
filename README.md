# Node.js 18 on Google Cloud Run

Node.js 16 brings support for ES modules, optional chaining and better internationalization, read more on the [official blog post](https://medium.com/@nodejs/node-js-version-16-available-now-8170d384567e).

[Cloud Run](https://cloud.run) allows you to run your Node.js 16 app in a fully managed environment.

## Deploy to Cloud Run with a single click

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

## Deploy to Cloud Run using the `gcloud` command line

Run `gcloud run deploy` in the root folder.

## Running locally

* Build with `docker build . -t node16`
* Start with `docker run -p 8080:8080 node16`
* Open in your browser at `http://localhost:8080`

This is not an official Google product.

