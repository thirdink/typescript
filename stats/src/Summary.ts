import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/winsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';
import { ConsoleReport } from './reportTargets/ConsoleReports';

export interface Analyzer {
	run(matches: MatchData[]): string;
}
export interface OutputTarget {
	print(report: string): void;
}
export class Summary {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
	static winsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport());
	}
	static winsAnalysisWithConsoleReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new ConsoleReport());
	}
	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
