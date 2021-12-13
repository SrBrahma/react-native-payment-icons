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
      name: 'removeXlinkHref',
      type: 'perItem',
      fn: (item) => {
        if (item.hasAttr('xml:space')) {
          item.removeAttr('xml:space')
        }
      }
    },

    {
      name: 'removeAttrs',
      params: {
        attrs: "(class)"
      }

    },


    // enable builtin plugin not included in default preset
    'prefixIds',
    'removeXMLNS',
    'convertStyleToAttrs',
    'removeDimensions'
  ],
};