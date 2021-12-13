module.exports = {
  plugins: [
    {
      name: 'preset-default',
      overrides: {
        removeViewBox: false
      }
    },

    {
      // Couldn't get name: "removeAttrs" to work with xml:space, so
      // https://github.com/svg/svgo/issues/1283#issuecomment-782358666
      name: 'removeXmlSpace',
      type: 'perItem',
      fn: (item) => {
        if (item.hasAttr('xml:space')) {
          item.removeAttr('xml:space')
        }
      }
    },

    // Don't remove class. Will make Hiper card lose 3 letters.
    // Mir will have a className that will need to be removed after svgr.
    // {
    //   name: 'removeAttrs',
    //   params: {
    //     attrs: "(class)"
    //   }
    // },


    // enable builtin plugin not included in default preset
    'prefixIds',
    'removeXMLNS',
    'convertStyleToAttrs',
    'removeDimensions'
  ],
};