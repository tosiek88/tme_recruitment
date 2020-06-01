import { Observable, from, of, merge, combineLatest, concat } from "rxjs";
import { map, mergeMap, combineAll, take, toArray } from "rxjs/operators";
import { ProductBasic, CustomerSymbol, DescriptionWords } from "./types";

export class ProductsScoreService {
  /**
   * TODO Implement me!
   */
  public static computeScore(productsBasic$: Observable<ProductBasic>, customerSymbols$: Observable<CustomerSymbol>, descriptions$: Observable<DescriptionWords>, inputPhrase: string, productsLimit: number): Observable<string[]> {
    const productsBasicArray = productsBasic$.pipe(toArray());
    const customerSymbolsArray = customerSymbols$.pipe(toArray());

    const descriptionsArray = descriptions$.pipe(toArray());
// HELPER function to merge relationship across objects
    const mergeById = <T extends { id: number }, P extends { productId: number }>([t, s]: [T[], P[]]) =>
      t.map((p) =>
        Object.assign(
          {},
          p,
          s.find((q) => p.id === q.productId),
        )
      );
// combine products with customers symbols
    const productsSymbols = combineLatest(productsBasicArray, customerSymbolsArray).pipe(map(mergeById));


    const all$ = combineLatest(productsSymbols, descriptionsArray).pipe(map(mergeById));

    const symbolsSortedByScoreDesc = all$.pipe(
      map((flat) =>
        flat
          .map((p) => {
            const customerSymbolsScore = p.customerSymbol === inputPhrase ? 1000 : 0;
            const descriptionScore = () => {
              const index = p.words.indexOf(inputPhrase);
              return index > -1 ? 1000 - index : 0;
            };
            return {
              symbol: p.symbol,
              score: customerSymbolsScore + descriptionScore(),
            };
          })
          .sort((a, b) => (a.score < b.score ? 1 : -1))
          .map((obj) => obj.symbol)
          .slice(0, productsLimit),
      ),
    );

    // symbolsSortedByScoreDesc.subscribe(console.log);
    return symbolsSortedByScoreDesc;
  }
}
