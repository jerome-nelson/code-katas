## DAY 3 - Gaps Calculation needs to be refined

* Calculate Gaps
   - Reduce FLat List into one sum
      * Iterate through list two at a time
         - If first item subtracted from second item is `1` then omit from sum
         - If previous last item is defined:
            - if first item subtracted from last item is more than one add to sum
         - If last item in list
            - get prev and subtract as nromal