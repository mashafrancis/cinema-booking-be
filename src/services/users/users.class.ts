import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import {Params} from '@feathersjs/feathers';
import getGravatar from '../../utils/getGravatar';

interface UserData {
  _id?: string;
  email: string;
  password?: string;
  name?: string;
  avatar?: string;
  googleId?: string;
}

export class Users extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create (data: UserData, params?: Params): any {
    // This is the information we want from the user signup data
    const { email, password, googleId, name } = data;
    // Use the existing avatar image or return the Gravatar for the email
    const avatar = data.avatar || getGravatar(email);
    // The complete user
    const userData = {
      email,
      name,
      password,
      googleId,
      avatar
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }
}
