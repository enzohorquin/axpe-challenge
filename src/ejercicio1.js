const SERVICE_TYPE = {
    STREAM: 0,
    DOWNLOAD: 1,
}

class RegisteredUser {
    constructor(service = []) {
        this.services = service;
    }

    getTotal() {
        return this.services.reduce((acc, service) => {
            const multimediaContent = service.getMultimediaContent();
            let newAmount = service.getPrice(multimediaContent);
            if (multimediaContent.isPremiumContent()) newAmount = newAmount + service.getAdditionalFee();
            return acc + newAmount;
        }, 0);
    }
}

export default RegisteredUser;

//Function getPrice() that StreamingService and DownloadService will have to implement.
//Streaming Service
getPrice(multimediaContent) {
    return multimediaContent.getStreamingPrice();
}
//Download Service
getPrice(multimediaContent) {
    return multimediaContent.getDownloadPrice();
}
