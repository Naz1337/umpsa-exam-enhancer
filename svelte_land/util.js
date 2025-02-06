// when you let deepseek r1 cook 🔥, it thinks for 224 second for this, here hoping that this works 👏
function parseStringToNumber(input) {
    // Split into semester and session parts
    let [semesterPart, sessionPart] = input.split(/ SESSION /i);
    if (!semesterPart || !sessionPart) {
        // someone misspelt SESSION...
        if (input === "SEMESTER II SESSON 2022/2023") {
            return 2022232;
        }

        throw new Error("Invalid input format. Expected 'SEMESTER ... SESSION ...'");
    }

    // Extract semester identifier
    const semesterMatch = semesterPart.match(/^SEMESTER\s+(\S+)/i);
    if (!semesterMatch) {
        throw new Error("Invalid semester format");
    }
    const semesterStr = semesterMatch[1];

    // Convert semester to number
    let semesterNumber;
    if (/^[IVXLCDM]+$/i.test(semesterStr)) {
        semesterNumber = romanToInt(semesterStr.toUpperCase());
    } else if (/^\d+$/.test(semesterStr)) {
        semesterNumber = parseInt(semesterStr, 10);
    } else {
        throw new Error("Semester must be a Roman numeral or a digit");
    }

    if (semesterNumber < 0 || semesterNumber > 9) {
        throw new Error("Semester must be a single digit (0-9)");
    }

    // Split session part into two four-digit years
    const years = sessionPart.split('/');
    if (years.length !== 2 || years[0].length !== 4 || years[1].length !== 4) {
        throw new Error("Session must be two four-digit years separated by '/'");
    }

    const startYearStr = years[0];
    const endYearShort = years[1].slice(-2); // Last two characters

    // Combine all parts
    const combinedStr = startYearStr + endYearShort + semesterNumber.toString();
    const combinedNumber = parseInt(combinedStr, 10);

    if (isNaN(combinedNumber)) {
        throw new Error("Failed to convert combined string to number");
    }

    return combinedNumber;
}

// Roman numeral to integer converter
function romanToInt(roman) {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const current = romanMap[roman[i]];
        if (current >= prevValue) {
            total += current;
        } else {
            total -= current;
        }
        prevValue = current;
    }
    return total;
}

export default {
    parseStringToNumber,
    romanToInt,
}

// Example usage
// const input = "SEMESTER II SESSION 2023/2024";
// console.log(parseStringToNumber(input)); // Output: 2023242