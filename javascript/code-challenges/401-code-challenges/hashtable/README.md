# Hashtables
<!-- Short summary or background information -->
Hash tables are a data structure that allows you to create a list of paired values. You can retrieve certain values by using a key for that value, which is set into the table beforehand. Hash tables use a key and transforms that key into a integer index using a hash function.

## Challenge
<!-- Description of the challenge -->
Create a hashtable structure, implement set, get, has, hash, methods. Test all hashtable and methods.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->
Hashtable methods:

set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

get
Arguments: key
Returns: Value associated with that key in the table

has
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

keys
Returns: Collection of keys

hash
Arguments: key
Returns: Index in the collection for that key

## Links
[freecodecamp-HashTables](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/#:~:text=You%20can%20implement%20a%20Hash,value%20pairs%20from%20the%20table.)
[HashTables || Data Structures - youtube](https://www.youtube.com/watch?v=QuFPIZj55hU&list=RDLVQuFPIZj55hU&index=1)