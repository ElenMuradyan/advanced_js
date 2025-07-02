async function loadJson(url) {
    try{
        const val = await fetch(url);
        const json = await val.json();
        return json;
    }catch(err) {
        throw err;
    }
}
loadJson('https://javascript.info/no-such-user.json').then(console.log)