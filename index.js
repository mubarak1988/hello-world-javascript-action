const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
const fs = require('fs');

// Get document, or throw exception on error
try {
console.log('testingggg');
	const doc = yaml.load(fs.readFileSync('release.yml', 'utf8'));
	
	// const version = core.getInput('version_of_release');
	// console.log(`Hello ${version}!`);
	core.setOutput("ver", doc);
	console.log(doc);
} catch (e) {
	console.log(e);
}


// try {
// 	// `who-to-greet` input defined in action metadata file
// 	const nameToGreet = core.getInput('who-to-greet');
// 	console.log(`Hello ${nameToGreet}!`);
// 	const time = (new Date()).toTimeString();
// 	core.setOutput("time", time);
// 	// Get the JSON webhook payload for the event that triggered the workflow
// 	const payload = JSON.stringify(github.context.payload, undefined, 2);
// 	console.log(`The event payload: ${payload}`);

// 	const version = core.getInput('version_of_release');
// 	console.log(`Hello ${version}!`);
// 	core.setOutput("ver", version);
// } catch (error) {
// 	core.setFailed(error.message);
// }


