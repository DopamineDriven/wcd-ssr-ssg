# wcd-ssr-ssg

## The Open Graph protocol
- https://ogp.me/
- https://github.com/vercel/og-image
- https://og-image.now.sh/

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
---|---|---|
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