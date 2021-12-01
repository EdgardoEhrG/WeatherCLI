import { printHelp } from "./services/log.mjs";
import { getArgs } from "./helpers/args.mjs";

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //
  }
  if (args.t) {
    //
  }
};

initCLI();
