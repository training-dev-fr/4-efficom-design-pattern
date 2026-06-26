export default class List{
    constructor(listItem){
        this.listItem = listItem;
        this.currentItem = this.listItem[0];
    }

    isNext(){
        return this.currentItem.next !== null;
    }

    next(){
        this.currentItem = this.currentItem.next;
    }

    forEach(callback){
        if(this.currentItem){
            callback(this.currentItem);
        }
        if(this.isNext()){
            this.next();
            this.forEach(callback);
        }else{
            this.currentItem = this.listItem[0];
        }
    }
}