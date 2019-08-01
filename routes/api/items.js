const express = require('express')
const router = express.Router()

// Item Modal
const Item = require('../../models/item')

// @route GET api/items
// @desc  GET All items 
// @access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({
      date: -1
    })
    .then(items => res.json(items))
})

module.exports = router