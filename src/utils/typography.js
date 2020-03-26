import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

/**
 * Typography.js is a JavaScript library that allows you to explore the typographic design of your website and 
 * define beautiful custom and pre-existing typographic themes.
 * It enables you to change the font on your website with ease. Typography.js currently maintains over 30 themes for you to use.
 * https://github.com/KyleAMathews/typography.js/commit/49363c455d931f2fceaf7b7594c2c5159c1dc416
 */

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
/**
 * Typography.js provides an alternative in
the form of a new dynamic unit called `rhythm`.  This is taken from the
`line-height`. One `rhythm` equals one `line-height`. When you change
your line-height, every other spacing in your site will respond in turn.
 */
export const scale = typography.scale
/**
 * So if the scale 'ratio' is '2' (the default value) and the base font size is '16px' the 'h1'
font size will be `32px`.  If you decide to change the scale ratio to
`2.25`, the h1 is now set to `36px`. When building a site with
Typography.js, all sizes should be set using a scale value so all
non-base-font-size text can be resized together.
 */
