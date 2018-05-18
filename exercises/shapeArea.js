// First thing I would do sketch out what an area of a polygon based upon the diagram that is provided to me.
// Once I am able to figure out the pattern by sketching out a diagram. I attempt to solve the problem.

// There are two ways to solve this problem:
// First approach is through conditional statements:
function shapeArea(n) {
    if (n === 1) {
        let area = 1;
        return area;
    } else {
        let area = shapeArea(n - 1) + (4 * (n - 1))
        return area;
    }
}
// Another approach is through a for loop:
function shapeArea(n) {
    // Set an area variable to initialize at 1 because when n = 1, we have a
    // unique use case where the area is equal to one.
    let area = 1;
    // Between each iteration..between n=1 and n=4, n increases by 4 and from
    // n = 2 and n = 3, increases by 4 on top of that so it increases by eight,
    // so it is a multiple of 4 added onto the current n that we are on.
    // With the four loop we starting with 1 instead of zero. While i < n that is
    // passed in go ahead and increase the for loop.
    for(let i = 1; i < n; i++) {
      area += 4 * i;
    }
    // return the area;
    return area;

}
