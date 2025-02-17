public static int getMinSeconds(int a, List<Integer> coordinates) {
    // Sort coordinates based on absolute distance from the origin (0)
    coordinates.sort(Comparator.comparingInt(Math::abs));

    // Minimum time calculation
    int time = 0;
    for (int i = 0; i < Math.min(a, coordinates.size()); i++) {
        time += Math.abs(coordinates.get(i));
    }

    return time;
    }