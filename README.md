# Pettamo

A web app for online vet consultations & verified pet care services to better care for your pets :dog::cat:

<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/image.png" alt="image" />

## Overview

This project is submitted for Supernova hackathon. Link to [**Live Demo**](https://pettamo.on.fleek.co/)

My humble and super bare minimum MVP is using the Netlify's functions (serverless) feature to talk to the API layer of the AstraDB - to save lots of time doing laborious backend plumbing work. For the API layer, I've chosen the Stargate document API to interact with AstraDB's Cassandra database since i came from MongoDB realm. Furthermore, I've only used a single collection to bring up the MVP fast - a tradeoff that enabled me to present the video demo of the working product on time.

### Architecture 

<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/solution-architecture.png" alt="solution-architecture" />

## Getting Started Locally

```shell
# Get the latest snapshot
git clone https://github.com/Nitheeshskumar/Supernova-Pettamo.git

# Change directory
cd Supernova-Pettamo

# Install NPM dependencies
npm install


# Then simply start your app
npm run dev
```

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **public**/                        | static files                                                 |
| **src**/index.js                   | entrypoint                                                   |
| **src**/**Assets**                 | static assets                                                |
| **src**/**Components**             | components used in the app                                   |
| **src**/**ContextStore**           | global data                                                  |
| **src**/**Modules**                | sub-components used in page cntainers                        |
| **src**/**Routes**                 | js handling routes and guarding unauthorized req             |
| **src**/**Services**               | axios config and handling                                    |
| **src**/**Utils**                  | some utility functions                                       |

The backend is deployed via netlify functions and astradb is used as the database.

Frontend is deployed to fleek

<img src="https://github.com/Nitheeshskumar/pettamo-innovaccer/blob/main/readme/schema.png" alt="schema" />

### Credits

* The project is modified from [huksley/todo-react-ssr-serverless](https://github.com/huksley/todo-react-ssr-serverless)
