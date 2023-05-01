module.exports = function toReadable (number) {
    const string = String(number);
    const units = number % 10;
    const dozens = number % 100;
    const hundreds = Math.floor(number / 100);
    const mapOne = new Map([
      [0, 'zero'],
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine'],
    ]);
    const mapTwo = new Map ([
      [11, 'eleven'],
      [12, 'twelve'],
      [13, 'thirteen'],
      [14, 'fourteen'],
      [15, 'fifteen'],
      [16, 'sixteen'],
      [17, 'seventeen'],
      [18, 'eighteen'],
      [19, 'nineteen'],
    ]);
    const mapThree = new Map ([
      [10, 'ten'],
      [20, 'twenty'],
      [30, 'thirty'],
      [40, 'forty'],
      [50, 'fifty'],
      [60, 'sixty'],
      [70, 'seventy'],
      [80, 'eighty'],
      [90, 'ninety'],
    ]);

    if (string.length === 1) {
        return mapOne.get(number);
    } if (string.length === 2) {
        if (units === 0) {
            return mapThree.get(number);
        } else if (Math.floor(number / 10) === 1) {
            return mapTwo.get(number);
        } else if (units !== 0) {
            return mapThree.get(Math.floor(number / 10) * 10) + ' ' + mapOne.get(units);
        }
    } if (string.length === 3) {
        if (dozens === 0) {
            return mapOne.get(hundreds) + ' ' + 'hundred';
        } else if (dozens < 10) {
            return mapOne.get(hundreds) + ' ' + 'hundred' + ' ' + mapOne.get(units);
        } else if (units === 0) {
            return mapOne.get(hundreds) + ' ' + 'hundred' + ' ' + mapThree.get(dozens);
        } else if (dozens < 20) {
            return mapOne.get(hundreds) + ' ' + 'hundred' + ' ' + mapTwo.get(dozens);
        } else if (dozens > 20) {
            return mapOne.get(hundreds) + ' ' + 'hundred' + ' ' + mapThree.get(Math.floor(dozens / 10) * 10) + ' ' + mapOne.get(units);
        }
    }
}


