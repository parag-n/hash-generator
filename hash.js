const { createHash } = require("node:crypto");

const hash = createHash('sha1');

hash.update('parag');

console.log(hash.digest('hex'));