import { expect } from "chai";
import { Observable, of } from "rxjs";
import { ProductsScoreService } from "./products-score.service";
import { ProductBasic, CustomerSymbol, DescriptionWords } from "./types";

describe("Compute score and sort products desc", () => {
  it("Simple scoring usage", (done) => {
    const inputPhrase = "diode";
    const productsLimit = 2;

    // Unsorted!
    const productsBasic$: Observable<ProductBasic> = of(
      { id: 2, symbol: "1N4007" },
      { id: 5, symbol: "74HC14" },
      { id: 3, symbol: "AX-176" },
      { id: 1, symbol: "1N4005" },
      { id: 6, symbol: "OP-AMP" },
      { id: 4, symbol: "74HC595" }
    );

    // Unsorted!
    const customerSymbols$: Observable<CustomerSymbol> = of(
      { productId: 4, customerSymbol: "foo" },
      { productId: 3, customerSymbol: "dioda" } // 1000
    );

    // Unsorted!
    const descriptions$: Observable<DescriptionWords> = of(
      { productId: 3, words: ["multimeter", "230V", "LCD", "diode"] }, // pos: 3 -> 1000 - 3
      { productId: 5, words: ["Schmitt", "trigger"] }, // null
      { productId: 6, words: ["operational", "amplifier", "2kHz"] }, // null
      { productId: 4, words: ["shif", "register"] }, // null
      { productId: 1, words: ["universla", "diode", "1000V"] }, // pos: 1 -> 1000 - 1
      { productId: 2, words: ["diode", "100V", "fast"] } // pos: 0 -> 1000 - 0
    );

    ProductsScoreService.computeScore(
      productsBasic$,
      customerSymbols$,
      descriptions$,
      inputPhrase,
      productsLimit
    ).subscribe((symbolsSortedByScoreDesc: string[]) => {
      expect(symbolsSortedByScoreDesc).to.be.deep.equal([
        "AX-176", // "diode" in customer symbols +1000, "diode" in pos 3 in words 1000 - 3 -> 1997
        "1N4007" // no "diode" in customer symbols 0, "diode" in pos 0 in words 1000 - 0 -> 1000
      ]);

      done();
    });
  });
});
