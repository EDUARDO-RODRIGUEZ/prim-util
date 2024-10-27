import { IPrimeFile } from "./iprime_file"
import fs from "fs"
import path from "path";
class PrimeFile implements IPrimeFile {

    private output: string;
    private filename: string;

    constructor(output: string, filename: string) {
        this.output = output
        this.filename = filename
    }

    pathComplete(){
        return  path.join(this.output,this.filename);
    }

    createDirectoryIfNotExist() {
        let existDirectory = fs.existsSync(this.output)
        if (!existDirectory)
            fs.mkdirSync(this.output, { recursive: true })
    }

    removeFileIfExist() {
        if (fs.existsSync(this.pathComplete())) {
            fs.unlinkSync(this.pathComplete())
            return
        }
        fs.writeFileSync(this.pathComplete(), "","utf-8");
    }

    writeTitleAndAuthor(title: string, author: string) {
        fs.appendFileSync(this.pathComplete(), `/*\n\tTitle  :${title}`);
        fs.appendFileSync(this.pathComplete(), `\n\tAuthor :${author}\n*/\n`);
    }

    writeComment(text: string): void {
        fs.appendFileSync(this.pathComplete(), `/**${text}**/`, 'utf8');
    }

    writeExpression(text: string): void {
        text = text.replaceAll(" ", "");
        text = text.replaceAll("\n", "");
        fs.appendFileSync(this.pathComplete(), text, 'utf8');
    }
}

export default PrimeFile