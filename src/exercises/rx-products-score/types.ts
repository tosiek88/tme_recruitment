export interface ProductBasic {
  id: number;
  symbol: string;
}

export interface CustomerSymbol {
  productId: number;
  customerSymbol: string;
}

export interface DescriptionWords {
  productId: number;
  words: string[];
}
