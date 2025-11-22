
# 📊 hackGraph

With **hackGraph**, you can make your GitHub profile look like you've been hard at work... even if you haven't. This Node.js script lets you create commits in the past (or the future) to fill your GitHub contribution graph with custom patterns, artwork, or just a lot of green!

## About

**hackGraph** helps you generate commits on your GitHub profile for any date. Whether you want to fill up your contribution graph or create cool designs, hackGraph makes it easy.

## Getting Started

Follow these steps to bring your contribution graph to life:

1. **Clone this repository**
  ```bash
  git clone https://github.com/fenrir2608/hackGraph.git
  cd hackGraph
  ```
2. **Set up your project**
  Initialize a new Node.js project:
  ```bash
  npm init -y
  ```
3. **Install the required npm modules**
  Install all dependencies:
  ```bash
  npm install moment simple-git random
  ```
4. **Create your commit script**
  - Create a JavaScript file to manage your commits.
  - Create a JSON file to store all the commit timestamp data.

## Room for Improvement

So, you've got the basics down. What's next?

- **Custom Patterns:** Experiment with different patterns on your contribution graph. Maybe spell out your name or create some cool designs.
- **Density Control:** Play around with the number of commits per day to adjust the shades of green.
- **Input Strings:** Convert input strings to X-Y mapped contributions.

## npm Modules Used

- [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
- [`simple-git`](https://www.npmjs.com/package/simple-git) - For easy Git commands.
- [`random`](https://www.npmjs.com/package/random) - To generate random numbers for the commits.

## Credits

Huge thanks to [Akshay Saini](https://github.com/akshaymarch7) and [homyorke](https://github.com/fenrir2608) for the original inspiration behind this project.
