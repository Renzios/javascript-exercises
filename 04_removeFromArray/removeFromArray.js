const removeFromArray = function(array, ...keys) {
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < keys.length; j++)
        {
            if (array[i] === keys[j])
            {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
