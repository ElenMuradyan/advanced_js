//created class from a function

export class Clock{
    constructor(template){
        this._template = template.template;
    }

    timer;

    render(){
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
  
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        const func = this.render.bind(this);
        this.timer = setInterval(func, 1000);
    }
}