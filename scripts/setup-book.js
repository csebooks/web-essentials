const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../../");
const targetDir = path.join(rootDir, "gurukulams-book");

if (!fs.existsSync(targetDir)) {
  console.log("Cloning gurukulams-book...");
  execSync("git clone https://github.com/techatpark/gurukulams-book.git", {
    cwd: rootDir,
    stdio: "inherit",
  });
} else {
  console.log("gurukulams-book already exists. Pulling latest changes...");
  execSync("git pull", { cwd: targetDir, stdio: "inherit" });
}
