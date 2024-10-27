import PrimeFile from "../file/prime_file";
import DefaultPrimeScheme, { expressionScheme, IPrimeScheme } from "./iprime_scheme"
import lodash from "lodash"

abstract class PrimeScheme implements IPrimeScheme {
    public title: string;
    public author: string;
    public expressions: expressionScheme[];
    public primeFile: PrimeFile;
    public output: string;
    public filename: string;
    constructor(output: string, filename: string) {
        this.title = ""
        this.filename = filename
        this.author = ""
        this.expressions = [lodash.cloneDeep(DefaultPrimeScheme.defaultExpressionScheme)]
        this.output = output
        this.primeFile = new PrimeFile(output,filename)
    }
    abstract program(expression: expressionScheme): void;
    abstract transform(key: string, value: number): string;
    execute(): void {
        this.primeFile.createDirectoryIfNotExist()
        this.primeFile.removeFileIfExist()
        this.primeFile.writeTitleAndAuthor(this.title, this.author)
        for (const expression of this.expressions) {
            this.primeFile.writeComment(expression.title)
            this.program(expression)
        }
    }
}

export default PrimeScheme;