# **Get started with PSU's multi-tenant cms model**

Create a site using Next and Drupal or Contentful. The goal of this multi-tenant platform is to offer an on brand and streamlined approach to get a Penn State site up and running quickly. The platform leverages CMS along with Next.js to build a performant site that can be customized to match your departments needs.

[Click here for workflow quick-links & changelog](https://penn-state-web-and-digital.github.io/psu-flex-mono/index.html)

For more app or package specific instructions please refer to the README files inside the associated directory. Some quick links listed below.

## **Included projects with README links**

- Research Discovery - [README.md](apps/psu-research-discovery/README.md)
- Storybook - [README.md](apps/psu-storybook/README.md)
- Global - [README.md](apps/psu-global/README.md)

<br/>

## **_General Usage_**

In root:

**Install project dependencies**

```sh
yarn
```

**Start all applications**

```sh
yarn dev
```

**Build all applications**

```sh
yarn build
```

**Remove node modules in all projects**

```sh
yarn clean-modules
```

<br/>

## **_Example App Usage_**

**Workspace app script pattern**

To run a command on a specific app or package where the app/package name is the name in the corresponding package.json file:

_Note - all workspace commands can be run from any directory_

```sh
yarn workspace [package/app name] [command]
```

<br/>

**Storybook app example**

To start just the storybook app:

```sh
yarn workspace psu-storybook dev
```

<br/>

**Add dependency to app example**

will add a dependency to the @psu-flex/psu-global-ui package

```sh
yarn workspace @psu-flex/psu-global-ui add [some dependency]
```

<br/>

**Generate component example**

To generate a new component and associated story with some boiler plate. The command below will generate a new component in the psu-global-ui package.

```sh
yarn workspace @psu-flex/psu-global-ui generate:component
```

<br/>

## **_Commit message format_**

### **Default formula**

`<type>(optional scope): <description>`

<br />

### **Types**

- API relevant changes
  - **feat** Commits, that adds or remove a new feature
  - **fix** Commits, that fixes a bug
- **refactor** Commits, that rewrite/restructure your code, however does not change any API behaviour
  - **perf** Commits are special refactor commits, that improve performance
- **style** Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- **test** Commits, that add missing tests or correcting existing tests
- **docs** Commits, that affect documentation only
- **build** Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- **ops** Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- **chore** Miscellaneous commits e.g. modifying .gitignore

<br />

### **Breaking Changes Indicator**

Breaking changes should be indicated by an ! before the : in the subject line e.g. feat(api)!: remove status endpoint

- Is an optional part of the format

  <br />

### **Examples**

```
feat: add email notification on form submit
```

```
feat(header): add the amazing button
```

```
feat!: remove ticket list endpoint

refers to JIRA-1337

BREAKING CHANGES: ticket enpoints no longer supports list all entites.
```

```
fix(api): handle empty message in request body
```

```
fix(api): fix wrong calculation of request body checksum
```

```
fix: add missing parameter to service call

The error occurred because of (reasons).
```

```
perf: reduce header api calls
```

```
build: update dependencies
```

```
build(release): `bump version to 1.0.0
```

```
refactor: update RichText node calculation as recursion
```

```
style: adjust padding on FactCard
```

<br />

## **_Useful links_**

Public permalink for any branch deployed sb
<https://{insert-branch-name}--64821f7a7ea081d31324f929.chromatic.com>

Permalink for stackoverflow teams. Used for troubleshooting common issues specific to project.
<https://stackoverflowteams.com/c/psu-flex>

Theory of atomic web development
<https://bradfrost.com/blog/post/atomic-web-design/>

react-hook-form docs
<https://react-hook-form.com/>

react-aria
<https://react-spectrum.adobe.com/react-aria/getting-started.html>

Theme-UI docs
<https://theme-ui.com/getting-started>

<br/>

## **_References_**

### **Turbo docs**

[Turbo Repo](https://turbo.build/repo/docs)

<br/>

### **Contentful Graphiql example url**

<https://graphql.contentful.com/content/v1/spaces/7y2bwuofpora/explore?access_token=yUVIt2coT6B89Q9wsu8AvaVvefTSANNCJsnrzNoBrL8>

\*Add in your space id and access token to connect graphiql to your space api
