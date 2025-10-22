# Journey Mentor

Journey Mentor REST Countries API provides detailed information about countries worldwide, including population, region, and capital. Easily explore and retrieve country data for travel planning and educational purposes.

## Authors

- [@linkedin](https://https://www.linkedin.com/in/javad-bakhshabadi-a84491a1/) javad-bakhshabadi

## Demo

http://5.161.193.73:4000/

## Run Locally

Clone the project

```bash
  git clone https://github.com/git-bakhshabadi/country-app.git
```

Go to the project directory

```bash
  cd country-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start | npm start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test  |  npm test
```

## Features

- Light/dark mode toggle
- Live previews
- Toggle the color scheme between light and dark mode without using any 3rd party libraries
- Searching using the keywords Grmany or Grmny should also work
- Add sort functionality for both Population and Country Name
- Make all content server-side rendered and also have a fallback if the server-side render faces an error
- Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable
- Add unit tests for components
- Store the filters in the URL query strings and sync it with the component filter object
- Add lazy loading for country images and list

## Tech Stack

**Client Tools:** NuxtJs, Pinia, TailwindCSS
