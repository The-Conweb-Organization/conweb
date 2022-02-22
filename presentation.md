## Gatsbyjs

- what is gatsbyjs (Gatsby Core Philosophy)

  - react framework
  - static site generator
  - used for dynamic content
  - building web apps, portfolio, high-traffic e-commerce store

### Core Concepts

- **Building with react components**
- **GraphQL concepts**
- **Image optimizations**
- **The Gatsby build process**
- **Plugins, Themes and Starters**
- **Data fetching**
- **Rendering options**
- **React hydrations**

### Building with react components

    - Modularity, reusability, clear abstractions
    - open source, tutorials and tooling
    - behave like a normal React application
    - Page components
      - components under `src/pages` become pages
      - e.g. `src/pages/blog.jsx` is mapped to mysite.com/blog
    - Page Templates
      - create pages programmatically
      - query data with page queries using graphql
      - used in combination with `gatsby-node.js` config file and `createPages()` function
    - Html Components
      - responsible for everything other than where Gatsby lives in `<body />`
      - modifying `<head />` with metadata, general data of the document and external links
      - you should omit this because:
        - default `html.js` file will suffice
        - better using `gatsby-ssr.js` config file or
        - for including metadata `gatsby-react-helmet` plugin
    - Non-page components
        - components that are embedded inside other components
        - forming a component hierarchy
        - using GraphQL to declare data

### GraphQL Concepts

    - many options for loading data into React components
    - most popular and powerful of these is `GraphQL`
    - was invented at Facebook to help engineers pull data in React components
    - is a query language hence the 'ql' in GraphQL
    - using 'page queries' for pulling data into page components or
    - using `useStaticQuery` hook or `StaticQuery` component for Non-page components
    - using `page query` for page components
      - can used with variables to get certain data
      - can only used in page components or suitable locations
    - eliminate frontend data boilerplate; just asking for data with GraphQl and it'll show up when you need it
    - Gatsby uses source plugins to pull data to the GraphQL schema
    - you should use `createResolvers` function to add custom field resolvers to the GraphQL schema
    - Gatsby expose its internal data store and query capabilities to GraphQL field resolvers on `context.nodeModel`
    - push frontend complexity into queries
    - many transformations can be done at build-time
    - perfect for querying complex or nested data
    - improving performance by removing data bloat. Selecting only the data you need, not whatever an API returns

### Image Optimizations _(Image Plugin Architecture)_

    - avoid hydration lag for React apps ('catch-22 dilemma')
      - server rendering during build process rather than when user is loading the page
      - Gatsby site return HTML immediately without waiting for server rendering
      - Client's browser can start loading images as soon as it receives the HTML
    - importance of loading critical and **non-critical** images
      - using lazy loading
        - can be done from development teams but it might be out of control depending where the image coming from (e.g. coming from a cms)
        - almost 30% of users are on browsers that don't support it
        - Gatsby generates native components for use in browsers through leveraging the `IntersectionObserver` API
      - Image placeholders
        - progressive images cause users to perceive a faster page load
        - deliver gentler and more gradual experience
        - non jarring switch from empty background to present image
      - Hold position, prevent reflow
        - preventing 'browser reflow' when image appears next to next, bumping the text to the right or above text, bumping it below
        - avoid appearing images from blank background to fully there
        - Gatsby Image's hold spot form images automatically when specify width prop
        - provide a blurred background, background color or tracedSVG while image loads
      - cropping and resize images if you use the width prop
      - generating 'responsive images' for different device sizes
      - better compression
        - WebP image
        - AVIF image format

### The Gatsby Build Process

    - Two modes for compiling a site:
      - Devlop - run with `gatsby develop`
        - doesn't perform some of the production build steps that the `gatsby build` command does
        - It starts up a development server that you can use to preview your site in the browser
      - Build - run with `gatsby build`
        - when run `gatsby build` command there won't be a browser available
      - build time vs. runtime
        - runtime:
          - processes that happen in web browser that you click through and interact with can be referred to as browser runtime
            - accessing browser APIs like the window object
            - information from page's url
            - injecting markup dynamically into dom
        - build time:
          - refers to process of using server to compile site to files
            - can be delivered to web browser later
            - `window` object aren't available at that time
            - after successful build you get a public folder that can be deployed
            - with `gatsby serve` command you can test the output
        - runtime and build time shares many similarities except:
          - `gatsby build`:
            - delete previous html and css files
            - invoke post bootstrap process like generating image thumbnails, bundle JavaScript and CSS or building static HTML for pages

