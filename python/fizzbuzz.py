def fizzbuzz(n: int):
    for num in range(n + 1):
        if num == 0:
            continue
        if num % 3 == 0 and num % 5 == 0:
            print('FizzBuzz')
        elif num % 3 == 0:
            print('Fizz')
        elif num % 5 == 0:
            print('Buzz')
        else:
            print(num)

fizzbuzz(15)

