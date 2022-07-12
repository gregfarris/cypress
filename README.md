# Team Days Cypress

In our session we are going to work on developing a set of confidence tests 

**Table of Contents**

[[_TOC_]]

## Prerequisites

**Node**

Node.js and npm should be [installed](https://nodejs.org/en/download/).
```
node -v
npm -v
```

**Cypress IDE Extensions & Plugins**

IntelliJ or VS Code is highly suggested, they both of good integration with cypress.  
Review the [Extensions-Plugins](https://docs.cypress.io/guides/tooling/IDE-integration#Extensions-Plugins)

## Getting Started

We will create a set of tests for the search features in [ICPSR](https://www.icpsr.umich.edu/).

Create and new directory for out project
```
mkdir cypress-tests
```

Now Initialize our node project.  You can take all of the defaults.
```
cd cypress-tests
npm init -y
```

Now install cypress and open up the interactive runner
```
npm install cypress --save-dev

npx cypress open
```

Cypress has sample tests pre-loaded but we will not use these so in the runner window "No thanks, delete example files". Create your first test file, find-head-start.js

## Head Start Study Page Test

Find the _Head Start ICPSR 4134_ and view the study page.

- visit site (https://www.icpsr.umich.edu/)
- find search input
- type "Head Start"
- verify search results
- navigate to the study page
- verify tabs


**Notes**
- [Select Elements Best Practices](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
- [Selecting Elements](https://filiphric.com/cypress-basics-selecting-elements)
- [Chrome Security](https://docs.cypress.io/guides/guides/web-security#Disabling-Web-Security)
- [Selector Playground](https://docs.cypress.io/guides/core-concepts/test-runner#Selector-Playground)
- [Select Elements Best Practices](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
- [Common-Assertions](https://docs.cypress.io/guides/references/assertions#Common-Assertions)








