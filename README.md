# Node.js 13 on Google Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

Node.js 13 is not an LTS release, because of that, it is not recommended to use it in production.

## Deploy to Cloud Run

[Cloud Run](https://cloud.run) allows you to run your Node.js 13 app in a fully managed serverless environment.

To deploy to Cloud Run, use the buttom above, or the following steps:

* Build with `gcloud builds submit --tag gcr.io/[your-project]/node13`
* Deploy with `gcloud beta run deploy --image gcr.io/[your-project]/node13`

Replacing `[your-project]` with your Google Cloud project ID.

## Running locally

* Build with `docker build . -t node13`
* Start with `docker run -p 8080:8080 node13`
* Open in your browser at `http://localhost:8080`