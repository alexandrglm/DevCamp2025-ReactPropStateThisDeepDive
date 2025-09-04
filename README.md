## React Prop State this Deep Dive
#### Forked from https://github.com/jordanhudgens/ReactPropStateThisDeepDive
## Topics Covered

- Props
- React Tools
- State
- `this`
- Functional vs Class components
- Component based architecture
- Code organization

> Provided for the students of the [Bottega Code School](https://bottega.tech/)
---
# DevCamp 2025 Update

- Fork origin moved to ./00-FORK-ORIGIN
- Project/Lessons started from scratch



# Manual Fixes Needed for 2025:

#### 1. Do not update packages
Avoid running `npm i <package>`. This environment is intended to stay on these legacy versions.

#### 2. `npm run start` may fail on many Linux setups with Python 2.x
Because of modern system security hardening, you need to adjust Chokidar watchers:
- Add `CHOKIDAR_USEPOLLING=true`

```json
"scripts": {
    "preinstall": "npm set audit false",
    "start": "CHOKIDAR_USEPOLLING=true webpack-dev-server --config webpack/dev.config.js --watch",