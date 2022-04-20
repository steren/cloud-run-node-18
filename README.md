# Node.js 18 on Google Cloud Run

Node.js 18 brings support for many cool features, read the [official blog post](https://nodejs.org/en/blog/announcements/v18-release-announce/).

[Cloud Run](https://cloud.run) allows you to run your Node.js 18 app in a fully managed environment.

## Deploy to Cloud Run with a single click

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

## Deploy to Cloud Run using the `gcloud` command line

Run `gcloud run deploy` in the root folder.

## Running locally

* Build with `docker build . -t node18`
* Start with `docker run -p 8080:8080 node18`
* Open in your browser at `http://localhost:8080`

This is not an official Google product.

