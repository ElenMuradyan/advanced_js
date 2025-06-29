class ModernMusicPlayer{
    playAudio (file) {
        return `ModernMusicPlayer is playing ${file} music`;
    }
}

class LegacyMusicPlayer {
    startPlaying (file) {
        return `LegacyMusicPlayer starts playing ${file} music`;
    }
}

class MusicPlayerAdapter {
    constructor (player) {
        this.player = player;
    }

    playAudio(file){
        return this.player.startPlaying(file);
    }
}

const legacy = new LegacyMusicPlayer();
const adapter = new MusicPlayerAdapter(legacy);

console.log(adapter.playAudio("moonlight"));  
// Output: LegacyMusicPlayer starts playing moonlight music


class OldPayment {
    makePayment(details){
        console.log(`Paying ${details.amount} dram`);
    }
}

class ModernPaymentWrapper {
    constructor(payment) {
        this.payment = payment;
    }

    pay(amount) {
        return this.payment.makePayment({amount});
    }
}