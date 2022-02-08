import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearParams(argv) {
  const argvParseados = minimist(argv);
  if (argvParseados.search) {
    return { search: argvParseados.search };
  } else {
    return {};
  }
}

 async function main() {
  const controller = new ProductController()
    const argsParseados = parsearParams(process.argv.slice(2))
    const resultado = await controller.processOptions(argsParseados)
    console.log(resultado)
}
main();
