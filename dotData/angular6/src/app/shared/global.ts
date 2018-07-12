export class GlobalApp {
    COMPONENTID: any;

    constructor() {
        this.getInfo();
        this.COMPONENTID  = '1';
    }

    public getInfo() {
        var CURRENTUSERINFO = JSON.parse(localStorage.getItem('currentUserInfo'));
        return CURRENTUSERINFO;
      }
}