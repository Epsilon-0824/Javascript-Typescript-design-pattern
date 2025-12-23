const fetchData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000)
    })
}

const getUser = async (item) => {
    try {
        // return fetchData(item); // bad
        return await fetchData(item); // good
    } catch (error) {
        console.log(error.message);
    } finally{
        console.log('finally');
    }
}

const users = await getUser(['a', 'b', 'c']);

console.log(users);
