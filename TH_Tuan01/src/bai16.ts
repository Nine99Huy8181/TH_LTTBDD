class Box<T>{
    private value: T;
    constructor(value: T){
        this.value = value;
    };

    get val(): T{
        return this.value;
    }

    set val(value: T){
        this.value = value;
    }
}

const box = new Box<String>('Huy');
console.log(box.val);
