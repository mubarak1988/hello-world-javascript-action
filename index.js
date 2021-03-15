const core = require('@actions/core');
const github = require('@actions/github');

try {
	
	const ver = core.getInput('version_of_release');
	console.log(`eeeee ${ver}!`);
	core.setOutput("ver", ver);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload2: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
