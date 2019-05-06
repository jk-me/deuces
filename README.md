# Deuces

A recreation of the card game Deuces, in a React/Redux web application with a Rails API backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app is built on the ruby gems listed in the Gemfile, and npm packages listed in client/package.json

### Installing

To deploy the app, run the following commands in your terminal after navigating to the root directory of this repository. You will need to run npm install in the client directory as well.

```
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
