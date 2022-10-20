const { sum, ErrorThrower } = require('./tests-helpers');

test('sum 3 + 3 = 6', () => {
  expect(sum(3, 3)).toBe(6);
})

test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
})

test('null value', () => {
  const n = null;
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

describe('Number operations', () => {
  test('numbers', () => {
    const value = 2 + 3;

    expect(value).toBeGreaterThan(4)
    expect(value).toBeLessThan(6)
    expect(value).toBeLessThanOrEqual(5)
    expect(value).toBeGreaterThanOrEqual(5)

    // toBe і toEqual еквівалентні для чисел
    expect(value).toBe(5);
    expect(value).toEqual(5);
  })

  test('float numbers', () => {
    const value = 0.1 + 0.5;

    expect(value).toBeCloseTo(0.6);
  })
})

test('there is no I in work', () => {
  expect('work').not.toMatch(/I/)
})

test('there is er in cyberpunk', () => {
  expect('cyberpunk').toMatch(/er/)
})

test('the department list has Nodejs in it', () => {
  const departments = [
    'HR',
    'IT',
    'Nodejs',
    'Python'
  ];

  expect(departments).toContain('Nodejs')
  expect(departments).not.toContain('Ruby')
})

test('Errors', () => {
  expect(() => ErrorThrower()).toThrow(Error)
  expect(() => ErrorThrower()).toThrow()

  // Error message
  expect(() => ErrorThrower()).toThrow(/!/)
})

describe('user create', () => {
  const user = {
    firstname: 'Five',
    lastname: 'Philips',
  }

  const users = [
    {
      firstname: 'Five',
      lastname: 'Philips',
    },
    {
      firstname: 'Bottle',
      lastname: 'Vinga',
    }
  ]

  test('create user', () => {
    expect(user).toEqual(
      expect.objectContaining({
        firstname: expect.any(String),
        lastname: expect.any(String)
      })
    )
  })

  test('Array contains users objects', () => {
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          firstname: expect.any(String),
          lastname: expect.any(String)
        })
      ])
    )
  })
})
