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
