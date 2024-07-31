const generatedNumbers = new Set<number>();

export const generateUniqueFourDigitNumber = (): number => {
    if (generatedNumbers.size >= 9000) {
        throw new Error(
            "All possible unique 4-digit numbers have been generated."
        );
    }

    let newNumber;
    do {
        newNumber = Math.floor(1000 + Math.random() * 9000);
    } while (generatedNumbers.has(newNumber));

    generatedNumbers.add(newNumber);
    return newNumber;
};