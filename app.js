
class MakeTodoList {
    constructor(list) {
        this.todoList = list;
        this.todo = []
    }
    // add some utility fuction as static method.
    static addtoList(text) {
        let list = document.getElementById("todo-list");
        var li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        return li;
    }

    static removeFromList(text) {
        let list = document.getElementById("todo-list");
        let childs = Array.from(list.childNodes);
        let item = childs.find(i => i.innerText === text);
        return item;
    }

    //add two property methods to add and delete todo
    addTodo(text) {
        this.todo.push(text);
        this.todoList.appendChild(MakeTodoList.addtoList(text));
    }

    removeTodo(text) {
        let filter = this.todo.filter(i => i !== text);
        this.todoList.removeChild(MakeTodoList.removeFromList(text));
        this.todo = filter;
    }

    //set some dummy data to list using the setter method
    set DummyData(value) {
        this.todo = value;
        this.todo.map(i => MakeTodoList.addtoList(i));
    }

    //observe the current items by getter method
    get getList() {
        return this.todo;
    }

}

let list = document.getElementById("todo-list");

// create a object of Class

let listEle = new MakeTodoList(list);

// setter method for Dummy Data
listEle.DummyData = ["Play FootBall", "Do Homework"];

// getter method
console.log("current ...........", listEle.getList);

// add something to list

function addtodo() {
    let input = document.getElementById("input").value;
    // calling method from class
    listEle.addTodo(input);
    // getter method
    console.log("current ...........", listEle.getList);
}

// simple utility function

function getEventTarget(event) {
    event = event || window.event;
    return event.target || event.srcElement;
}

// delete some item from list

function remove() {
    let updated = document.getElementById("todo-list");
    updated.onclick = function (event) {
        var target = getEventTarget(event);
        listEle.removeTodo(target.innerText);
        console.log("current ...........", listEle.getList);
    };

}
