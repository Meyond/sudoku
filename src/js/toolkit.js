const matrixToolkit = {
  makeRow (v = 0) {
    const array = new Array(9)
    // fill 用一个值填充数组
    array.fill(v)
    return array
  },

  makeMatrix (v = 0) {
    // from 将一个类素组/可迭代对象转为一个真正的数组
    return Array.from(
      {
        length: 9
      },
      () => this.makeRow(v)
    )
  },

  shuffle (array) {
    const endIndex = array.length - 2
    for (let i = 0; i <= endIndex; i++) {
      const j = i + Math.floor(Math.random() * (array.length - i))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}

module.exports = matrixToolkit
