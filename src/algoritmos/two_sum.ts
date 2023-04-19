// 1. Two Sum, https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {}
  const result: number[] = []
  
  for (let i = 0; i < nums.length; i++) {
    let diff: number = target - nums[i]
    if (map.hasOwnProperty(diff)) {
      result.push(map[diff], i)
      return result
    } else {
      map[nums[i]] = i
    }
  }
  return result
}

/* 
  [ 2,7,11,15 ], target = 9
    ^
  x + y = target -> y = target - x, y = 9 - 7 = 2
  x = target - y

  fun twoSum (array, target)
    buffer = []
    for i <- 0 to array.length
      x = target - array[y] // 9 - 2 = 7
      if (target - x === x)
        buffer.add(i, )
*/