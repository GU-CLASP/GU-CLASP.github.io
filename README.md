# README

## Editing/Adding people

TODO...

## Editing/Adding events

TODO...

## Developing this web site

This web site uses standard [Github Pages](https://docs.github.com/en/pages) functionality with [Jekyll](https://jekyllrb.com/)
and the [Liquid](https://shopify.github.io/liquid/) syntax.

In short, we're using Ruby at the bottom with the framework Jekyll to generate a static html site. All the coding is done either in html with liquid or markdown. See source files in this repo for examples.

If you want to make substantial changes to this web site by adding pages or
editing css, you will want to build and test locally before pushing your code.

### Preparing your system

It's best to make changes in a different branch. If you want to do your work in a separate `dev` branch, do:

```(bash)
git checkout -b dev
```

First, make sure to [install Jekyll](https://jekyllrb.com/docs/installation/)

To build the site and start a local testing server:
```(bash)
bundle exec jekyll serve
```

Got to [http://127.0.0.1:4000](http://127.0.0.1:4000) to see the web site.

When you build the web site, a new dir is created called `_site`. This is ignored in `.gitignore`.
It only contains static html files.

Each time you edit and save a file, the web site is automatically regenerated, so no need to restart the server in between.

### Committing changes

You've tested your changes locally and now want to commit and push your changes. First, check which branch you are using:

```(bash)
git branch
```

#### If you made your changes in 'main'

If you didn't create a `dev` branch, but made your changes in `main`, the procedure is slightly simpler.
```(bash)
git add .
git commit "write something informative here"
git pull --rebase  # rebase your changes against any possible changes at remote
git push origin main
```

#### If you made your changes in 'dev'

First commit your changes:

```(bash)
git add .
git commit -m "write something informative here"
```

Then, make sure you pull the latest changes from `main`:
```(bash)
git checkout main
git pull origin main
```

Rebase your commit in `dev` so it ends up being on top of everything else:
```(bash)
git checkout dev
git rebase main
```

Finally merge to main and push your changes:
```(bash)
git checkout main
git merge dev
git push origin main
```

After changes are pushed it takes a couple of minutes before the web site is rebuilt and published.

### Docs

* [Github Pages](https://docs.github.com/en/pages)
* [Jekyll](https://jekyllrb.com/docs/installation/)
* [Liquid](https://shopify.github.io/liquid/)
