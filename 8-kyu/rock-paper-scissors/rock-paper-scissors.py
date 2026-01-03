def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    
    win = {
        ('rock', 'scissors'),
        ('scissors', 'paper'),
        ('paper', 'rock')
    }
    
    return "Player 1 won!" if (p1, p2) in win else "Player 2 won!"