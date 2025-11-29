fn rps(p1: &str, p2: &str) -> &'static str  {
          if p1 == p2 {
        "Draw!"
    } else if (p1 == "rock" && p2 == "scissors")
        || (p1 == "paper" && p2 == "rock")
        || (p1 == "scissors" && p2 == "paper")
    {
        "Player 1 won!"
    } else {
        "Player 2 won!"
    }
}
​