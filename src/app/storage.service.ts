 export class StorageService {

    constructor() { 
        if(!localStorage.getItem('id')){
            localStorage.setItem('id','1');
        }
    }

    addObject(obj) {
        let id = +localStorage.getItem('id') + 1;
        let key = "D000" + id;
        obj.key = key;
        localStorage.setItem(key, JSON.stringify(obj));
        localStorage.setItem('id', String(id));
    }

    getObject(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    removeObject(key){
        localStorage.removeItem(key);
    }

    updateItem(key,obj){
        obj.key = key;
        localStorage.setItem(key, JSON.stringify(obj));
    }

    getAllObjects() {
        let arr: any=[];
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).match(/D000+\d+/)) {
                arr.push(JSON.parse(localStorage[localStorage.key(i)]));
            }
        }
        return arr;
    }

}