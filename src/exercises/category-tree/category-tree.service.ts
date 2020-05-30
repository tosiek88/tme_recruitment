import { FlatCategory, Category } from './category.interface';

export class CategoryTreeService {
  /**
   * TODO Implement me!
   */
  public static buildNestedTree(flatTree: FlatCategory[]): Category[] {
    const category:Category[]=flatTree.map((it)=>{
        return {...it, children:[]}
      });
    return category; 
  }
}
