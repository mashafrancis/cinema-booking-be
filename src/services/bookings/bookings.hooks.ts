import * as authentication from '@feathersjs/authentication';
import {HookContext} from '@feathersjs/feathers';
import logger from '../../logger';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [
      // authenticate('jwt'),
      async (context: HookContext): Promise<any> => {
        logger.info(`API: ${context.path} calling ${context.method} method`);
        return context;
      }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
