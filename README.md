# duckduckgo-news

## What is this?
Simple Node bot to gather, update and generate a twitter feed based on DuckDuckGo's (pretty awesome) news feed.

## What's it do?
It runs as a process, and constantly pings/watches the REST API endpoint for news, only publishing new news when it's provided. Would be great for a twitter feed, right?

## Dependencies
1. Node
2. NPM

## How to run
1. `npm install`
2. Make sure your Twitter API keys are in the proper place in the [index](https://github.com/streetlight/GooseGooseStop-news/index.js) file.
2. `node .`

## License
Inspired by their other licenses, DuckDuckGo News is distributed under the Apache 2.0 [license](https://github.com/streetlight/GooseGooseStop-news/LICENSE).
