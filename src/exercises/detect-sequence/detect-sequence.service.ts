interface State {
  next: State | null;
  prev: State | null;
}
export class DetectSequenceService {
  /**
   * TODO Implement me!
   */

  public static detect(inputSeq: number[], searchedSeq: number[]): number {
    let result = 0;
    searchedSeq.forEach((searchedSeq) => {
      do {
        result = inputSeq.indexOf(searchedSeq);
      } while (result != -1);
    });
    return result;
  }
}
