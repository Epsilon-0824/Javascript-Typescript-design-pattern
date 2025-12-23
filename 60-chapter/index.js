const controller = new AbortController();
const signal = controller.signal;

async function getData() {
    try {
        const response = await fetch('https://api.codingthailand.com/api/version', {signal: signal});
        const data = response.json();
        return data;
    } catch (error) {
        if (error.name = 'AbortError') {
            console.log('fetch request aborted');
        }
        else{
            console.log('fetch failed: ', error);
        }
    }
}

const version = await getData();
console.log(version);

setTimeout(() => controller.abort(), 2000);