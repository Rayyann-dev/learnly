function printCell(arr, coords) {
    coords = coords.substring(1, coords.length);
    console.log(coords);
    let str = coords.split("");
    console.log(str);
    var result = [];
    str.forEach(function (x) {
      if (parseInt(x) >= 0) result.push(parseInt(x));
    });
    console.log(result);
    let final = [];
    if (result.length <= 2) {
      final = arr[result[0]][result[1]];
    } else {
      let abc = result.toString();
      console.log(abc);
      final = arr[result[0]][result[1]];
    }
  
    console.log(result);
    console.log(final);
  }
  
  printCell(
    [
      [5, 4, 9, 5, 0, 4, 4, 1, 2, 1, 4, 7],
      [5, 5, 0, 2, 9, 8, 8, 9, 2, 3, 7, 5],
      [3, 0, 7, 6, 1, 5, 9, 8, 2, 3, 7, 3],
      [7, 9, 7, 8, 7, 7, 3, 2, 1, 3, 4, 9],
      [9, 4, 5, 8, 8, 8, 9, 0, 4, 5, 7, 0],
      [7, 7, 8, 4, 0, 0, 5, 0, 5, 0, 3, 2],
      [7, 5, 5, 8, 6, 6, 9, 0, 6, 8, 3, 3],
      [7, 6, 6, 2, 1, 7, 0, 2, 4, 3, 3, 9],
      [6, 5, 4, 8, 7, 1, 2, 3, 8, 5, 4, 4],
      [1, 1, 8, 2, 1, 7, 2, 8, 5, 5, 8, 4],
      [1, 1, 5, 9, 2, 3, 5, 3, 9, 7, 5, 5],
      [9, 3, 5, 8, 7, 3, 6, 2, 2, 5, 5, 1],
    ],
    "R0C11"
  );
  