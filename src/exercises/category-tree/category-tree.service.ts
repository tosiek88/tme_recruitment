import { FlatCategory, Category } from "./category.interface";

const parseRecurency = (it: FlatCategory, arrayFlat: FlatCategory[]) => {
  const childs = arrayFlat.filter((child) => {
    if (it.id === child.parentId) {
      return child;
    }
  });

  if (childs.length > 0) {
    (childs as Category[]).forEach((el, index) => {
      childs[index] = parseRecurency(el, arrayFlat) as Category;
    });
  }

  return { ...it, children: childs };
};

export class CategoryTreeService {
  /**
   * TODO Implement me!
   */
  public static buildNestedTree(flatTree: FlatCategory[]) {
    const categories = flatTree.reduce((result, it) => {
      const category = parseRecurency(it, flatTree) as Category;
      if (!category.parentId) {
        result.push(category);
      }
      return result;
    }, [] as Category[]);
    return categories;
  }
}
