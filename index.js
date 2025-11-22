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
  // Pick a random number of commits for this day (1-10)
  const commitsToday = random.int(1, 10);
  let commitsDone = 0;

  const commitForDay = () => {
    if (commitsDone >= commitsToday) {
      // Move to next day/iteration
      makeCommits(n - 1);
      return;
    }
    // Write a unique value to data.json
    const data = {
      date: date,
      value: Math.random().toString(36).substring(2) + '-' + commitsDone // unique random string
    };
    console.log(`Committing for date: ${date} (commit ${commitsDone + 1} of ${commitsToday})`);
    jsonfile.writeFile(path, data, () => {
      simpleGit().add([path]).commit(`Commit for ${date} #${commitsDone + 1}`, { "--date": date }, () => {
        commitsDone++;
        commitForDay();
      });
    });
  };

  commitForDay();
};

makeCommits(200);
