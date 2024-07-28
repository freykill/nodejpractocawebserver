import {envs} from './config/env.js';
import startServer from './server/server.js';

console.log(envs)

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
};

(async () => {
  // funcion auto convocada
  main();
})();
