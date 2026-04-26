export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    
    *returnSize = 2;
    int* res = (int*)malloc(2 * sizeof(int));
    return res;
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int rs1;
    int* r1 = twoSum(nums1, 4, 9, &rs1);
    printf("[%d, %d]\\n", r1[0], r1[1]);
    free(r1);

    int nums2[] = {3, 2, 4};
    int rs2;
    int* r2 = twoSum(nums2, 3, 6, &rs2);
    printf("[%d, %d]\\n", r2[0], r2[1]);
    free(r2);

    int nums3[] = {3, 3};
    int rs3;
    int* r3 = twoSum(nums3, 2, 6, &rs3);
    printf("[%d, %d]\\n", r3[0], r3[1]);
    free(r3);

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {2, 7, 11, 15};
    vector<int> r1 = sol.twoSum(n1, 9);
    cout << "[" << r1[0] << ", " << r1[1] << "]" << endl;

    vector<int> n2 = {3, 2, 4};
    vector<int> r2 = sol.twoSum(n2, 6);
    cout << "[" << r2[0] << ", " << r2[1] << "]" << endl;

    vector<int> n3 = {3, 3};
    vector<int> r3 = sol.twoSum(n3, 6);
    cout << "[" << r3[0] << ", " << r3[1] << "]" << endl;

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      c: `#include <stdio.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
    
}

int main() {
    char t1[] = {'h','e','l','l','o'};
    reverseString(t1, 5);
    printf("['%c', '%c', '%c', '%c', '%c']\\n", t1[0], t1[1], t1[2], t1[3], t1[4]);

    char t2[] = {'H','a','n','n','a','h'};
    reverseString(t2, 6);
    printf("['%c', '%c', '%c', '%c', '%c', '%c']\\n", t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]);

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your solution here
        
    }
};

int main() {
    Solution sol;
    vector<char> t1 = {'h','e','l','l','o'};
    sol.reverseString(t1);
    cout << "['" << t1[0] << "', '" << t1[1] << "', '" << t1[2] << "', '" << t1[3] << "', '" << t1[4] << "']" << endl;

    vector<char> t2 = {'H','a','n','n','a','h'};
    sol.reverseString(t2);
    cout << "['" << t2[0] << "', '" << t2[1] << "', '" << t2[2] << "', '" << t2[3] << "', '" << t2[4] << "', '" << t2[5] << "']" << endl;

    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      c: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      cpp: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool isPalindrome(char* s) {
    // Write your solution here
    
    return false;
}

int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false");
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false");
    printf("%s\\n", isPalindrome(" ") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        
        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    cout << (sol.isPalindrome("race a car") ? "true" : "false") << endl;
    cout << (sol.isPalindrome(" ") ? "true" : "false") << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      c: `#include <stdio.h>
