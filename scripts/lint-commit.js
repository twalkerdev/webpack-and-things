import fs from "fs";
import path from "path";

console.log(process.argv);

console.log(/COMMIT_EDITMSG/g.test(process.argv[2]));

const commitMessageFile = path.join(process.cwd(), ".git", process.argv[2]);

fs.readFile(commitMessageFile, "utf8", (err, data) => {
  // (((?<type>chore|docs|feat|fix|tests)((?<scope>\(([a-z]+)\)))?: )(?<desc>[a-zA-Z][a-zA-z ]+)
  const validTypes = [ "FIX", "FEAT", "DOCS" ];
  console.log(data.toUpperCase().indexOf(`${validTypes[0]}`) === 0);
  console.log(data.split(" ")[0].toUpperCase() === `${validTypes[0]}:`);
});
