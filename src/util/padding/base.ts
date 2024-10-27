import { expressionScheme } from "../../prime/scheme/iprime_scheme"
import PrimeScheme from "../../prime/scheme/prime_scheme"

const expressionKeys = {
    paddingAll: "padding_all",
    paddingTop: "padding_top",
    paddingRigth: "padding_rigth",
    paddingBottom: "padding_bottom",
    paddingLeft: "padding_left",
    paddingHorizontal: "padding_horizontal",
    paddingVertical: "padding_vertical",
}

class BasePadding extends PrimeScheme {

    constructor(output: string, filename: string) {
        super(output, filename)
        this.title = "Base Padding"
        this.author = "Eduardo Rodriguez"
        this.expressions = [
            {
                title: "Padding All",
                key: expressionKeys.paddingAll,
                template: ".p-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Top",
                key: expressionKeys.paddingTop,
                template: ".p-t-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Right",
                key: expressionKeys.paddingRigth,
                template: ".p-r-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Bottom",
                key: expressionKeys.paddingBottom,
                template: ".p-b-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Left",
                key: expressionKeys.paddingLeft,
                template: ".p-l-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Horizontal",
                key: expressionKeys.paddingHorizontal,
                template: ".p-x-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            },
            {
                title: "Padding Vertical",
                key: expressionKeys.paddingVertical,
                template: ".p-y-$1{$2}",
                range: { start: 1, end: 10, jump: 1 }
            }
        ]
    }

    transform(key: string, values: any): string {
        switch (key) {
            case expressionKeys.paddingAll:
                return `
                    padding: ${values.px * 2}px; 
                `
            case expressionKeys.paddingHorizontal:
                return `
                    padding-left: ${values.px * 2}px; 
                    padding-right: ${values.px * 2}px; 
                `
            case expressionKeys.paddingVertical:
                return `
                    padding-top: ${values.px * 2}px; 
                    padding-bottom: ${values.px * 2}px; 
                `
            case expressionKeys.paddingTop:
                return `
                    padding-top: ${values.px * 2}px; 
                `
            case expressionKeys.paddingRigth:
                return `
                    padding-right: ${values.px * 2}px; 
                `
            case expressionKeys.paddingBottom:
                return `
                    padding-bottom: ${values.px * 2}px; 
                `
            case expressionKeys.paddingLeft:
                return `
                    padding-left: ${values.px * 2}px; 
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

export default BasePadding