import path from "path"
import primeConfig from "../config/prime_config";

class PrimeGenerate {

    constructor() {
    }

    async generate(module: string, filename: string) {
        const { utility, generated } = primeConfig.directory;
        const moduleClass = await import(path.join(utility, module, filename));
        new (moduleClass.default)(`${generated}`,`${module}.css`).execute()
    }
}

export default PrimeGenerate