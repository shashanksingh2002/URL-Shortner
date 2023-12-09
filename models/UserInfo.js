const {v4: uuidv4} = require('uuid');
const BaseModel = require('./BaseModel');

class Users extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    this.id = this.id ? this.id : uuidv4();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email', 'password', 'ph_number'],
      properties: {
        first_name: {type: 'string'},
        last_name: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'},
        ph_number: {type: 'string'},
      },
    };
  }

  static create(user) {
    return Users.query().insert(user).returning('*');
  }
}

module.exports = Users;
