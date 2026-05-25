export class Knobelscheit {
    private flipped: Set<number>

    constructor() {
        this.flipped = new Set();
    }

    getActive(): number[] {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => !this.flipped.has((n)))
    }
}
