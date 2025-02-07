# Intermittent 500 Errors in Node.js Express Server

This repository demonstrates a common issue in Node.js Express servers where intermittent 500 errors occur when handling multiple concurrent requests involving asynchronous operations.  The bug arises from improper handling of asynchronous request lifecycles, potentially leading to resource exhaustion or unhandled exceptions under high load.

## Bug Description
The provided `bug.js` file contains an Express.js server that simulates a scenario where requests experience a 5-second delay before returning a response. Under concurrent requests, this can cause issues.  The solution addresses this by using proper asynchronous request handling techniques.

## Bug Reproduction
1. Clone this repository.
2. Run `npm install` to install the required dependencies (Express.js).
3. Run `node bug.js` to start the server.
4. Open multiple browser tabs or use a tool like `wrk` or `ApacheBench` to send concurrent requests to `http://localhost:3000`. You will observe the 500 errors during high concurrent load.

## Solution
The `bugSolution.js` file provides a solution using promises or async/await to correctly manage the asynchronous operations within each request, resolving the intermittent 500 errors.  This ensures that each request is properly handled regardless of concurrent traffic.