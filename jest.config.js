module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~~/(.*)$': '<rootDir>/$1'
  },

  moduleFileExtensions: ['js', 'json', 'vue'],

  collectCoverageFrom: ['src/**/*.{js,vue}']
}
