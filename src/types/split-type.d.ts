declare module 'split-type' {
  interface SplitTypeOptions {
    types?: string | string[];
    tagName?: string;
    absolute?: boolean;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  interface SplitTypeResult {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert: () => void;
  }

  export default class SplitType {
    constructor(target: string | HTMLElement, options?: SplitTypeOptions);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert: () => void;
  }
} 