function bucketSort(array, key) {
    key = key || function(x) { return x};
    var buckets = [],
        i, j, b, d = 0;
    for (; d < 32; d += 4) {
        for (i = 16; i--;)
            buckets[(key(array[i]) >> d) & 15].push(array[i]);
        for (b = 0; b < 16; b++)
            for (j = buckets[b].length; j--;)
                array[++i] = buckets[b][j];
    }
    return a;
}