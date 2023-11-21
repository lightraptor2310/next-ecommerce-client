export function countOccurrences(arr: any[]): Object[] {
    return arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  }
  
  