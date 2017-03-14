## Bugs
- [ ] Scroll to top on route change

## Code Quality
- [ ] Remove `prose` wrapper from pages - only wrap prose parts
- [ ] Better naming convention for colour variables

## HTML
- [ ] Tidy index.html
- [ ] Minification

## CSS
Stylint with config
Review Stylint options for personal preference
Review Autoprefixer
Review browserslist
Clean CSS https://www.npmjs.com/package/clean-css-cli (see #problems)
Clean CSS config
Responsive Grid? vs stage
Stylus sourcemaps - remove CSS from component
Check sourcemaps work post-minification

## JS
Review minification - Uglify or similar?
jsInspect for code duplication
No Modernizr? Use @supports + custom js init classes

# Other
Versionator or similar
Favicon and meta assets in root?
Test coverage

# Github
CONTRIBUTING, HISTORY, PR TEMPLATE etc
Licence file
README

# In-project
Stylus Boilerplate
.gitignore
.editor…
other dotfiles


# Problems
Using stylus built-in compression as CleanCSS and CSSNano won't work with postStylus on the CLI (async). Options are to  move to JS, or find a way to compress during Stylus' watch command.
Tried:
  postbuild:css script failed as it doesn't fire after each watched stylus change - technically build:cssnever finishes when watching
  Not using Stylus' watching, but instead using nodemon to detect stylus changes and trigger a non-watching build:css/postbuild:css. Worked, but was slow
  Piping output to cleanCSS from Stylus without writing to disk first, so cleanCSS can optimise then save. promising, but broke sourcemaps as stylus doesn't create them unless saving the CSS itself
For reference:
`"postbuild:css": "cleancss --source-map build/assets/css/index.css -o build/assets/css/index.min.css",` with `clean-css-cli` installed
