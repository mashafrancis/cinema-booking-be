// Initializes the `tickets` service on path `/tickets`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Tickets } from './tickets.class';
import createModel from '../../models/tickets.model';
import hooks from './tickets.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tickets': Tickets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const docs = {
    description: 'A service for ticket booking',
    definitions: {
      messages: {
        'type': 'object',
        'required': [
          'text'
        ],
        'properties': {
          'text': {
            'type': 'string',
            'description': 'The message text'
          },
          'userId': {
            'type': 'string',
            'description': 'The id of the user that sent the message'
          }
        }
      }
    }
  };

  // Initialize our service with any options it requires
  const tickets = new Tickets(options, app);
  tickets.docs = docs;

  app.use('/tickets', tickets);

  // Get our initialized service so that we can register hooks
  const service = app.service('tickets');

  service.hooks(hooks);
}
