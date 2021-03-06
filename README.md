# Deuces

A recreation of the card game Deuces, in a React/Redux web application with a Rails API backend.

The updated application has been deployed on [Heroku](https://deuces-card-game.herokuapp.com/)

This repository is deprecated, but can still be run locally from one repo using the instructions below.

The updated frontend and backend repositories for this project are available at [Frontend (git)](https://github.com/jk-me/deuces-front) and [Backend (git)](https://github.com/jk-me/deuces-back)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app is built on the ruby gems listed in the Gemfile, and npm packages listed in client/package.json

### Installing

To start this application on a local server, run the following commands in your terminal after cloning this repository to your local environment and navigating to its root directory.

This method will use the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

```
$ bundle install && cd client && npm i && cd ..
$ heroku local -f Procfile.dev
```

Then navigate to localhost:5000 in your web browser.

## Author

* **Jenny Kam**
 [jk-me](https://github.com/jk-me)
 * **Blog:** [deuces](https://jk-me.github.io/react_redux_final_project)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
