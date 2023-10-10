export function getFutureTimestamp(seconds: number): number {
  const currentTimestamp = Date.now() // Current timestamp in milliseconds
  return currentTimestamp + seconds * 1000 // Adding N seconds in milliseconds
}
