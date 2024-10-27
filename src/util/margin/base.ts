import { expressionScheme } from "../../prime/scheme/iprime_scheme"
import PrimeScheme from "../../prime/scheme/prime_scheme"

const expressionKeys = {
    marginAll: "margin_all",
    marginTop: "margin_top",
    marginRigth: "margin_rigth",
    marginBottom: "margin_bottom",
    marginLeft: "margin_left",
    marginHorizontal: "margin_horizontal",
    marginVertical: "margin_vertical",
}

class BaseMargin extends PrimeScheme {

    constructor(output: string, filename: string) {
        super(output, filename)
        this.title = "Base Margin"
        this.author = "Eduardo Rodriguez"
        this.expressions = [
            {
                title: "Margin All",
                key: expressionKeys.marginAll,
                template: ".m-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Top",
                key: expressionKeys.marginTop,
                template: ".m-t-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Right",
                key: expressionKeys.marginRigth,
                template: ".m-r-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Bottom",
                key: expressionKeys.marginBottom,
                template: ".m-b-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Left",
                key: expressionKeys.marginLeft,
                template: ".m-l-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Horizontal",
                key: expressionKeys.marginHorizontal,
                template: ".m-x-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Margin Vertical",
                key: expressionKeys.marginVertical,
                template: ".m-y-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            }
        ]
    }

    transform(key: string, values: any): string {
        switch (key) {
            case expressionKeys.marginAll:
                return `
                    margin: ${values.px * 2}px; 
                `
            case expressionKeys.marginHorizontal:
                return `
                    margin-left: ${values.px * 2}px; 
                    margin-right: ${values.px * 2}px; 
                `
            case expressionKeys.marginVertical:
                return `
                    margin-top: ${values.px * 2}px; 
                    margin-bottom: ${values.px * 2}px; 
                `
            case expressionKeys.marginTop:
                return `
                    margin-top: ${values.px * 2}px; 
                `
            case expressionKeys.marginRigth:
                return `
                    margin-right: ${values.px * 2}px; 
                `
            case expressionKeys.marginBottom:
                return `
                    margin-bottom: ${values.px * 2}px; 
                `
            case expressionKeys.marginLeft:
                return `
                    margin-left: ${values.px * 2}px; 
                `
            default:
                return ``;
        }
    }

    program(expression: expressionScheme): void {
        for (let index = expression.range.start; index <= expression.range.end; index = index + expression.range.jump) {
            let template = expression.template.replace("$1", `${index}`);
            template = template.replace("$2", this.transform(expression.key, { px: index }));
            this.primeFile.writeExpression(template)
        }
    }
}

export default BaseMargin