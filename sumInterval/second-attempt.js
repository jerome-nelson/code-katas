const assert = require ('./helpers');

// Using day two solution instead
function sumIntervals (interval) {
  const final = interval
    .reduce ((newList, current) => {
      if (newList.length > 0) {
        // Remove any duplicates
        const haystack = interval
          .filter (items => items[0] !== current[0] && items[1] !== current[1])
          .map (items => {
            if (current[0] < items[1]) {
              return [items[0], current[1]];
            }
            return items;
          });
        newList = haystack;
      } else {
        newList = newList.concat ([current]);
      }
      return newList;
    }, [])
    .reduce ((flatMap, current_array) => {
      // Flattening result
      return flatMap.concat (current_array);
    }, [])
    .reduce ((sortedList, current, index) => {
      // Reverse and sort list
      if (sortedList.length > 0) {
        if (sortedList[index - 1] < current) {
          sortedList = sortedList.concat (current);
        } else {
          sortedList.splice (0, 0, current);
        }
      } else {
        sortedList = sortedList.concat (current);
      }
      return sortedList;
    }, [])
    .reduce ((sum, number, index, originalList) => {
        if (index === originalList.length -1 && number - originalList[index -1] > 1) {
            sum += number - originalList[index -1];
        }
        if (index > 0 && index % 2 === 0) {
          if (
              originalList[index -1] && 
              number - originalList[index -1]  > 1
            ) {
                sum += number - originalList[index -1];
            }
      } 
      return sum;
    }, 0);
  return final;
}

// sumIntervals ([[1, 2], [6, 10], [8, 15]]);
// assert (sumIntervals ([[1, 2], [6, 10], [11, 15]]) === 12, 'sumIntervals ([[1, 2], [6, 10], [11, 15]]) === 12');
assert (sumIntervals ([[1, 2], [6, 10], [8, 15]]) === 13, 'sumIntervals ([[1, 2], [6, 10], [8, 15]]) === 13');
