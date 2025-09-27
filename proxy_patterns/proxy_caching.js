class APIProxy {
    constructor(){
        this.cache = {};
    }

    fetchData (file) {
        if(!this.cache.hasOwnProperty(file)){
            console.log(`Fetching ${file}`);
            const data = `Fetching ${file}`;
            this.cache[file] = data;
            return data;
        }else{
            return(this.cache[file]);
        }
    }
}