// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
  browser
  .url(process.env.VUE_DEV_SERVER_URL+"#/list")
  .waitForElementVisible('#app', 5000)
  .assert.elementPresent('.types')
  .assert.elementCount('img', 152)
  .assert.elementCount('.description', 151)
  .end()
}
}
