import path from "path"

type schemeConfig = {
    directory: {
        generated: string,
        utility: string
    }
}

const primeConfig: schemeConfig = {
    directory: {
        generated: path.join(__dirname, "../../generated"),
        utility: path.join(__dirname, "../../util")
    }
}

export default primeConfig