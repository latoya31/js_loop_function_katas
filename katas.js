(function () {

    function oneThroughTwenty() {
        const numbers = []
        for (let i = 1; i <= 20; i = i + 1) {
            numbers.push(i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(oneThroughTwenty())

    function evensToTwenty() {
        const numbers = []
        for (let i = 2; i <= 20; i = i + 2){
            numbers.push(i)
        }
            // Your code goes below

            return numbers;
    }
    console.log(evensToTwenty())
    function oddsToTwenty() {
        const numbers = []
        for (let i = 1; i <= 19; i = i + 2){
            numbers.push(i)        }
        // Your code goes below

        return numbers;
    }
    console.log(oddsToTwenty())
    function multiplesOfFive() {
        const numbers = []
        for (let i = 5; i <= 100; i = i + 5){
            numbers.push(i)
        }

        // Your code goes below

        return numbers;
    }
    console.log(multiplesOfFive())
    function squareNumbers() {
        const numbers = []
        for (let i = 1; i <= 10; i = i + 1){
            numbers.push(i*i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(squareNumbers())
    function countingBackwards() {
        const numbers = []
        for(let i =20; i >=1; i = i - 1){
            numbers.push(i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(countingBackwards())
    function evenNumbersBackwards() {
        const numbers = []
        for(let i =20; i >=2; i = i - 2){
            numbers.push(i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(evenNumbersBackwards())
    function oddNumbersBackwards() {
        const numbers = []
        for(let i =19; i >=1; i = i - 2){
            numbers.push(i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(oddNumbersBackwards())
    function multiplesOfFiveBackwards() {
        const numbers = []
        for(let i =100; i >=5; i = i - 5){
            numbers.push(i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(multiplesOfFiveBackwards())
    function squareNumbersBackwards() {
        const numbers = []
        for(let i =10; i >=1; i = i - 1){
            numbers.push(i*i)
        }
        // Your code goes below

        return numbers;
    }
    console.log(squareNumbersBackwards())

})();