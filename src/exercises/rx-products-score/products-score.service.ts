import { Observable, of } from "rxjs";
import {} from "rxjs/operators";
import { ProductBasic, CustomerSymbol, DescriptionWords } from "./types";

export class ProductsScoreService {
  /**
   * TODO Implement me!
   */
  public static computeScore(
    productsBasic$: Observable<ProductBasic>,
    customerSymbols$: Observable<CustomerSymbol>,
    descriptions$: Observable<DescriptionWords>,
    inputPhrase: string,
    productsLimit: number
  ): Observable<string[]> {
    const symbolsSortedByScoreDesc = of([]);

    return symbolsSortedByScoreDesc;
  }
}
