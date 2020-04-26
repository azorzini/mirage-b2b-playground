// version 1
import factories from '../../mirageConfig/factories';
import routes from '../../mirageConfig/routes';
import models from '../../mirageConfig/models';
import seeds from '../../mirageConfig/seeds';
import { Server} from "miragejs";

const config = environment => {
  return {
    environment,
    factories,
    models,
    routes,
    seeds,
  };
};

export default function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment));
}

/*
export default function makeServer() {
  return new Server({

    models: {
      configuration: Model,
      messageFlow: Model,
      endpoint: Model,
    },

    factories: {
      messageFlow: Factory.extend({
        name(i){
          return `Message flow - ${i}`
        },
      }),
      endpoint: Factory.extend({
        as2: trait({
          endpointType: 'AS2',
        }),
        http: trait({
          endpointType: 'HTTP',
        })
      }),
      configuration: Factory.extend({
        name(i){
          return `Config - ${i}`
        },
        withTargetEndpoint: trait({
          afterCreate(configuration, server) {
            const http = server.create("endpoint", 'http');
            configuration.update({ targetEndpoint: http });
          },
        }),
        withReceivingEndpoint: trait({
          afterCreate(configuration, server) {
            const as2 = server.create("endpoint", 'as2');
            configuration.update({ receivingEndpoint: as2 });
          },
        }),
      }),
    },

    seeds(server) {
      const config = server.create('configuration', 'withTargetEndpoint','withReceivingEndpoint');
      const messageFlow = server.create('messageFlow');
      messageFlow.update({ configurations: [config]});
      debugger;
    },

    routes() {
      this.resource("messageFlow");
    }
  });
}
*/
