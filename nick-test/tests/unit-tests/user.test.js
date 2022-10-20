const axios = require('axios');

describe('User testing', () => {
  const createUser = jest.fn();
  let user;

  beforeEach(() => {
    createUser.mockReset()
  })

  test('Create user test', async () => {
    const data = {
      firstname: 'test',
      lastname: 'test1'
    }
    const res = await axios.post('http://localhost:3000/users/create', data)
    user = res.data.data;

    const outputData = {
      code: 0,
      data: { ...data, id: expect.any(Number) },
      message: 'success',
    }

    expect(res.data).toEqual(outputData);
    expect(res.status).toBe(200);
    expect(res.statusText).toBe('OK')
    expect(res.config.method).toBe('post')
    expect(res.request.path).toBe('/users/create')
  })

  test('Get users', async () => {
    const res = await axios.get('http://localhost:3000/users');

    const objectOutput = {
      id: expect.any(Number),
      firstname: expect.any(String),
      lastname: expect.any(String),
    }

    expect(res.status).toBe(200);
    expect(res.statusText).toBe('OK');
    expect(res.request.path).toBe('/users')
    expect(res.data).not.toBeUndefined()
    expect(res.data).toEqual(
      expect.objectContaining({
        code: 0,
        data: expect.arrayContaining([
          expect.objectContaining(objectOutput)
        ]),
        message: 'success'
      })
    )
  })

  test('Get one user by id', async () => {
    const res = await axios.get(`http://localhost:3000/users/${user.id}`);

    const userDataOutput = {
      code: 0,
      data: {
        id: user.id,
        firstname: expect.any(String),
        lastname: expect.any(String),
      },
      message: 'success',
    };

    expect(res.data).toEqual(userDataOutput)
    expect(res.data).toBeDefined()
    expect(res.request.path).toBe(`/users/${user.id}`)
    expect(res.statusText).toBe('OK')
    expect(res.status).toBe(200)
  })

  test('Update user', async () => {
    const body = {
      firstname: 'Updated',
      lastname: 'User',
    };

    const res = await axios.patch(`http://localhost:3000/users/${user.id}`, body);

    const objOutput = {
      code: 0,
      data: {
        id: user.id,
        ...body,
      },
      message: 'success',
    }

    expect(res.data).toEqual(objOutput)
    expect(res.data).toBeDefined()
    expect(res.status).toBe(200)
    expect(res.statusText).toBe('OK')
    expect(res.request.path).toBe(`/users/${user.id}`)
  })

  test('Delete user test', async () => {
    const res = await axios.delete(`http://localhost:3000/users/${user.id}`)

    expect(res.data).toEqual(
      expect.objectContaining({
        code: 0,
        data: expect.objectContaining({
          message: 'User was deleted'
        }),
        message: 'success',
      })
    )
    expect(res.status).toBe(200)
  })
})