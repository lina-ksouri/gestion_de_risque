export class Riskanalyse {
    name !: string;
    risk_brut !: number;
    last_update !: Date;

    getrisk(): number{
        return this.risk_brut;
    }

    getmonth() : Date{
        return this.last_update;
    }
}
