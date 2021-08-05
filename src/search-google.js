#!/usr/bin/env node

// Raycast Script Command Template 
// Dependency: This script requires Nodejs.
// Install Node: https://nodejs.org/en/download/
//
// Duplicate this file and remove ".template" from the filename to get started.
// See full documentation here: https://github.com/raycast/script-commands
//
// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Google Search
// @raycast.mode silent
// @raycast.packageName Everyday automation
//
// Optional parameters:
// @raycast.icon https://cdn.iconscout.com/icon/free/png-256/google-231-432517.png
// @raycast.argument1 { "type": "text", "placeholder": "query" }
// @raycast.argument2 { "type": "text", "placeholder": "reddit, stackoverflow, etc", "optional": true}
//
// Documentation:
// @raycast.description Searches google with an optional site query
// @raycast.author Iury Souza
// @raycast.authorURL twitter.com/iurysza

/*

	ABOUT THIS TEMPLATE:

	This template is meant to be a quick starting point for creating a script command using Nodejs.

	This template demonstrates the following ideas:

	* Extracting passed arguments.
	* Using both required and optional arguments
	* URI Encoding
	* Outputting result to Raycast
	* Opening a url using exec and the unix open command
	* Use of destructuring
	* Use of template literals

*/
const {exec} = require('child_process')

// Use destructuring to grab arguments.
// Use slice to start from position 3.
let [query, site] = process.argv.slice(2)
let uriComponent
if (site) {
    uriComponent = `${query} sites: ${site}.com`;
} else {
    uriComponent = query;
}
let suffix = `&aqs=chrome..69i57.718j0j7&sourceid=chrome&ie=UTF-8`;
let uri = `https://www.google.com/search?q=${encodeURIComponent(uriComponent)}${suffix}`

// console.log() displays output in fullOutput mode.
// console.log(`The arguments are: \n   ${process.argv.join('\n   ')}\n`)
// console.log(`Your query is "${query}"`)
// console.log(`Your site is "${site}"`)
// console.log(`Your query uri encoded is "${encodeURIComponent(site)}"`)
// console.log(`The uri is "${uri}"`)

// Uncomment the exec line below to open this query in your web browser.
// Use double quotes around the uri to avoid processing issues.
exec(`open "${uri}"`)
