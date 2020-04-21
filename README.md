# Node.js 14 on Google Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

Node.js 14 is not yet in active Long-term support (LTS), it is not recommended to use it in production yet.

## Deploy to Cloud Run

[Cloud Run](https://cloud.run) allows you to run your Node.js 14 app in a fully managed environment.

To deploy to Cloud Run, use the buttom above, or the following steps:

* Build with `gcloud builds submit --tag gcr.io/[your-project]/node14`
* Deploy with `gcloud run deploy --image gcr.io/[your-project]/node14`

Replacing `[your-project]` with your Google Cloud project ID.

## Running locally

* Build with `docker build . -t node14`
* Start with `docker run -p 8080:8080 node14`
* Open in your browser at `http://localhost:8080`
