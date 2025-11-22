import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";


const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();
  // Pick a random day within the last 365 days
  const daysAgo = random.int(0, 364);
  const date = moment().subtract(daysAgo, "days").format();
  // Write a unique value to data.json
  const data = {
    date: date,
    value: Math.random().toString(36).substring(2) // unique random string
  };
  console.log(`Committing for date: ${date}`);
  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(`Commit for ${date}`, { "--date": date }, makeCommits.bind(this, --n));
  });
};

makeCommits(200);
