function chunkArrayInGroups(arr, size) {
  let ans = [];
  for (let i = 0; i < arr.length; i += size) {
    let a1 = arr.slice(i, i + size);
    ans.push(a1);

  }


  return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);