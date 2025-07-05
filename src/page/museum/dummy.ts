export const products = Array.from({ length: 9 }, (_, i) => ({
    id: `ID 87845${i}`,
    name: i % 3 === 0 ? "Niskala" : i % 3 === 1 ? "MOVE" : "WEARIT",
    title:
        i % 3 === 0
            ? "Couple Bnw Batch 1"
            : i % 3 === 1
                ? "Yellow American Rider Batch 1"
                : "Pink Holiday Shirt Batch 1",
    date: i % 3 === 0 ? "June 28, 2025" : i % 3 === 1 ? "May 18, 2025" : "July 02, 2025",
    collections: i % 3 === 0 ? "8 Collectors" : i % 3 === 1 ? "34 Collectors" : "4 Collectors",
    image: i % 3 === 0
        ? "https://i.pinimg.com/736x/94/d8/ea/94d8ea6875f4e704f2866b3bd9656e10.jpg"
        : i % 3 === 1
            ? "https://i.pinimg.com/736x/9e/52/36/9e52360c4ec0ac3c6ad323342349f543.jpg"
            : "https://i.pinimg.com/736x/81/8f/33/818f33e3bf78e1d5d6becce47b989897.jpg",
}));