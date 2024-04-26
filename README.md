[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

- The function implemented is dependent on the number of vertices (v) but the number of edges (e) does have an effect on runtime. Since we have an outer loop executing v times, and and inner loop executing e times, it would seem natural to say the function is bounded by $O(v * e);$ however we know for a directed unweighted graph: $0 \le e \le \frac{v(v-1)}{2},$ meaning e can be at most v; Thus the complexity of the function is bounded by $O(v^2)$

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

- The function implemented is dependent on the number of vertices (v) but the number of edges (e) does have an effect on runtime. We have a loop executing v times, and a nested loop with the outer executing v times, and and the inner executing e times. It would seem natural to say the function's complexity is $v + (v * e);$ however we know for a directed unweighted graph: $0 \le e \le \frac{v(v-1)}{2},$ meaning can be at most v; Thus the complexity is $v + (v * v)$ which can be bounded by $O(v^2)$
