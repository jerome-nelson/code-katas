## DAY 1
### Steps to Solve

#### Step 1
* function takes array of arrays
    - should contain two integers 
*  Returns sum of all detected intervals

#### Step 2 - Thoughts
* what if:
    - one integer only
    - negative integer
    - Overlapping Intervals
    - if master list is unordered
    - single entry
    -  Multiple Entries

### Calculations
* Initially Creation of two reduction loops - one to flatMap, the other to sum
* Condition for first one is:
   - if there are two entries - per schema, allow, else return d0/false
   - if 0 then we skip else we flatten current list in item into master list;
* Condition for second is simple
   - If current index is factor of two then this means we are at the end of one array
      - If true: then we add current number to total/ else we subtract as this is the end number

## Step 3 - Refine
* Identify Issues in requirements and refine approach