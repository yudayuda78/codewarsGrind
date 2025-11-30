function rpc ($p1, $p2) {
    $win = [
        'scissors' => 'paper',
        'paper' => 'rock',
        'rock' => 'scissors',
    ];
  
    if ($p1 === $p2) {
        return "Draw!";
    }
  
    return $win[$p1] === $p2 ? "Player 1 won!" : "Player 2 won!";
}