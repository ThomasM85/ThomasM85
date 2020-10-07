# MatchMeCSS

## Full responsive CSS only Matcher figure snippet

MatchMeCSS is a pretty simple snippet to represent matching relation between to items (person, animals, companies...). It adds animation to illustrate your stories.

It is full responsive and cross-modern-browsers. So enjoy it !

## Demo

Check demos here : https://code.thomas-marget.fr/snippets/matchmecss/.

## Compatibility

Works on all modern browsers.

- HTML 5
- CSS 3 with properties, Flex and Grid modules
- SVG (if you use SVG pictures)

## Usage

- Add stylesheet `./assets/css/matchme.css` into `<head>` of your HTML file
- Add HTML snippet bounded by `<!-- Block snippet starts. -->` and `<!-- Block snippet ends. -->` in your HTML document / component DOM
- Customize content (take a look on next section)
- Optional: Customize CSS to fit with your own design.


## Customization

You (have to) can replace demo content with your own for this 4 elements:

### `.figure__item--first`

First image item.
- Image optimized for the Web (.webp, .svg, .png, . jpg, .gif...)
- Default dimensions : 200px x 200px

### `.figure__item--last`

Last image item.
- Image optimized for the Web (.webp, .svg, .png, . jpg, .gif...)
- Default dimensions : 200px x 200px

### `.figure__link__icon`

Link chip icon.
- Strongly recommanded to include as `<svg>` tag from your favourite svg icons library.
- You can use `<img/>` tag instead.
- Avoid bitmap format.

### `.figure__caption`

Caption of the whole figure.
- Just plain text !

## Animations

MatchMeCSS use 2 kind of preset animations : *beating* and *sliding*.

You can use it in adding `.figure__link--beating` or `.figure__link--sliding` class into `.figure__link` HTML class attribute.

Of course, you can create and add your own custom animations. Sky is the limit !

## Semantics

This snippet was designed for document figure illustration.

By default, it uses `<figure>` and `<figcaption>` semantic tags. Of course, you can replace these by neutral tags like (`div`, `span`) or semantic tags (`p`, ...). Depends from HTML context where you will include it.

Apparence and layout are handled by CSS classes (using BEM). Not by HTML tags.
