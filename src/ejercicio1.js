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
            const serviceType = service.getServiceType();

            let newAmount = this.getPrice(serviceType, multimediaContent);

            if (multimediaContent.isPremium) {
                newAmount = newAmount + this.getPremiumFee(serviceType, multimediaContent);
            }
            return acc + newAmount;
        }, 0);
    }

    getPrice(serviceType, multimediaContent) {
        switch (serviceType) {
            case SERVICE_TYPE.DOWNLOAD: {
                return multimediaContent.downloadPrice;
            }
            case SERVICE_TYPE.STREAM: {
                return multimediaContent.streamingPrice;
            }
            default: {
                return 0;
            }
        }
    }

    getPremiumFee(serviceType, multimediaContent) {
        switch (serviceType) {
            case SERVICE_TYPE.DOWNLOAD: {
                return multimediaContent.additionalDownloadFee;
            }
            case SERVICE_TYPE.STREAM: {
                return multimediaContent.additionalStreamingFee;
            }
            default: {
                return 0;
            }
        }
    }
}

export default RegisteredUser;