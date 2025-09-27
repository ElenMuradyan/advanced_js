class loadImage {
    constructor(file) {
        this.file = file;
        this.loading();
    }

    loading() {
        console.log(`loading ${this.file}`);
    }

    display() {
        console.log(`display ${this.file}`);
    }
}

class ImageProxy {
    constructor(file) {
        this.fileName = file;
        this.realImage = null;
    }

    display(){
        if(!this.realImage){
            const newImage = new loadImage(this.fileName);
            this.realImage = newImage;
        }
        this.realImage.display()
    }
}

const image = new ImageProxy("moon.jpg");

console.log("Doing other stuff...");
image.display(); // Only now loads and displays
image.display(); // Just displays, already loaded
