
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./chakra-dayzed-datepicker.cjs.production.min.js')
} else {
  module.exports = require('./chakra-dayzed-datepicker.cjs.development.js')
}
