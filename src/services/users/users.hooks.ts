import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import {HookContext} from '@feathersjs/feathers';
import logger from '../../logger';
const { hashPassword, protect } = local.hooks;
// Don't remove this comment. It's needed to format import lines nicely.

const {authenticate} = feathersAuthentication.hooks;

export default {
  before: {
    all: [
      async (context: HookContext): Promise<any> => {
        logger.info(`API: ${context.path} calling ${context.method} method`);
        return context;
      }
    ],
    find: [ ],
    get: [ ],
    create: [ hashPassword('password') ],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ protect('password') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [async (context: HookContext): Promise<any> => {
      logger.error(`Error in ${context.path} calling ${context.method}  method`, context.error);
      return context;
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
