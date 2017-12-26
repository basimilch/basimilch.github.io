# basimilch.github.io

Informational website of the basimilch cooperative: <http://basimil.ch>

## Dev

This website is done with [Jekyll]. The main steps to run it locally
on your machine are the following:

``` bash
git clone https://github.com/basimilch/basimilch.github.io.git
cd basimilch.github.io
jekyll server --watch --host 0.0.0.0
```

Please read the [Jekyll] documentation to install it on your system.

[Jekyll]: http://jekyllrb.com

### Cloud9 ([`c9.io`]) as IDE

To start coding quickly, we recommend you to use [Cloud9], an extremly handy
online IDE:

1. [Fork this repository] with your GitHub account
1. [Sign up for a Cloud9] account with your GitHub account ([direct link])
1. Go to [your repos on c9.io] and [create a new workspace] for this repo
1. Install [Jekyll] on your workspace with the terminal with following
   command from the [c9.io documentation]:

    ``` bash
    gem install jekyll
    ```
1. Checkout the `dev` branch

    ``` bash
    git checkout -t origin/dev
    ```
1. Start serving the website from your [`c9.io`] account

    ``` bash
    jekyll serve --watch --host $IP --port $PORT --baseurl ''
    ```
1. When your changes are ready, please submit a [pull request].

[Fork this repository]: https://help.github.com/articles/fork-a-repo/
[Cloud9]: https://c9.io
[`c9.io`]: https://c9.io
[Sign up for a Cloud9]: https://c9.io/web/sign-up/free
[direct link]: https://c9.io/auth/github?r=/dashboard.html
[your repos on c9.io]: https://c9.io/account/repos
[create a new workspace]: https://docs.c9.io/docs/setting-up-github-workspace
[c9.io documentation]: https://docs.c9.io/docs/jekyll
[pull request]: https://help.github.com/articles/using-pull-requests/

### Cache busting

To try to ensure that our custom assets (mainly [`javascripts/custom.js`] and
[`css/custom.css`]) are reloaded by the clients when we update them, we add a
query param `?bust={{ site.time | date: '%s' }}`, which has a dynamic value
equal to the linux timestamp of the building time, as described [in this article].

[`javascripts/custom.js`]: javascripts/custom.js
[`css/custom.css`]: css/custom.css
[in this article]: http://tkareine.org/blog/2013/02/22/asset-bundling-with-jekyll/

### File structure

#### Pages

The _order_ of the pages is automatically determined by the alphabetical order
of the files in the folder [`/pages`]. Therefore the filenames are prefixed by a
3 digits number: main pages are numbered with `0x0` and their subpages with
`0xy`.

The _hierarchy_ of the pages is automatically determined by the `permalink`
field in the [front matter] of each file in the folder [`/pages`].

For example, the page defined by the file [`pages/011-statuten.md`], with
`permalink: /genossenschaft/statuten/` in the [front matter], will be under the
page defined by the file  [`pages/010-die-genossenschaft.md`] with
`permalink: /genossenschaft/`.

Additionally, main pages might define a `section-group: main` field to be placed
in the top menu section, like e.g. [`pages/010-die-genossenschaft.md`].

[`/pages`]: https://github.com/basimilch/basimilch.github.io/tree/master/pages
[front matter]: https://jekyllrb.com/docs/frontmatter/
[`pages/011-statuten.md`]: https://raw.githubusercontent.com/basimilch/basimilch.github.io/32b59d5/pages/011-statuten.md
[`pages/010-die-genossenschaft.md`]: https://raw.githubusercontent.com/basimilch/basimilch.github.io/32b59d5/pages/010-die-genossenschaft.md

#### Events

The events page in [`basimil.ch/veranstaltungen`] is defined by the file
[`pages/040-veranstaltungen.md`] using the event data automatically extracted
from the file [`_data/events.yml`]. Therefore, to add a new event, only the file
[`_data/events.yml`] has to be modified to add the event information at the
bottom, using the fields of a previous event as a template.

[`basimil.ch/veranstaltungen`]: http://basimil.ch/veranstaltungen/
[`pages/040-veranstaltungen.md`]: https://github.com/basimilch/basimilch.github.io/blob/master/pages/040-veranstaltungen.md
[`_data/events.yml`]: https://github.com/basimilch/basimilch.github.io/blob/master/_data/events.yml

#### Styling

The styling of the HTML is written in the file [`css/custom.scss`]. Note that
the file is not written in [plain CSS] but in [SCSS] (aka SASS).

[`css/custom.scss`]: https://github.com/basimilch/basimilch.github.io/blob/master/css/custom.scss
[plain CSS]: https://www.w3schools.com/Css/
[SCSS]: http://sass-lang.com/guide

### Documentation and references

- <http://jekyllrb.com>
- <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>
- <http://alanwsmith.com/jekyll-liquid-date-formatting-examples>
- <https://github.com/lokesh/lightbox2/>
- <https://docs.c9.io/docs/>
- <https://docs.c9.io/docs/setting-up-github-workspace>