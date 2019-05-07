const toolkit = require('./toolkit')

// const a = Array.from({
//     length: 9
// }, (v, i) => i);

// console.log(a);
// console.log(toolkit.shuffle(a));

class Grid {
  constructor (container) {
    this._$container = container
  }

  build () {
    const matrix = toolkit.makeMatrix()

    const rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom']
    const colGroupClasses = ['col_g_left', 'col_g_center', 'col_g_right']

    const $cells = matrix.map(rowVal => {
      return rowVal.map((cellVal, index) => {
        return $('<span>')
          .addClass(colGroupClasses[index % 3])
          .text(cellVal)
      })
    })

    const $divArr = $cells.map(($spanArr, index) => {
      return $('<div>')
        .addClass('row')
        .addClass(rowGroupClasses[index % 3])
        .append($spanArr)
    })

    this._$container.append($divArr)
  }

  layout () {
    const width = $('span:first', this._$container).width()
    console.log(width)

    $('span', this._$container)
      .height(width)
      .css({
        'line-height': `${width}px`,
        'font-size': width < 32 ? `${width / 2}px` : ''
      })
  }
}

const grid = new Grid($('#container'))
grid.build()
grid.layout()
