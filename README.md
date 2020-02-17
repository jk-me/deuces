# Deuces

A recreation of the card game Deuces, in a React/Redux web application with a Rails API backend.

This repository is deprecated, but can still be deployed locally from one repo using the instructions below. [Old Heroku App](https://deuces-card-game-old.herokuapp.com/)

The updated frontend and backend for this project is available at [Frontend Github](https://github.com/jk-me/deuces-front) and [Backend Github](https://github.com/jk-me/deuces-back)

The updated application has been deployed at [Heroku](https://deuces-card-game.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app is built on the ruby gems listed in the Gemfile, and npm packages listed in client/package.json

### Installing

To start this application on a local server, run the following commands in your terminal after cloning this repository to your local environment and navigating to its root directory.

This method will use the heroku CLI.

```
$ bundle install
$ cd client && npm i
$ heroku local -f Procfile.dev
```

Then navigate to localhost:5000 in your web browser.

## Author

* **Jenny Kam**
 [jk-me](https://github.com/jk-me)
 * **Blog:** [deuces](https://jk-me.github.io/react_redux_final_project)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
