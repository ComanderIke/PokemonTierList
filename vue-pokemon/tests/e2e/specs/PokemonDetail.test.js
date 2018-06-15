// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
  browser
  .url(process.env.VUE_DEV_SERVER_URL+"#/detail/Magnemite")
  .waitForElementVisible('#app', 5000)
  .assert.elementPresent('.types')
  .assert.elementCount('.types', 2)
  .assert.elementCount('.resistant', 12)
  .assert.elementCount('.weaknesses', 3)
  .end()
}
}
