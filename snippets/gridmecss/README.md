# GridMeCSS

## Full responsive CSS only Grid snippet

GridMeCSS is a pretty simple snippet to organize pictures and cards into a responsive grid layout. It adds sweet feeds to illustrate your stories.

It is full responsive and cross-modern-browsers. So... enjoy it !

## Demo

Check demos here : https://code.thomas-marget.fr/snippets/gridmecss/.

## Compatibility

Works on all modern browsers.

- HTML 5
- CSS 3 with properties and Grid modules

## Usage

- Add stylesheet `./dist/assets/css/gridme.min.css` into `<head>` of your HTML file
- Add HTML snippet bounded by `<!-- Block snippet starts. -->` and `<!-- Block snippet ends. -->` in your HTML document / component DOM
- Customize content (take a look on next section)
- Optional: Customize CSS to fit with your own design.

## Customization

### Grid as pictures gallery

You (have to) can replace demo content with your own for this 3 elements:

#### `.gridme__gallery__linkbox`

Gallery image link.
- Image optimized for the Web (.webp, .svg, .png, . jpg, .gif...) URL
- Default dimensions : as you wish

#### `.gridme__gallery__caption`

Gallery image caption.
- Just plain text !

#### `.gridme__gallery__media`

Gallery image thumbnail.
- Image optimized for the Web (.webp, .svg, .png, . jpg, .gif...)
- Default dimensions : 300px x 300px

### Grid as cards feed

You (have to) can replace demo content with your own for this 5 elements:

#### `.gridme__card__title`

Card title.
- Just plain text !

#### `.gridme__cta`

Card CTA link.
- A simple URL !

#### `.gridme__cta__label`

Card CTA label.
- Just plain text !

#### `.gridme__card__cover__media`

Card image thumbnail.
- Image optimized for the Web (.webp, .svg, .png, . jpg, .gif...)
- Default dimensions : 450px x 300px

#### `.gridme__card__desc`

Card description.
- Just plain text !

## Optimization

You can use HTML `<picture>` tag or `srcset` attribute to serve optimized medias for different width of viewport.

## CSS properties

You can customize CSS properties with your own or add extra ones. Take a look in `./src/scss/**/*` folders then, do your stuff and compile with SASS.

- `--color1`: Text color (default: `#fff`)
- `--color2`: Stroke color (default: `#ff0066`)
- `--color3`: Stroke color (default: `#bbe004`)
- `--gridRatio`: Grid item ratio base (default: `15rem`)

## Semantics

Apparence and layout are handled by CSS classes (using BEM). Not by HTML tags.

### Grid as pictures gallery

This snippet was designed for document picture gallery.

By default, it uses `<article>` and `<h2>` semantic tags. Of course, you can replace these by neutral tags like (`div`, `span`) for the card or `<hn>` tags (`h3`, `h4`, ...). Depends from HTML context where you will include it.

### Grid as cards feed

This snippet was designed for document cards feed.

By default, it uses `<article>` and `<h2>` semantic tags. Of course, you can replace these by neutral tags like (`div`, `span`) for the card or `<hn>` tags (`h3`, `h4`, ...). Depends from HTML context where you will include it.
