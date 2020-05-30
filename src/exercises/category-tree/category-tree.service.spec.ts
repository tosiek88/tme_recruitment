import { expect } from "chai";
import { Category, FlatCategory } from "./category.interface";
import { CategoryTreeService } from "./category-tree.service";

describe("Build category nested tree from category list", () => {
  it("When no children nested tree element should has empty children array", () => {
    const flatTree: FlatCategory[] = [
      {
        id:1, 
        name: "Semiconductors",
        parentId: null,
        productsCount: 62173
      },
      {
        id: 2,
        name: "Passives",
        parentId: null,
        productsCount: 45935
      }
    ];

    const nestedTree: Category[] = [
      {
        id: 1,
        name: "Semiconductors",
        parentId: null,
        productsCount: 62173,
        children: []
      },
      {
        id: 2,
        name: "Passives",
        parentId: null,
        productsCount: 45935,
        children: []
      }
    ];

     expect(CategoryTreeService.buildNestedTree(flatTree)).to.be.deep.equal(nestedTree);
  });

  // it("When children exists should add to Category children attribute", () => {
  //   const flatTreeInDeepLevelOrder: FlatCategory[] = [
  //     {
  //       id: 1,
  //       name: "Semiconductors",
  //       parentId: null,
  //       productsCount: 62173
  //     },
  //     {
  //       id: 2,
  //       name: "Passives",
  //       parentId: null,
  //       productsCount: 45935
  //     },
  //     {
  //       id: 3,
  //       name: "Diodes",
  //       parentId: 1,
  //       productsCount: 14254
  //     },
  //     {
  //       id: 4,
  //       name: "Bridge rectifiers",
  //       parentId: 1,
  //       productsCount: 2173
  //     },
  //     {
  //       id: 5,
  //       name: "Resistors",
  //       parentId: 2,
  //       productsCount: 17540
  //     },
  //     {
  //       id: 6,
  //       name: "Schottky diodes",
  //       parentId: 3,
  //       productsCount: 3687
  //     },
  //     {
  //       id: 7,
  //       name: "Zener diodes",
  //       parentId: 3,
  //       productsCount: 3549
  //     }
  //   ];

  //   const nestedTree: Category[] = [
  //     {
  //       id: 1,
  //       name: "Semiconductors",
  //       parentId: null,
  //       productsCount: 62173,
  //       children: [
  //         {
  //           id: 3,
  //           name: "Diodes",
  //           parentId: 1,
  //           productsCount: 14254,
  //           children: [
  //             {
  //               id: 6,
  //               name: "Schottky diodes",
  //               parentId: 3,
  //               productsCount: 3687,
  //               children: []
  //             },
  //             {
  //               id: 7,
  //               name: "Zener diodes",
  //               parentId: 3,
  //               productsCount: 3549,
  //               children: []
  //             }
  //           ]
  //         },
  //         {
  //           id: 4,
  //           name: "Bridge rectifiers",
  //           parentId: 1,
  //           productsCount: 2173,
  //           children: []
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: "Passives",
  //       parentId: null,
  //       productsCount: 45935,
  //       children: [
  //         {
  //           id: 5,
  //           name: "Resistors",
  //           parentId: 2,
  //           productsCount: 17540,
  //           children: []
  //         },
  //       ]
  //     }
  //   ];

  //   expect(CategoryTreeService.buildNestedTree(flatTreeInDeepLevelOrder)).to.be.deep.equal(nestedTree);
  // });
});
