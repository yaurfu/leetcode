/**
 * Total procedure
 * - a procedure is defined over the entire input domain
 * - should be used in library
 */

/**
 * Calculate the sum of 2 numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number} sum of a and b
 */
function sum(a, b) {
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('illegal arguments');
    }
    return a + b;
}

/**
 * Partial procedure
 * - a procedure is NOT defined over the entire input domain
 * - spec of a partial procedure always contains a requires clause
 * - less safe than total, use when
 *   - the context of use is local, or
 *   - enable substantial benefits (e.g. better performance) 
 */

/**
 * @param {number[]} a sorted array in ascending order
 * @param {number} x the target
 */
function binarySearch(a, x) {
    // when a is not sorted, the behavior is unknow
    // check a is sorted needs O(n) time, very slow => no need to check (partial)
}