function buildPattern(seq: number[]) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < seq.length) {
    if (seq[prefixIndex] === seq[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

function knuthMorrisPratt(vector: number[], seq: number[]) {
  let vectorIndex = 0;
  let seqIndex = 0;

  const patternTable = buildPattern(seq);

  while (vectorIndex < vector.length) {
    if (vector[vectorIndex] === seq[seqIndex]) {
      // We've found a match.
      if (seqIndex === seq.length - 1) {
        return vectorIndex - seq.length + 1;
      }
      seqIndex += 1;
      vectorIndex += 1;
    } else if (seqIndex > 0) {
      seqIndex = patternTable[seqIndex - 1];
    } else {
      seqIndex = 0;
      vectorIndex += 1;
    }
  }

  return -1;
}

export class DetectSequenceService {
  /**
   * TODO Implement me!
   */

  public static detect(inputSeq: number[], searchedSeq: number[]): number {
    const inputSeqString = inputSeq.map((it) => String.fromCharCode(it)).join("");
    const searchSeqString = searchedSeq.map((it) => String.fromCharCode(it)).join("");
    const result = inputSeqString.lastIndexOf(searchSeqString);
    return result;
  }

  // Alternative solution
  public static detect2(inputSeq: number[], searchedSeq: number[]): number {
    let result = knuthMorrisPratt(inputSeq, searchedSeq);
    if (result !== -1) {
      // check if rest of array has pattern
        let index=0
      do {
        const arr = inputSeq.slice(result + searchedSeq.length, inputSeq.length + 1);
        index = knuthMorrisPratt(arr, searchedSeq);
        console.log(index);
        result = index === -1 ? result : result +index+ searchedSeq.length;
      } while (index> -1);
    }
    return result;
  }
}
