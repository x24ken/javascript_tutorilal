class MyIterator {
  // 引数経由で渡された配列をdataプロパティに設定
  constructor(data) {
    this.data = data;
  }
  
  [Symbol.iterator](){
    let current = 0;
    let that = this
  }
}

  