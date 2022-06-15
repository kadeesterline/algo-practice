#
#FizzBuzz
#LeetCode Problem number 412

def fizz_buzz(n)
    answer = []

    n.times do |i|
        if (i + 1) % 15 == 0
            answer << 'FizzBuzz'
        elsif ( i + 1) % 3 == 0
            answer << 'Fizz'
        elsif (i + 1) % 5 == 0
            answer << 'Buzz'
        else 
            answer << "#{i + 1}"
        end
end
