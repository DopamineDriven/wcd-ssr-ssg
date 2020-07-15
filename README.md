# wcd-ssr-ssg

## Next-TypeScript CheatSheet
- https://www.saltycrane.com/cheat-sheets/typescript/next.js/latest/#next/document
- https://github.com/vercel/next.js/tree/v9.4.4/packages/next
## The Open Graph protocol
- https://ogp.me/
- https://github.com/vercel/og-image
- https://og-image.now.sh/

## MD GUIDE
- https://www.markdownguide.org/basic-syntax/#:~:text=To%20emphasize%20text%20with%20bold,without%20spaces%20around%20the%20letters.

## Content
- remark and remark-html convert md file content into html and pass it down as a prop to the pages
- metadata of every md file is handled by gray-matter and passed as props to the pages

## Tailwindcss
- Purge
    - Tailwind has a purge option which removes unused css
        - this controls the generated stylesheet's filesize 
- Width
    - https://tailwindcss.com/docs/width/
- Height
    - https://tailwindcss.com/docs/height
- Default Spacing Scale
    - https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale

## px vs rem vs tailwind
- source: https://gist.github.com/trevorgreenleaf/0aef4a3c33cdc8011affb170cef4384c

PX|REM|TW
|---|---|---|
4|0.25|1
8|0.5|2
16|1|4
32|2|8
48|3|12
64|4|16
80|5|20
96|6|24
112|7|28
128|8|32
144|9|36
160|10|40
176|11|44
192|12|48
208|13|52
224|14|56
240|15|60
256|16|64
272|17|68
288|18|72
304|19|76
320|20|80
336|21|84


---

### em vs rem
- ephemeral unit vs root ephemeral unit
    - https://www.sitepoint.com/community/t/what-does-em-mean/3482
- em &rarr; ephemeral unit &rarr; relative to the root element's size
- rem &rarr; root ephemeral unit
    - rem uses the root element of the page for its threshold (such as an `<html>` tag)
- https://www.webhostdesignpost.com/webdesign/css-sizing-differences.html


### Next Learn Starter Typescript
- https://github.com/vercel/next-learn-starter/blob/master/typescript-final/package.json


---
## Styling considerations 

- customize font family via 
    - https://tailwindcss.com/docs/font-family/
    - https://stackoverflow.com/questions/60854215/tailwind-use-font-from-local-files-globally
        - https://fonts.google.com/specimen/Great+Vibes?query=great#about
        - https://fonts.adobe.com/fonts/great-vibes#details-section

- in tailwind.config.js
```js
module.exports = {
//
theme: {
    extend: {
        fontFamily: {
            sans: ["great-vibes", "sans-serif"],
            sans: [
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'
            ],
            serif: ['Georgia, Cambria, "Times New Roman", Times, serif'],
            mono: [
                'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            ]
        }
    }
    //
}

```
- then, in styles/index.css
```css
@tailwind base;
@font-face {
    font-family: 'Great Vibes';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Great Vibes'), local('GreatVibes-Regular'), url(https://fonts.gstatic.com/s/greatvibes/v7/RWmMoKWR9v4ksMfaWd_JN9XLiaQ6DQ.woff2) format('woff2');
}
```
- note: might need to modify url to a local path to tailwind; might need to make format `tff` instead of `woff2`...
- going to visit https://fonts.adobe.com/typekit and research overriding default themes in tailwind more thoroughly