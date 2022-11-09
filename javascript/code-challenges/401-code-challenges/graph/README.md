# Graphs
<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Create a Graph data structure, implement addVertex, addDirectedEdge, getNeighbors, getVertices, and breadthFirst. Test all graph methods.

Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->
Graph methods:

addVertex(value)
Arguments: value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

addDirectedEdge(startVertex, endVertex, weight)
Arguments: key
Returns: Value associated with that key in the table

getNeighbors(vertex)
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

getVertices()
Returns: Collection of keys

breadthFirst(vertex)
Arguments: key
Returns: Index in the collection for that key


## Links
[freecodecamp-HashTables](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/#:~:text=You%20can%20implement%20a%20Hash,value%20pairs%20from%20the%20table.)
[HashTables || Data Structures - youtube](https://www.youtube.com/watch?v=QuFPIZj55hU&list=RDLVQuFPIZj55hU&index=1)