### Plugins, Themes, Starters _(Theme Shadowing)_

    - In Gatsby there's more than one way to build a site.
    - Differences between plugins, themes, starters
    - Plugins:
      - Gatsby's plugin layer includes a wide variety of common website functionality like 'source plugins', responsive images etc.
      - As a general rule:
        - any npm package you might use while working on JavaScript or React application can also be used with a Gatsby application
        - Even when plugins are helpful, they are always optional
      - Types:
        - plugins that have the word 'source' in the plugin's name are referred to source plugins e.g. `gatsby-source-contentful`
          - 'source' data from remote or local locations into what Gatsby calls nodes.
          - at a high-level:
            - ensures local data is synced with its source and is 100% accurate
            - creates nodes with media types, human-readable types and contentDigests
            - links nodes and create relationships between them
        - plugins that have the word 'transformer' in the plugin's name are referred to transformer plugins e.g. `gatsby-transformer-remark`
        - generic plugins e.g. `gatsby-plugin-sharp`
        - at a high-level:
          - 'transform' data of one type into another type
          - you'll use both source plugins and transformer plugins in Gatsby site
          - this loose coupling between data source and transformer plugins allow assemble complex data transformation pipeline with little work
      - Themes:
        - Gatsby themes are a type of plugins
          - that includes a `gatsby-config.js` file
          - adds pre-configured functionality
          - data sourcing
          - and/or UI code
          - can packaged and distributed through registry like npm or yarn
          - versions can be updated through a site's `package.json` file
          - all default configurations (shared functionality, data sourcing, design) is abstracted out of your site into an installable package
      - Starters:
        - a boilerplate which you can use as a starting point for your Gatsby site
        - once modified, a starter maintains no connection to its source

### Data Fetching

    - Gatsby can fetch data at both build time and runtime
    - It's capable of generating content at build time as well as making calls to external services at runtime
    - you can make advantage of the benefits of static content as well as dynamic content
    - It is possible through React hydration which it means that Gatsby (through React.js) builds static files to render server-side
    - Gatsby downloads and execute its script bundle, preserves the HTML and turns the site into a full React web app
    - Compiling pages at build time is useful when content won't change often, whereas some websites with more dynamic needs require a client-side runtime

### Rendering Options

    - Rendering defines the stage which your page's user-facing HTML is generated
    - It can happens:
      - At build time (SSG static side generation or pre-rendering)
        - default rendering mode in Gatsby
        - While the word 'static' in it, it doesn't mean boring or lifeless
        - The entire site is pre-rendered into HTML, CSS and JavaScript at build time
        - It then get served as static assets to the browser
        - SSG serves website to users in the fastest possible way
        - The produced static files are uploaded to the content delivery network (CDN) provider
        - Downside of SSG is a longer build times
        - As the number of your site grows, so does the build time
        - Gatsby supports incremental builds using caching
      - During HTTP requests (SSR server-side rendering)
        - Generate HTML on-the-fly
        - Content is rendered and served to a sites visitor at runtime
        - a portion of the build process happens on each page request
        - It provides the latest versions of content directly from the server
      - Locally in the browser with JavaScript (client-side rendering)
      - Defer building certain pages until the first time a user requests (DSG deferred static generation)
        - It is conceptually very similar to SSG
        - The difference is that developers can choose to defer building certain pages until it's requested for the first time
        - DSG gives developers greater control over their site's build time

### React Hydration

    - One central idea of Gatsby is that HTML content is statically generated using ReactDOM server-side API
    - Another key feature is that static HTML content can be enhanced with client-side JavaScript via React hydration
      - `hydrate()` method is called internally by Gatsby from ReactDOM
      - Same as `render()`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer
      - Browser can 'pick up' where the server left off with the contents in the `/public` folder and render the site in the browser like any other React app
