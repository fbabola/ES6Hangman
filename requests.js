const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else if (!response.ok) {
        throw new Error('Unable to get puzzle data');
    };
};
