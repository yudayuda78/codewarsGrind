def polygon_area(a, b, c, d):
    rectangle = a * b
    triangle = 0.5 * b * (c - a)
    return rectangle + triangle
    