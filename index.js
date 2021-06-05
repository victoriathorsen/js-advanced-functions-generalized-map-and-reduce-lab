const map = (array, func) => {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        let ind = array[i]
        arr.push(func(ind))
    }
    return arr
}


const reduce = (array, func, startingValue) => {
    let total
    if (startingValue) {
        total = startingValue
        for (let i = 0; i < array.length; i++) {
            total = func(array[i], total)
        }
        return total
    } else {
        total = array[0]
        for (let i = 1; i < array.length; i++) {
            total = func(array[i], total)
        }
        return total
    }
}