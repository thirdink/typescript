"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const winsAnalysis_1 = require("./analyzers/winsAnalysis");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
const ConsoleReports_1 = require("./reportTargets/ConsoleReports");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new winsAnalysis_1.WinsAnalysis(team), new HtmlReports_1.HtmlReport());
    }
    static winsAnalysisWithConsoleReport(team) {
        return new Summary(new winsAnalysis_1.WinsAnalysis(team), new ConsoleReports_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
