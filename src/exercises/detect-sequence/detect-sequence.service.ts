
export class DetectSequenceService {
  /**
   * TODO Implement me!
   */

  public static detect(inputSeq: number[], searchedSeq: number[]): number {
    const inputSeqString=inputSeq.map(it=>String.fromCharCode(it)).join('')
    const searchSeqString=searchedSeq.map(it=>String.fromCharCode(it)).join('')
    const result= inputSeqString.lastIndexOf(searchSeqString);
    
    return result;
  }
}
