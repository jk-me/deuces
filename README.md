# Deuces

A recreation of the card game Deuces, in a React/Redux web application with a Rails API backend.

This app is now deployed on heroku at [Deuces](https://deuces-card-game.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app is built on the ruby gems listed in the Gemfile, and npm packages listed in client/package.json

### Installing

This app is now deployed on heroku at [Deuces](https://deuces-card-game.herokuapp.com/)

To deploy the app locally, run the following commands in your terminal after cloning this repository to your local environment and navigating to its root directory. You will also need to change the Procfile to work with Foreman, as the current one works with heroku.

```
//Procfile
web: sh -c 'cd client && npm start'
api: bundle exec rails s -p 3001

$bundle install
$rake db:migrate
$cd client && npm install
$cd ..
$rake start
```

Then navigate to localhost:3000 in your web browser.

## Author

* **Jenny Kam**
 [jk-me](https://github.com/jk-me)
 * **Blog:** [deuces](http://jellyjen.com/react_redux_final_project)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
