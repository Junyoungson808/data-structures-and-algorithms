'use strict';

function hashmapLeftJoin(hashmap1, hashmap2) {
  let leftJoinArr = [];
  hashmap1.keys.forEach(key => {
    leftJoinArr.push({
      key: key,
      keyHash1: hashmap1.get(key),
      keyHash2: hashmap2.get(key),
    });
  });
  return leftJoinArr;
}

module.export = hashmapLeftJoin;
