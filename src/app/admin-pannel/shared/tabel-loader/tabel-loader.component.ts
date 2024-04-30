import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: '[tableLoader]',
    templateUrl: './tabel-loader.component.html',
    styleUrls: ['./tabel-loader.component.css']
})
export class TabelLoaderComponent implements OnInit {
    @Input()
    tableLoader!: Options
    rows: Array<number> = []
    cols: Array<number> = []
    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < this.tableLoader.rows; i++) {
            this.rows.push(i)
        }

        for (let i = 0; i < this.tableLoader.cols; i++) {
            if (this.tableLoader.colSpans[i]) {
                this.cols.push(this.tableLoader.colSpans[i])
                i = i + this.tableLoader.colSpans[i] - 1
            } else {
                this.cols.push(1)
            }
        }

    }

}

export class Options {
    cols = 1
    rows = 1
    colSpans: any = []
}
