"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReel() {
        return 'random string';
    }
}
class Twitter extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getPhotos() {
    }
}
const camera = new Twitter("photo", "vivid", 3);
//# sourceMappingURL=abstractClass.js.map