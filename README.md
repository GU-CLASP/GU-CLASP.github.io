# README

## Editing/Adding people

TODO...

## Editing/Adding events

TODO...

## Developing this web site

This web site uses standard [Github Pages](https://docs.github.com/en/pages) functionality with [Jekyll](https://jekyllrb.com/)
and the [Liquid](https://shopify.github.io/liquid/) syntax.

In short, we're using Ruby at the bottom with the framework Jekyll to generate a static html site. All the coding is done either in either in html with liquid or markdown. See source files in this repo for examples.

If you want to make substantial changes to this web site by adding pages or
editing css, you will want to build and test locally before pushing your code.

### Preparing your system

It's best to make changes in a different branch. Create a new branch for your dev work.

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

If you are happy with the changes you've made, commit them to your `dev` branch:

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
