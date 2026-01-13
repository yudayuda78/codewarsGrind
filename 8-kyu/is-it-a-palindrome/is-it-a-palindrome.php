function isPalindrome(string $str): bool {
    $clean = strtolower(preg_replace('/[^a-z0-9]/i', '', $str));
    return $clean === strrev($clean);
}