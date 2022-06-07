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

defmodule Solution do
  @spec fizz_buzz(n :: integer) :: [String.t]
  def fizz_buzz(n) do
    for i <- 1..n do
    result(i)
    end
  end

  defp result(n) when rem(n, 3) == 0 and rem(n, 5) == 0, do: "FizzBuzz"
  defp result(n) when rem(n, 3) == 0, do: "Fizz"
  defp result(n) when rem(n, 5) == 0, do: "Buzz"
  defp result(n), do: Integer.to_string(n)
  end
end
