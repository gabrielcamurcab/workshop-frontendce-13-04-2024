const nextJest = require('next/jest.js')
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

module.exports = createJestConfig(config)
