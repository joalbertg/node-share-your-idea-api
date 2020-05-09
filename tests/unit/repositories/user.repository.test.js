const mockingoose = require('mockingoose').default;

const { User } = require('../../../src/models');
const { UserRepository } = require('../../../src/repositories');
let {
  UserModelMock: { user, users }
} = require('../../mocks');

describe('User Repository Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('Should return an user by id', async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, 'findOne');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.show(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it('Should find an user by username', async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, 'findOne');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getUserByUsername(_user.username);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it('Should return an user collection', async () => {
    users = users.map(user => {
      delete user.password;
      return user;
    });
    mockingoose(User).toReturn(users, 'find');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.index();

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users);
  });

  it('Should update an especific user by id', async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(_user, 'findOneAndUpdate');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.update(user._id, { name: 'Joalbert' });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });


  it('Should delete an especific user by id', async () => {
    mockingoose(User).toReturn(user, 'findOneAndDelete');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.delete(user._id);

    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});

