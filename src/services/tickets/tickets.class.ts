import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

export class Tickets extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  docs: any;
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
