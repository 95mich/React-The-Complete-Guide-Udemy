function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map(number => {
        return {val: number}
    });
}