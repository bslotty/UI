export class FilterOptionsRange {
    start: Date;
    end  : Date;
    enabled: boolean = false;
    
    constructor(start: Date = new Date(), end: Date = new Date()) {
        this.start = start;
        this.end = end;
        return this;
    }

    enable() {
        this.enabled = true;
        return this;
    }

    disable() {
        this.enabled = false;
        return this;
    }

    SetEndDateToNumOfDaysFromStart(i: number): FilterOptionsRange{
        let end = this.start;
        end.setDate( this.start.getDate() - i);
        return this;
    }

    GetDaysBetween(): number {
        let msDays  = 1000 * 60 * 60 * 24;
        let start   = this.start.getTime() / msDays;
        let end     = this.end.getTime() / msDays;
        let between = Math.floor(end - start);

        return between;
    }
}