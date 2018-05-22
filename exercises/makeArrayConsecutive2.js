function makeArrayConsecutive2(statues) {
    // set the min and max statues and new array
    const min = Math.min(...statues);
    const max = Math.max(...statues);
    const newArray = [];

    for(let i = min; i <= max; i++) {
        newArray.push(i);
    }
    return newArray.filter(number => !statues.includes(number)).length;
}
