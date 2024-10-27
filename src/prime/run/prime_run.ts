import PrimeGenerate from "../generate/prime_generate";
import Specification from "../../specification/specification";

class PrimeRun {
    private primeGenerate: PrimeGenerate
    constructor() {
        this.primeGenerate = new PrimeGenerate()
    }
    async run() {
        for (const [module, filename] of Object.entries(Specification))
            this.primeGenerate.generate(module, filename)
    }
}

export default PrimeRun