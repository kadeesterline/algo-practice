# Fizz Buzz
#########
#  LeetCode problem number 412.
#  https://leetcode.com/problems/fizz-buzz/
#  Given an integer 'n', return a string array 'answer'(1-indexed) where:
#  - answer[i] == "FizzBuzz" if i is divisible by 3 and 5
#  - answer[i] == "Fizz" if i is divisible by 3
#  - answer[i] == "Buzz" if i is divisible by 5
#  - answer[i] == i (as a string) if none of the above conditions are true
#########
# Example
# -------
#  Input: n = 5
# Output: ["1","2","Fizz","4","Buzz"
##########

def fizz_buzz(n)
    answer = []
    
    n.times do |i|
        if (i + 1) % 5 == 0 && (i + 1) % 3 == 0
            answer << 'FizzBuzz'
        elsif (i + 1) % 5 == 0
            answer << 'Buzz'
        elsif (i + 1) % 3 == 0
            answer << 'Fizz'
        else 
            answer << "#{i + 1}"
        end
    end
    answer
end