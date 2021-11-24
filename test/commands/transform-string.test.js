const {expect, test} = require('@oclif/test')

describe('transform-string', () => {

  test
  .stdout()
  .command(['transform-string', '-o', 'jeff'])
  .it('runs option -o jeff', ctx => {
    expect(ctx.stdout).to.contain('option jeff')
  })
})
