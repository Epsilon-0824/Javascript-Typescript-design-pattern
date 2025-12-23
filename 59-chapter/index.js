const fetchData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000)
    })
}

// bad
const processItem = (item) => {
    item.forEach(async(item) => {
        const result = await fetchData(item);
        console.log(result);
    });
    console.log('processing complete');
}

processItem(['a', 'b', 'c']);

// good use for of
const processItem2 = async (items) => {
    for(const item of items){
        const result = await fetchData(item);
        console.log(result);
    }
    console.log('processing complete');
}

processItem2(['d', 'e', 'f'])