/** 
 *  @fileOverview select named columns from collection.
 *
 *  @author       KAMINO
 *
 *  @requires     Lodash
 * 
 */

var only = function(collection, column_array) {
    let result = [];
    collection.forEach(function(d) {
        let row = _.pick(d, column_array);
        result.push(row);
    });
    return result;
};