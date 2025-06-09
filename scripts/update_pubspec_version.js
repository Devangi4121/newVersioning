const fs = require('fs');
const yaml = require('js-yaml');

const version = process.argv[2];
if (!version) {
  console.error('Usage: node update_pubspec_version.js <version>');
  process.exit(1);
}

const file = 'pubspec.yaml';
const doc = yaml.load(fs.readFileSync(file, 'utf8'));

doc.version = `${version}+1`; // You can modify build number logic if needed

fs.writeFileSync(file, yaml.dump(doc), 'utf8');
console.log(`Updated pubspec.yaml to version ${doc.version}`);
