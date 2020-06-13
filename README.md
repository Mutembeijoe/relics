# Relics

Relics is a portfolio e-commerce website that showcases branded clothe items (Tshirts and Hoodies).The [Live](https://ndirangujoe-relics.herokuapp.com/) site is hosted on heroku.

## Tech Stack

- ### [Nextjs](https://nextjs.org/)
  The site is built with next js. Next js is a react framework for building seo friendly Single Page Applications (SPAs).
  This is achieved through its pre-rendering capabilitites.
  Relics is a hybrid application, with ServerSide Rendering(SSR), Static Site Generation(SSG) and Client Side Fetching.

- ### React/Redux

  Next js under the hood is really just react. Relics Embraces React modern features using Functional components with hooks. 
  Relics also utilises the React-redux ecosystem for state management.

- ### PostgreSQL

  Relics is built with a SQL database - postgreSQL, utilizing
  postgres specific data types such as JSONB

- ### Redis

  Relics uses redis in-memory key:value store for session management.
  See the `redis-session branch`

  The deployed version on heroku utilizes postgres due to heroku's constrain on using the redis addon

- ### Bootstrap 4+

  The site Stlying is based on Twitter Boostrap 4+

- ### SASS/CSS/[CSS Modules](https://github.com/css-modules/css-modules)

  Custom styles are written in Sass with the css module scoping that makes css styles modular and reusable.

- ### Docker (Optional)
  Relics utilizes docker with a docker-compose yaml file to ease development and reduce time spent spinning containers. Just run
  ```bash
    yarn up
   # or
    yarn down
  ```
  to quickly spin up or bring down the postgres db and redis store

## Installation

### Prerequisites

**Make sure you have Node version >= 12.0 and (NPM >= 6 or [Yarn](https://yarnpkg.com) )**

> Clone/Download the repo

```bash
    # SSH
    git clone git@github.com:Mutembeijoe/relics.git
    # or using
    # https
    https://github.com/Mutembeijoe/relics.git

    cd relics

    yarn install
    # or
    npm install


    # After configuring dependacies ie. PostgreSQl and redis, Run
    yarn dev

    # Or is using Docker containers, Run

    yarn up

    # to bring down container

    yarn down


    # to build a production version

    yarn build

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Entity Relationship Diagram

<p align="center">
<img src="https://res.cloudinary.com/myloxyloto/image/upload/v1592080826/Github/relics_ER_udyjue.png" alt="Relics ER Diagram" />
</p>

<p align="center">Ndirangujoe &copy; 2020</p>
