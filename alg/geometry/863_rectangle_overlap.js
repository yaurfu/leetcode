/**
 * https://leetcode.com/problems/rectangle-overlap/description/
 * 
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // 2 rectangles NOT overlap if
    // - bottom-left of rec1 is higher or "more right" than top-right rec2
    // - or .. rec2 is higher or "more right" than top-right rec1
    // - e.g. tr = top-right of rec1, bl = bottom left of rec2
    //  -------
    //  |  |bl|
    //  |tr|  |
    //  -------
    //
    return !(rec1[0] >= rec2[2] || rec1[1] >= rec2[3] || rec2[0] >= rec1[2] || rec2[1] >= rec1[3]);
};