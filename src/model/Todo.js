class Todo {

    contructor(data){
        this.data = {...data};
    }

    turnOn(){
        this.data.active = !this.isResolve() && !this.data.active ;
    }

    toggleResolve(){
        this.data.resolve = !this.data.resolve;
    }

    get isResolve(){
        return this.data.resolve;
    }

    get isActive(){
        return this.data.active;
    }
}