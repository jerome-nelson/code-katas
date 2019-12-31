## DAY 2

### Assumptions
* Each item in array is always numerical pair.
* Each numerical pair in desc order.
* Will always be even-ordered list. 

### Algorithm
* Remove Overlaps in Data 
   - Take each numerical pair in parent and compare directly to other items in parent:
      * Comparison to each pair in array
         - Condition: If the first part of the pair is less than last part in any item in parent
            - replace last of found item with current last
            - remove this iteration

* Flatten arrays in one array
* Sort array into desc order
   - Rebuild list
      * Create new list
      * Take first element from flattened list
      * Next items:
         - If lower than last then push to beginning of array
         - If higher then push to end of array