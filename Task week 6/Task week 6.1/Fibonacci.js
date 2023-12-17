const fib = (startIndex = 0, endIndex = 1) => {
    let fibArray = [0, 1];
    for (let i = 2; i <= endIndex; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray.slice(startIndex, endIndex + 1);
  };