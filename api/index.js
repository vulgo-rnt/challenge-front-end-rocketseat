const { execSync } = require("node:child_process");
try {
  execSync("npm run start");
} catch (err) {
  execSync("npm i");
  execSync("npm run start");
}
