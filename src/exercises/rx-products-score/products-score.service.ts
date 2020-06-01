import { Observable, from, of, merge, combineLatest, concat } from "rxjs";
import { map, mergeMap, combineAll, take, toArray } from "rxjs/operators";
import { ProductBasic, CustomerSymbol, DescriptionWords } from "./types";

export class ProductsScoreService {
  /**
   * TODO Implement me!
   */
  public static computeScore(productsBasic$: Observable<ProductBasic>, customerSymbols$: Observable<CustomerSymbol>, descriptions$: Observable<DescriptionWords>, inputPhrase: string, productsLimit: number): Observable<string[]> {
    

    const productsBasicArray=productsBasic$.pipe(
      toArray(),
    )
    const customerSymbolsArray=customerSymbols$.pipe(
      toArray(),
    )
    
    const descriptionsArray=descriptions$.pipe(
      toArray(),
    )


 const mergeById=<T extends {id:number},P extends {productId:number}>([t, s]:[T[], P[]]) => t.map(p => Object.assign({}, p, s.find(q => p.id === q.productId)));

    const productsSymbols=combineLatest(productsBasicArray, customerSymbolsArray).pipe(
      map(mergeById)
    );


    const all$=combineLatest(productsSymbols, descriptionsArray).pipe(
      map(mergeById)
    );



    all$.subscribe(console.log);
    const symbolsSortedByScoreDesc = of([]);
    return symbolsSortedByScoreDesc;
  }
}
