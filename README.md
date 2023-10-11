# Gatsby (Wordpress as CMS)


## Getting Started:

**Setup**

> `npx gatsby new the-gatsby-garadge https://github.com/tomphill/gatsby-wordpress-gutenberg-starter`

> **Install the gatsby cli**

> `npm install -g gatsby-cli`


**Running the dev server**

> `gatsby develop`


#### Routes:

- In `/src/pages` any file we create will automatically be a route.
- By default our home page will be `index.js` in `/src/pages`

```js
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

```
- In our version the h1 will not appear as large text because of the tailwind resets.


---
---
