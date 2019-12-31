## DAY FOUR
* Can solve by using a mal-formed binary search tree structure

**Sample**
```
[[1,4], [7,10], [3,5]]
```

**Steps**
* Insert Root Node and Right Pointer with Child Node

**Iteration**
* When inserting:
    - Compare each node insertion to Root Node, if Root Node is bigger than last entry in input go to previous
    - On previous, compare both entries to child node
    - If Root Node is more than first:
        - Move root node to left pointer as child node
        - Replace Root with first entry
    - Else:
        - Replace root node only
    - If Child node is smaller than last node then replace, and discard

**When iteration done**
Flatten tree into final structure

**Complexity**
* Insert: 
* Merge:
* Modify:
* Deletion:
* Read:

**Examples**
* First Node: 1
    - Right Child: 4 
* Second Node: 7
    - Right Child 