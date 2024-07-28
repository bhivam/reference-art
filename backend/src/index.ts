import { app, start_server } from "./server";
import Logging from "./logging";

const port = process.env.PORT || 3000;

start_server();

app.listen(port, function () {
  Logging.info(`started server on port ${port}`);
});
