'use strict';

const MAX_LENGTH = 100;

export class ShortDescriptionFilter {

  transform(input, length) {
    length = this._calculateLength(length);

    if (this._inputExceedsLimit(input, length)) {
      return this._truncate(input, length);
    } else {
      return input;
    }
  }


  _inputExceedsLimit(input, length) {
    return input.length > length;
  }


  _truncate(input, length) {
    return input.substring(0, length) + '...';
  }


  _calculateLength(length) {
    return length || MAX_LENGTH;
  }


  static create() {
    return () => {
      const shortDescription = new ShortDescriptionFilter();
      return shortDescription.transform.bind(shortDescription);
    };
  }
  
}
