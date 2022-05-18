// me writing a library like jQuery or fs
function useCallback(num, str, cb) {
    var newInput = str + ' ' + num + ' amount of times.';
    if (typeof cb === 'function') {
        cb(newInput);
    }
}




// me using a library like jQuery or fs
useCallback(12, "Use the item", function (input) {
    console.log(input + " that was awesome!");
})

