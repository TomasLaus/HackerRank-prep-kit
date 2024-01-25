function timeConversion(s: string): string {
    let militaryTime: string = ''; // Initialize variable to hold military time
    let militaryHour: string | number = ''; // Initialize variable to hold military hour
    // Define mappings for hour conversion to military time format
    const timeFormatPm: { [key: string]: number } = {
        '01': 13,
        '02': 14,
        '03': 15,
        '04': 16,
        '05': 17,
        '06': 18,
        '07': 19,
        '08': 20,
        '09': 21,
        '10': 22,
        '11': 23,
        '12': 12 // 12 PM remains 12 in military time
    };
    // Define mapping for hour '12' AM to '00' in military time format
    const timeFormatAm: { [key: string]: string } = {
        '12': '00'
    };

    // Check if input ends with 'PM'
    if (s.endsWith('PM')) {
        // If it's PM, convert hour to military time using the timeFormatPm mapping
        militaryHour = timeFormatPm[s.substring(0, 2)];
    } else if (s.endsWith('AM')) {
        // If it's AM
        if (s.startsWith('12')) {
            // If hour is '12', convert it to '00' using the timeFormatAm mapping
            militaryHour = timeFormatAm[s.substring(0, 2)];
        } else {
            // Otherwise, keep the hour as it is
            militaryHour = s.substring(0, 2);
        }
    }

    // Concatenate military hour with the rest of the time string
    militaryTime = militaryHour + s.substring(2, s.length - 2);

    // Return the military time string
    return militaryTime;
}
