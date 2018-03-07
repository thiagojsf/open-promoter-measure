import { Segment } from './segment';
import { Ranking } from './ranking';

export class NPS {

    private _grade: number;
    public comment: string;
    readonly date: Date;
    public segment: Segment;
    private _ranking: Ranking;
    public question: string;

    constructor() {
        this.date = new Date();
    }

    get grade(): number {
        return this._grade;
    }

    set grade(grade: number) {
        this._grade = grade;

        if (grade > 8)
            this._ranking = Ranking.Promoter;
        else if (grade < 7)
            this._ranking = Ranking.Refractor;
        else
            this._ranking = Ranking.Passive;
    }

    get ranking() : Ranking {
        return this._ranking;
    }

    public static calculateNPS(npsList: NPS[]): number {

        var countPromoter: number = 0;
        var countRefractor: number = 0;

        for (let nps of npsList) {
            if(nps.ranking === Ranking.Promoter)
                countPromoter++;
            
            if(nps.ranking == Ranking.Refractor)
                countRefractor++;
        }

        return 100 * (countPromoter - countRefractor);
    }
}