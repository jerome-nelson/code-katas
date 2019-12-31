const assert = require('./helpers');

function sum_interval(interval) {
    return interval
        .reduce((flatMap, current, index, original) => {
            // console.log(flatMap, 'start flatMap');
            // console.log(current, 'start current');
            let replace = current.length === 2 ? 
            [current[1], current[0]] : 0;
            let transformed = false;
            if (
                index !== 0 && flatMap.length > 1 && index <= original.length
                ) {
                   
                // console.log(index, 'index');
                // console.log(original, 'original');
                // console.log(flatMap, 'flatMap');
                // console.log(replace, 'replaceval');
                for (let i = 0; i < flatMap.length - 1; i+= 2) {        
                    // console.log(`condition  ${replace[1]} < ${flatMap[i]}: ${replace[1] < flatMap[i]} && ${replace[1]} > ${flatMap[i+1]}: ${replace[1] > flatMap[i+1]}`);
                    // console.log(`else condition ${replace[1]} === ${flatMap[i+1]}: ${replace[1] === flatMap[i+1]}`);
                    // console.log(`else other condition: ${replace[1]} <= ${flatMap[i]} && (${replace[0]} > ${flatMap[i]} || ${replace[0]} === ${flatMap[i]}), ${replace[1] <= flatMap[i] &&
                        // replace[0] > flatMap[i] || replace[0] === flatMap[i]}`);
                    if (
                        replace[1] < flatMap[i] && replace[1] > flatMap[i+1]
                    ) {
                        flatMap[i] = replace[0];
                        // if (replace[1] > flatMap[i+1]) {
                        //     flatMap[i+1] = replace[1];
                        //     console.log(`replace ${flatMap} = ${replace[1]}`);
                            transformed = true;
                        // }
                    } else if (replace[1] === flatMap[i+1]) {
                        // console.log(`replace value ${flatMap[i + 1]} == ${replace[1]}`);
                        flatMap[i + 1] = replace[1]; 
                        transformed = true;  
                    }
                     if (replace[1] <= flatMap[i] &&
                        replace[0] > flatMap[i] || replace[0] === flatMap[i]) {
                        // console.log(`replace end value ${flatMap[i]} === ${replace[0]}`);
                        flatMap[i] = replace[0];
                        transformed = true;
                    }
                   
                    // console.log(flatMap[i], 'flatMap iteration');
                    // console.log(flatMap, 'flatMap total');

                }
            }
            flatMap = !transformed && replace ? flatMap.concat(replace) : flatMap;
            // console.log(flatMap, 'result flatMap');
            return flatMap;
        }, [])
        .reduce((total, current_integer, index) => { 
            total = index % 2 === 0 ? 
                total + current_integer : total - current_integer;
            // console.log(total);
            return total;
            },
        0);
}

// console.log(sum_interval([[1,4],[7, 10],[3, 5]]));

// Best Cases: well behaved and sorted
assert(sum_interval([[1, 5]]) === 4, 'sumInterval([[1, 5]]) should equal 4');
assert(sum_interval([[1, 5], [6, 10]]) === 8, 'sumInterval([[1, 5], [6, 10]]) should equal 8');

// Probable Cases: overlapping intervals
assert(sum_interval([[1, 4], [1, 8]]) === 7, 'sumInterval([[1, 4], [1, 8]]) should equal 7');

// Probable Cases: unsorted list with overlapping intervals
assert(sum_interval([[10, 12], [6, 10]]) === 6, 'sumInterval([[10, 12], [6, 10]]) should equal 6');
assert(sum_interval([[1,4],[7, 10],[3, 5]]) === 7, 'sumInterval([[1,4],[7, 10],[3, 5]]) should equal 7');


// Worse Cases: one entry only or one entry among others
assert(sum_interval([[1]]) === 0, 'sumInterval([[1]]) should equal 0');
assert(sum_interval([[1],[2, 6]]) === 4, 'sumInterval([[1],[2, 6]]) should equal 4');

// Worse Cases: contains negative integers
// assert(sum_interval([[-10, 12], [-6, 10]]) === 16, 'sumInterval([[-10, 12], [-6, 10]]) should equal 16');
// assert(sum_interval([[10, 12], [6, 10]]) === 6, 'sumInterval([[10, 12], [6, 10]]) should equal 6');
// assert(sum_interval([[10, 12], [6, 10]]) === 6, 'sumInterval([[10, 12], [6, 10]]) should equal 6');
// assert(sum_interval([[10, 12], [6, 10]]) === 6, 'sumInterval([[10, 12], [6, 10]]) should equal 6');
// assert(sum_interval([[10, 12], [6, 10]]) === 6, 'sumInterval([[10, 12], [6, 10]]) should equal 6');