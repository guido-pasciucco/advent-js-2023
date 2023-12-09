function maxDistance(movements) {
    let move = 0;
    let stars = 0;

    for (const movement of movements) {
        if (movement === '>') move++;
        else if (movement === '<') move--;
        else stars++;
    }

    return Math.abs(move) + stars;
}