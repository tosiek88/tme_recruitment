import { expect } from "chai";
import { DetectSequenceService } from "./detect-sequence.service";

describe("Sequence detection in array", () => {
  it("No sequence found", () => {
    const inputSeq = [1, 2, 3];
    const searchedSeq = [8, 7];

    expect(DetectSequenceService.detect(inputSeq, searchedSeq)).to.be.equal(-1);
  });

  it("One sequence in input sequence", () => {
    const inputSeq = [1, 2, 3, 8, 7, 1];
    const searchedSeq = [8, 7];

    expect(DetectSequenceService.detect(inputSeq, searchedSeq)).to.be.equal(3);
  });

  it("Two sequences in input we should return start index of second", () => {
    const inputSeq = [1, 22, 3, 8, 7, 8, 7, 1, 1, 1];
    const searchedSeq = [8, 7];

    expect(DetectSequenceService.detect(inputSeq, searchedSeq)).to.be.equal(5);
  });
});
