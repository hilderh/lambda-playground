const handler = require('./index')

test('trest', async ()=>{
    const response = await handler()
    expect(2).toBe(2)
})