const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
})
 
const config = {}
 
module.exports = createJestConfig(config)