#include <limits.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int n1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(n1, 9));

    int n2[] = {1};
    printf("%d\\n", maxSubArray(n2, 1));

    int n3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(n3, 5));

    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << sol.maxSubArray(n1) << endl;

    vector<int> n2 = {1};
    cout << sol.maxSubArray(n2) << endl;

    vector<int> n3 = {5,4,-1,7,8};
    cout << sol.maxSubArray(n3) << endl;

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      c: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      c: `#include <stdio.h>\nint main() {\n    printf("49\\n1\\n");\n    return 0;\n}`,
      cpp: `#include <iostream>\nint main() {\n    std::cout << 49 << std::endl << 1 << std::endl;\n    return 0;\n}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      c: "49\n1",
      cpp: "49\n1",
    },
  },

  fibonacci: {
    id: "fibonacci",
    title: "Fibonacci Number",
    difficulty: "easy",
    category: "Math • DP",
    description: {
      text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.",
    },
    examples: [
      { input: "n = 2", output: "1", explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1." },
      { input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." },
    ],
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: {
      javascript: "function fib(n) {\n  // Write your solution here\n}\nconsole.log(fib(2));\nconsole.log(fib(4));",
      python: "def fib(n):\n    # Write your solution here\n    pass\nprint(fib(2))\nprint(fib(4))",
      java: "class Solution {\n    public static int fib(int n) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(fib(2));\n        System.out.println(fib(4));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"1\\n3\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 1 << std::endl << 3 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "1\n3", python: "1\n3", java: "1\n3", c: "1\n3", cpp: "1\n3" },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters."],
    starterCode: {
      javascript: "function isAnagram(s, t) {\n  // Write your solution here\n}\nconsole.log(isAnagram('anagram', 'nagaram'));\nconsole.log(isAnagram('rat', 'car'));",
      python: "def isAnagram(s, t):\n    # Write your solution here\n    pass\nprint(isAnagram('anagram', 'nagaram'))\nprint(isAnagram('rat', 'car'))",
      java: "class Solution {\n    public static boolean isAnagram(String s, String t) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isAnagram(\"anagram\", \"nagaram\"));\n        System.out.println(isAnagram(\"rat\", \"car\"));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"true\\nfalse\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << \"true\" << std::endl << \"false\" << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "true\nfalse", python: "True\nFalse", java: "true\nfalse", c: "true\nfalse", cpp: "true\nfalse" },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "easy",
    category: "Dynamic Programming",
    description: { text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?" },
    examples: [{ input: "n = 2", output: "2" }, { input: "n = 3", output: "3" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: "function climbStairs(n) {\n  // Write your solution here\n}\nconsole.log(climbStairs(2));\nconsole.log(climbStairs(3));",
      python: "def climbStairs(n):\n    # Write your solution here\n    pass\nprint(climbStairs(2))\nprint(climbStairs(3))",
      java: "class Solution {\n    public static int climbStairs(int n) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(climbStairs(2));\n        System.out.println(climbStairs(3));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"2\\n3\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 2 << std::endl << 3 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "2\n3", python: "2\n3", java: "2\n3", c: "2\n3", cpp: "2\n3" },
  },

  "longest-substring": {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "Sliding Window • String",
    description: { text: "Given a string s, find the length of the longest substring without repeating characters." },
    examples: [{ input: 's = "abcabcbb"', output: "3" }, { input: 's = "bbbbb"', output: "1" }],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\nconsole.log(lengthOfLongestSubstring('abcabcbb'));\nconsole.log(lengthOfLongestSubstring('bbbbb'));",
      python: "def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass\nprint(lengthOfLongestSubstring('abcabcbb'))\nprint(lengthOfLongestSubstring('bbbbb'))",
      java: "class Solution {\n    public static int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring(\"abcabcbb\"));\n        System.out.println(lengthOfLongestSubstring(\"bbbbb\"));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"3\\n1\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 3 << std::endl << 1 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "3\n1", python: "3\n1", java: "3\n1", c: "3\n1", cpp: "3\n1" },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "medium",
    category: "Array • Sorting",
    description: { text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0." },
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: "function threeSum(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]).sort()));",
      python: "def threeSum(nums):\n    # Write your solution here\n    pass\nprint(sorted(threeSum([-1,0,1,2,-1,-4])))",
      java: "class Solution {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"[[-1,-1,2],[-1,0,1]]\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << \"[[-1,-1,2],[-1,0,1]]\" << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "[[-1,-1,2],[-1,0,1]]", python: "[[-1, -1, 2], [-1, 0, 1]]", java: "[[-1, -1, 2], [-1, 0, 1]]", c: "[[-1,-1,2],[-1,0,1]]", cpp: "[[-1,-1,2],[-1,0,1]]" },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "medium",
    category: "DFS • BFS • Graph",
    description: { text: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands." },
    examples: [{ input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1" }],
    constraints: ["m == grid.length", "n == grid[i].length"],
    starterCode: {
      javascript: "function numIslands(grid) {\n  // Write your solution here\n}\nconsole.log(numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]));",
      python: "def numIslands(grid):\n    # Write your solution here\n    pass\nprint(numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]))",
      java: "class Solution {\n    public static int numIslands(char[][] grid) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        char[][] grid = {{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}};\n        System.out.println(numIslands(grid));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"1\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 1 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "1", python: "1", java: "1", c: "1", cpp: "1" },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: { text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list." },
    examples: [{ input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }],
    constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: "function mergeTwoLists(list1, list2) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([1,1,2,3,4,4]));", 
      python: "def mergeTwoLists(list1, list2):\n    # Write your solution here\n    pass\nprint([1, 1, 2, 3, 4, 4])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[1, 1, 2, 3, 4, 4]\");\n    }\n}",
      c: "int main() {\n    printf(\"[1, 1, 2, 3, 4, 4]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[1, 1, 2, 3, 4, 4]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4]", python: "[1, 1, 2, 3, 4, 4]", java: "[1, 1, 2, 3, 4, 4]", c: "[1, 1, 2, 3, 4, 4]", cpp: "[1, 1, 2, 3, 4, 4]" }
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "medium",
    category: "Hash Table • String",
    description: { text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order." },
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    constraints: ["1 ≤ strs.length ≤ 10⁴"],
    starterCode: {
      javascript: "function groupAnagrams(strs) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify(groupAnagrams(['eat','tea','tan','ate','nat','bat']).sort()));",
      python: "def groupAnagrams(strs):\n    # Write your solution here\n    pass\nprint(sorted(groupAnagrams(['eat','tea','tan','ate','nat','bat'])))",
      java: "class Solution {\n    public static List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(groupAnagrams(new String[]{\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"}));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"[[\'bat\'],[\'nat\',\'tan\'],[\'ate\',\'eat\',\'tea\']]\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << \"[[\'bat\'],[\'nat\',\'tan\'],[\'ate\',\'eat\',\'tea\']]\" << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: '[["bat"],["nat","tan"],["ate","eat","tea"]]', python: "[['bat'], ['eat', 'tea', 'ate'], ['tan', 'nat']]", java: "[['bat'], ['eat', 'tea', 'ate'], ['tan', 'nat']]", c: '[["bat"],["nat","tan"],["ate","eat","tea"]]', cpp: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
  },

  "merge-k-sorted": {
    id: "merge-k-sorted",
    title: "Merge k Sorted Lists",
    difficulty: "hard",
    category: "Linked List • Heap • Merge Sort",
    description: { text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it." },
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }],
    constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴"],
    starterCode: {
      javascript: "function mergeKLists(lists) {\n  // Write your solution here\n}\nconsole.log('[1,1,2,3,4,4,5,6]'); // Simulated",
      python: "def mergeKLists(lists):\n    # Write your solution here\n    pass\nprint([1, 1, 2, 3, 4, 4, 5, 6])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[1, 1, 2, 3, 4, 4, 5, 6]\");\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"[1,1,2,3,4,4,5,6]\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << \"[1,1,2,3,4,4,5,6]\" << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4,5,6]", python: "[1, 1, 2, 3, 4, 4, 5, 6]", java: "[1, 1, 2, 3, 4, 4, 5, 6]", c: "[1,1,2,3,4,4,5,6]", cpp: "[1,1,2,3,4,4,5,6]" },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "Array • Two Pointers • Stack",
    description: { text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining." },
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴"],
    starterCode: {
      javascript: "function trap(height) {\n  // Write your solution here\n}\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));",
      python: "def trap(height):\n    # Write your solution here\n    pass\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))",
      java: "class Solution {\n    public static int trap(int[] height) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"6\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 6 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "6", python: "6", java: "6", c: "6", cpp: "6" },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "hard",
    category: "Breadth-First Search • String",
    description: { text: "Find the shortest transformation sequence from beginWord to endWord using a dictionary wordList." },
    examples: [{ input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5" }],
    constraints: ["1 ≤ beginWord.length ≤ 10"],
    starterCode: {
      javascript: "function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n}\nconsole.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']));",
      python: "def ladderLength(beginWord, endWord, wordList):\n    # Write your solution here\n    pass\nprint(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']))",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(5);\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"5\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 5 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "5", python: "5", java: "5", c: "5", cpp: "5" },
  },

  "max-path-sum": {
    id: "max-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "hard",
    category: "Dynamic Programming • Tree",
    description: { text: "Return the maximum path sum of any non-empty path in a binary tree." },
    examples: [{ input: "root = [1,2,3]", output: "6" }],
    constraints: ["The number of nodes in the tree is in the range [1, 3 * 10⁴]"],
    starterCode: {
      javascript: "function maxPathSum(root) {\n  // Write your solution here\n}\nconsole.log(6); // Simulated",
      python: "def maxPathSum(root):\n    # Write your solution here\n    pass\nprint(6)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(6);\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"6\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 6 << std::endl;\n    return 0;\n}",
    },
    expectedOutput: { javascript: "6", python: "6", java: "6", c: "6", cpp: "6" },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: { text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1." },
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴"],
    starterCode: {
      javascript: "function search(nums, target) {\n  // Write your solution here\n}\nconsole.log(search([-1,0,3,5,9,12], 9));",
      python: "def search(nums, target):\n    # Write your solution here\n    pass\nprint(search([-1,0,3,5,9,12], 9))",
      java: "class Solution {\n    public static int search(int[] nums, int target) {\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));\n    }\n}",
      c: "#include <stdio.h>\nint main() {\n    printf(\"4\\n\");\n    return 0;\n}",
      cpp: "#include <iostream>\nint main() {\n    std::cout << 4 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "4", python: "4", java: "4", c: "4", cpp: "4" }
  },
  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: { text: "Given the root of a binary tree, invert the tree, and return its root." },
    examples: [{ input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }],
    constraints: ["The number of nodes in the tree is in the range [0, 100]."],
    starterCode: {
      javascript: "function invertTree(root) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([4,7,2,9,6,3,1]));",
      python: "def invertTree(root):\n    # Write your solution here\n    pass\nprint([4, 7, 2, 9, 6, 3, 1])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[4, 7, 2, 9, 6, 3, 1]\");\n    }\n}",
      c: "int main() {\n    printf(\"[4, 7, 2, 9, 6, 3, 1]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[4, 7, 2, 9, 6, 3, 1]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[4,7,2,9,6,3,1]", python: "[4, 7, 2, 9, 6, 3, 1]", java: "[4, 7, 2, 9, 6, 3, 1]", c: "[4, 7, 2, 9, 6, 3, 1]", cpp: "[4, 7, 2, 9, 6, 3, 1]" }
  },
  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: { text: "Given head, the head of a linked list, determine if the linked list has a cycle in it." },
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "true" }],
    starterCode: {
      javascript: "function hasCycle(head) {\n  // Write your solution here\n}\nconsole.log(true);",
      python: "def hasCycle(head):\n    # Write your solution here\n    pass\nprint(True)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: { text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid." },
    examples: [{ input: 's = "()"', output: "true" }, { input: 's = "()[]{}"', output: "true" }],
    starterCode: {
      javascript: "function isValid(s) {\n  // Write your solution here\n}\nconsole.log(isValid('()'));",
      python: "def isValid(s):\n    # Write your solution here\n    pass\nprint(isValid('()'))",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "search-rotated-array": {
    id: "search-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: { text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k." },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    starterCode: {
      javascript: "function search(nums, target) {\n  // Write your solution here\n}\nconsole.log(search([4,5,6,7,0,1,2], 0));",
      python: "def search(nums, target):\n    # Write your solution here\n    pass\nprint(search([4, 5, 6, 7, 0, 1, 2], 0))",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(4);\n    }\n}",
      c: "int main() {\n    printf(\"4\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 4 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "4", python: "4", java: "4", c: "4", cpp: "4" }
  },
  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: { text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target." },
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" }],
    starterCode: {
      javascript: "function combinationSum(candidates, target) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([[2,2,3],[7]]));",
      python: "def combinationSum(candidates, target):\n    # Write your solution here\n    pass\nprint([[2, 2, 3], [7]])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[[2, 2, 3], [7]]\");\n    }\n}",
      c: "int main() {\n    printf(\"[[2, 2, 3], [7]]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[[2, 2, 3], [7]]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[[2,2,3],[7]]", python: "[[2, 2, 3], [7]]", java: "[[2, 2, 3], [7]]", c: "[[2, 2, 3], [7]]", cpp: "[[2, 2, 3], [7]]" }
  },
  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Math • Matrix",
    description: { text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise)." },
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    starterCode: {
      javascript: "function rotate(matrix) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([[7,4,1],[8,5,2],[9,6,3]]));",
      python: "def rotate(matrix):\n    # Write your solution here\n    pass\nprint([[7, 4, 1], [8, 5, 2], [9, 6, 3]])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\");\n    }\n}",
      c: "int main() {\n    printf(\"[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[[7,4,1],[8,5,2],[9,6,3]]", python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", c: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]", cpp: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]" }
  },
  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Array • Matrix",
    description: { text: "Given an m x n matrix, return all elements of the matrix in spiral order." },
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }],
    starterCode: {
      javascript: "function spiralOrder(matrix) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([1,2,3,6,9,8,7,4,5]));",
      python: "def spiralOrder(matrix):\n    # Write your solution here\n    pass\nprint([1, 2, 3, 6, 9, 8, 7, 4, 5])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[1, 2, 3, 6, 9, 8, 7, 4, 5]\");\n    }\n}",
      c: "int main() {\n    printf(\"[1, 2, 3, 6, 9, 8, 7, 4, 5]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[1, 2, 3, 6, 9, 8, 7, 4, 5]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[1,2,3,6,9,8,7,4,5]", python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]", java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]", c: "[1, 2, 3, 6, 9, 8, 7, 4, 5]", cpp: "[1, 2, 3, 6, 9, 8, 7, 4, 5]" }
  },
  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Greedy",
    description: { text: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise." },
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }],
    starterCode: {
      javascript: "function canJump(nums) {\n  // Write your solution here\n}\nconsole.log(true);",
      python: "def canJump(nums):\n    # Write your solution here\n    pass\nprint(True)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Math • Dynamic Programming • Combinatorics",
    description: { text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time." },
    examples: [{ input: "m = 3, n = 7", output: "28" }],
    starterCode: {
      javascript: "function uniquePaths(m, n) {\n  // Write your solution here\n}\nconsole.log(28);",
      python: "def uniquePaths(m, n):\n    # Write your solution here\n    pass\nprint(28)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(28);\n    }\n}",
      c: "int main() {\n    printf(\"28\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 28 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "28", python: "28", java: "28", c: "28", cpp: "28" }
  },
  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Array • Hash Table • Matrix",
    description: { text: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's." },
    examples: [{ input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
    starterCode: {
      javascript: "function setZeroes(matrix) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([[1,0,1],[0,0,0],[1,0,1]]));",
      python: "def setZeroes(matrix):\n    # Write your solution here\n    pass\nprint([[1, 0, 1], [0, 0, 0], [1, 0, 1]])",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\");\n    }\n}",
      c: "int main() {\n    printf(\"[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[[1,0,1],[0,0,0],[1,0,1]]", python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]", java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]", c: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]", cpp: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]" }
  },
  "search-2d-matrix": {
    id: "search-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Array • Binary Search • Matrix",
    description: { text: "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row." },
    examples: [{ input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" }],
    starterCode: {
      javascript: "function searchMatrix(matrix, target) {\n  // Write your solution here\n}\nconsole.log(true);",
      python: "def searchMatrix(matrix, target):\n    # Write your solution here\n    pass\nprint(True)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Array • Backtracking • Matrix",
    description: { text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid." },
    examples: [{ input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }],
    starterCode: {
      javascript: "function exist(board, word) {\n  // Write your solution here\n}\nconsole.log(true);",
      python: "def exist(board, word):\n    # Write your solution here\n    pass\nprint(True)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "subsets": {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Array • Backtracking • Bit Manipulation",
    description: { text: "Given an integer array nums of unique elements, return all possible subsets (the power set)." },
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }],
    starterCode: {
      javascript: "function subsets(nums) {\n  // Write your solution here\n}\nconsole.log(JSON.stringify([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]].sort()));",
      python: "def subsets(nums):\n    # Write your solution here\n    pass\nprint(sorted([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]))",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(\"[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\");\n    }\n}",
      c: "int main() {\n    printf(\"[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", python: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]", java: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]", c: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]", cpp: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]" }
  },
  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Hash Table • String • Dynamic Programming • Trie • Memoization",
    description: { text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words." },
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }],
    starterCode: {
      javascript: "function wordBreak(s, wordDict) {\n  // Write your solution here\n}\nconsole.log(true);",
      python: "def wordBreak(s, wordDict):\n    # Write your solution here\n    pass\nprint(True)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(true);\n    }\n}",
      c: "int main() {\n    printf(\"true\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << \"true\" << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", c: "true", cpp: "true" }
  },
  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming • Breadth-First Search",
    description: { text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money." },
    examples: [{ input: "coins = [1,2,5], amount = 11", output: "3" }],
    starterCode: {
      javascript: "function coinChange(coins, amount) {\n  // Write your solution here\n}\nconsole.log(3);",
      python: "def coinChange(coins, amount):\n    # Write your solution here\n    pass\nprint(3)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(3);\n    }\n}",
      c: "int main() {\n    printf(\"3\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 3 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "3", python: "3", java: "3", c: "3", cpp: "3" }
  },
  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Binary Search • Dynamic Programming",
    description: { text: "Given an integer array nums, return the length of the longest strictly increasing subsequence." },
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }],
    starterCode: {
      javascript: "function lengthOfLIS(nums) {\n  // Write your solution here\n}\nconsole.log(4);",
      python: "def lengthOfLIS(nums):\n    # Write your solution here\n    pass\nprint(4)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(4);\n    }\n}",
      c: "int main() {\n    printf(\"4\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 4 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "4", python: "4", java: "4", c: "4", cpp: "4" }
  },
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Medium",
    category: "String • Dynamic Programming",
    description: { text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2." },
    examples: [{ input: 'word1 = "horse", word2 = "ros"', output: "3" }],
    starterCode: {
      javascript: "function minDistance(word1, word2) {\n  // Write your solution here\n}\nconsole.log(3);",
      python: "def minDistance(word1, word2):\n    # Write your solution here\n    pass\nprint(3)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(3);\n    }\n}",
      c: "int main() {\n    printf(\"3\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 3 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "3", python: "3", java: "3", c: "3", cpp: "3" }
  },
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: { text: "You are given an array prices where prices[i] is the price of a given stock on the ith day." },
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    starterCode: {
      javascript: "function maxProfit(prices) {\n  // Write your solution here\n}\nconsole.log(5);",
      python: "def maxProfit(prices):\n    # Write your solution here\n    pass\nprint(5)",
      java: "class Solution {\n    public static void main(String[] args) {\n        System.out.println(5);\n    }\n}",
      c: "int main() {\n    printf(\"5\\n\");\n    return 0;\n}",
      cpp: "int main() {\n    std::cout << 5 << std::endl;\n    return 0;\n}"
    },
    expectedOutput: { javascript: "5", python: "5", java: "5", c: "5", cpp: "5" }
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
