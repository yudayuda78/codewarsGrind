def solution(number):
    a = []
    b = []
    c = []
​
    for i in range(1, number):
        if i % 3 == 0 and i % 5 != 0:
            a.append(i)
​
        if i % 5 == 0 and i % 3 != 0:
            b.append(i)
​
        if i % 5 == 0 and i % 3 == 0:
            c.append(i)
​
    total = []
    total.append(len(a))
    total.append(len(b))
    total.append(len(c))
​
    return total