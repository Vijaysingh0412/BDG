// Function to calculate and display results
function calculateValues() {
    // Get input values
    let currentPeriod = parseInt(document.getElementById("currentPeriod").value);
    let currentNumber = parseInt(document.getElementById("currentNumber").value);
    let lastPeriod = parseInt(document.getElementById("lastPeriod").value);
    let lastNumber = parseInt(document.getElementById("lastNumber").value);

    let arr = [currentPeriod, currentNumber, lastPeriod, lastNumber];
    console.log("Number was: ", arr);

    // ----------------------------------Two Sum----------------------------------
    let TwoSum = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            if (arr[i] === 0 || arr[j] === 0) continue;
            TwoSum.push(arr[i] + arr[j]);
        }
    }

    // ----------------------------------Three Sum----------------------------------
    let ThreeSum = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            for (let k = j + 1; k < 4; k++) {
                if (arr[i] === 0 || arr[j] === 0 || arr[k] === 0) continue;
                ThreeSum.push(arr[i] + arr[j] + arr[k]);
            }
        }
    }

    // ---------------------------------- All Sum Array----------------------------------
    let finalArr = arr.concat(TwoSum, ThreeSum);
    console.log("Sum of all arr: ", finalArr);

    let digit_sums = finalArr.map(n => n.toString().split('').reduce((sum, d) => sum + parseInt(d), 0));
    console.log("Digit sums of final array:", digit_sums);

    // -----------------String Array Remove-----------------
    let total = arr.reduce((a, b) => a + b, 0);

    let index = digit_sums.indexOf(total);
    if (index !== -1) {
        digit_sums.splice(index, 1);
    }
    console.log(digit_sums);

    // ----------------------------------Remove data----------------------------------
    let remove_values = [2, 3, 6, 7, 8];
    let finall = digit_sums.filter(n => !remove_values.includes(n));
    console.log("Filtered digit sums (not in remove_values):", finall);

    // Display finall (Filtered Array) in the output section
    document.getElementById("finallResult").innerText = finall.join(", ");

    // -----------------One digit Conversion-----------------
    let totall = total.toString();
    let val;
    if (totall.length === 2) {
        val = parseInt(totall[0]) + parseInt(totall[1]);
    } else {
        val = parseInt(totall);
    }
    console.log(val);

    // Display val (One Digit Conversion) in the output section
    document.getElementById("valResult").innerText = val;
}

// Event listeners to trigger calculation on button click
// Removed input event listeners as they are no longer needed

// Initial calculation when the page loads
calculateValues();