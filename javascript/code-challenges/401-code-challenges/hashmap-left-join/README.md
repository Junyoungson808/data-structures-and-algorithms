# Hashtable-left-join
<!-- Short summary or background information -->
Hash tables are a data structure that allows you to create a list of paired values. You can retrieve certain values by using a key for that value, which is set into the table beforehand. Hash tables use a key and transforms that key into a integer index using a hash function.

## Challenge
<!-- Description of the challenge -->
Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Time: O(1)

## Solution
<!-- Description of each method publicly available in each of your hashtable -->
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

## Links
With Reference to TA's code. Still can't understand it completely. My hashtable functions might be incomplete.