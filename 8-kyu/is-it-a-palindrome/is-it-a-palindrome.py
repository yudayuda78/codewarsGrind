def is_palindrome(s):
    s = s.lower()
    
    palin = list(s)
    palin.reverse()
    hasil = ''.join(palin)
​
    return hasil == s
    
    
​