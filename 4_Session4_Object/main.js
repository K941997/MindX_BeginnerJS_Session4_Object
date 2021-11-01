
    ////////////////////////////////////!1. KHÁI NIỆM ĐỐI TƯỢNG - OBJECTS IN JAVASCRIPT:
    /*
        ICRUD:
        1. Init - Khởi tạo
        2. Create - Thêm
        3. Read - Hiện, Đọc
        4. Update - Sửa
        5. Delete - Xóa
    */

    //!INIT - KHỞI TẠO:
    var emailKey = 'email';
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
        ['ui/ux']: 'abc',   //-> ui/ux: 'abc'
        [email-Key]: 'Kay941997@gmail.com', //-> email: 'Kay941997@gmail.com'
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };
    console.log(movie);


    //!READ - HIỆN: FOR LOOP PRINT 1 OBJECT:
    //Vòng for:
    const product = {
        name: 'Xiaomi rice cooker',
        price: 1700,
        brand: 'Xiaomi',
        color: 'white',
        ['ui/ux']: 'abc',
        [email-Key]: 'Kay941997@gmail.com',
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };

    for (let i = 0; i < 1; i++){             //!-> FOR LOOP HIỆN 1 OBJECT
        console.log(product.title);
        console.log(`Price: ${product.price}`);
        console.log(`Brand: ${product.brand}`);
        console.log(`Color: ${product.color}`);
    };

    //!READ - HIỆN:
    var emailKey = 'email';
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
        ['ui/ux']: 'abc',   //-> ui/ux: 'abc'
        [email-Key]: 'Kay941997@gmail.com', //-> email: 'Kay941997@gmail.com'
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };

    console.log(movie); //-> hiện object{key: "value"}
    console.log(movie.arr); //-> hiện key mảng trong object movie
    console.log(...movie.arr); //-> hiện mảng đẹp theo spread operator

    console.log(movie['mykey']); //!-> mykey: 123,
    console.log(movie.mykey); //!-> mykey: 123,
    console.log(movie['title']);    //!Nên dùng ['']: vì khi dữ liệu ko phải user khai báo vẫn gọi được
    console.log(movie.title);
    console.log(movie['year']);
    console.log(movie.year);

    //Gọi Function trong Object:
    console.log(movie.newName());

    //Nhập key bên ngoài, in ra giá trị bên trong:
    let nhap = String(prompt('Nhập tên thuộc tính: '));
    console.log(movie[nhap]);

    //Nhập tên thuộc tính, in ra giá trị:
    let mykey = 'name';
    console.log(movie[mykey]);  //!-> name: 'Phim',


    //!UPDATE:
    var emailKey = 'email';
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
        ['ui/ux']: 'abc',   //-> ui/ux: 'abc'
        [email-Key]: 'Kay941997@gmail.com', //-> email: 'Kay941997@gmail.com'
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };

    movie['title'] = 'Nguyen Ngoc Khanh';   //-> Thay tên
    movie.title = 'Nguyen Phuong Nam';  
    console.log(movie['title']);    //-> Hiện tên
    console.log(movie.title);   
   
    movie['year'] = 20; //-> Thay tuổi
    movie.year = 25;    
    console.log(movie['year']);  //-> Hiện tuổi
    console.log(movie.year);   
    
    move['year'] ++;     //-> Tăng dần
    movie.year ++;

    //Ví dụ:
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
    };
 
    let nhapKey = prompt('What do you want to update? ');  
    let nhapValue = prompt('What is the update? ');

    movie[nhapKey] = nhapValue;    //!-> Thay đổi tên, giá trị nhập vào
 

    //!CREATE:
    var emailKey = 'email';
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
        ['ui/ux']: 'abc',   //-> ui/ux: 'abc'
        [email-Key]: 'Kay941997@gmail.com', //-> email: 'Kay941997@gmail.com'
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };        

    movie.location = 'Hanoi';  //-> Thêm location vào person:
    movie['location'] = 'Hanoi';

    movie.status = 'OK';   //-> Thêm status vào person:
    movie['status'] = 'OK';


    //!DELETE:
    var emailKey = 'email';
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4,
        mykey: 123,
        name: 'Phim',
        ['ui/ux']: 'abc',   //-> ui/ux: 'abc'
        [email-Key]: 'Kay941997@gmail.com', //-> email: 'Kay941997@gmail.com'
        newName: function(){
            this.name;
        },
        arr: [1,2,3, "Khanh"],
    };

    delete movie.rate;  //-> Xóa person.age
    delete movie['rate'];


    //!OBJECT IN ARRAY:
     let personArr = [];

     let person1 = {
        name: 'Nam',
        age: 18,
    };

    let person2 = {
        name: 'Duc',
        age: 24,
    };

    personArr.push(person1);
    personArr.push(person2);

    console.log(personArr);

    console.log(personArr[0].name); //-> person1 = {name: 'Nam',...} //-> 'Nam'
    let n = personArr[0].name;
    console.log(n); //-> 'Nam'


    //!READ: ONJECTS IN ARRAY:
    for (let i = 0; i < personArr.length; i++){
        let p = personArr[i];
        console.log(p);
        console.log(p.name);
    }


    //!OBJECT CONTAINS ARRAY:
    let person = {
        name: 'Nam',
        age: 18,
        favs: ['Netflix', 'Cafe', 'Code'],
    };

    // console.log(person.favs[2]); //-> 'Cafe'

    let favs1 = person.favs;
    console.log(favs1);

    for (let i = 0; i < favs1.length; i++){
        console.log(favs1[i]);
    }

    favs.push('Macbook');   //-> Thêm Macbook vào mảng favs:['','','']

    console.log(favs1);
    console.log(person);



    ////////////////////////////////////!2. OBJECT CONSTRUCTOR - KHỞI TẠO NHIỀU ĐỐI TƯỢNG OBJECTS CÙNG LÚC
    /*
        !QUAN TRỌNG vì Khởi tạo nhiều đối tượng 1 lúc
        Chứa Function()
    */

    function User(firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function(){
            return `${this.firstName} ${this.lastName}`;
        }
    }

    console.log(author1.getName()); //-> `${this.firstName} ${this.lastName}`
    console.log(author2.getName());
    
    let author1 = new User('Khánh', 'Nguyễn', 'Avatar1'); //-> tạo object author1 vào function User{};
    let author2 = new User('Vũ', 'Nguyễn', 'Avatar2');   //-> tạo object author2 vào function User{};

    author1.title = 'Đây là title'; //-> title: 'Đây là title' 
    author2.comment = 'Đây là 1 comment';   //-> comment: 'Đây là 1 comment'



    ////////////////////////////////////!3. OBJECT PROTOTYPE - THÊM THUỘC TÍNH THÔNG QUA PROTOTYPE - BASIC
    /*
        !QUAN TRỌNG vì Object Constructor thêm thuộc tính thông qua Object Prototype
        Object Prototype - Basic
        1. Prototype là gì?
        2. Sử dụng khi nào?
    */

    function User (firstName, lastName, avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function(){
            return `${this.firstName} ${this.lastName}`;
        }
    };

    User.prototype.className = 'F8';    //-> className: 'F8'
    User.prototype.getClassName = function(){
        return this.className;  //-> className: 'F8'
    }

    var user1 = new User('Son', 'Dang', 'Avatar1');
    var user2 = new User('Khanh', 'Nguyen', 'Avatar2');

    console.log(user1.className);   //-> className: 'F8'
    console.log(user1.getClassName());  //-> className: 'F8'



    ////////////////////////////////////!4. 












    

    ////////////////////! BÀI TẬP KHÓ:
      //4.2: Bài tập về Nhập có sẵn, nhập mới, nhập xuất vào object:
      let dictionary = {
        debug: 'The process of figuring out why your program has a certain error and how to fix it',
        done: 'When your task is complete , the only thing  you have to do is to wait for users to use it ',
        defect: 'The formal word for \'error\'',
        pm: 'The short version of PM, the person in charge of the final result of a project',
        ['ui/ux']: 'UI means User Interface, UX means User Exp, are the process',
    };
    console.log(dictionary);

    alert('Hi there, this is dev dictionary');

    var nhapKey = prompt('Enter a keyword: ');

    if (dictionary[nhapKey]) {
        alert(`${nhapKey} \n ${dictionary[nhapKey]}`);
        console.log(`${nhapKey} \n ${dictionary[nhapKey]}`);
        console.log(dictionary);

    }

    else if (nhapKey === null || nhapKey === undefined || nhapKey === ""){
        alert('Chua nhap gi ca')
        console.log('Chua nhap gi ca')
        console.log(dictionary);
    }

    else {
        var nhapNewData = prompt(`We could not find your word: ${nhapKey}, leave your explanation`);

        var nhapNewDataNumber = Number(nhapNewData);
        var nhapNewDataString = String(nhapNewData);

        if ( nhapNewDataNumber ){
            dictionary[nhapKey] = Number(nhapNewData);
        }
        else if ( nhapNewDataString ){
            dictionary[nhapKey] = String(nhapNewData);
        }

        console.log(dictionary);
    }



















  









   










  










    







    
    













    









    

        
        
    
    
    
    
        
    
    
        
    
    
    
    
    
    
    
    
    
    
        
    
    
    
    
    
        
    
    
    
    
    
    
        
    
    
    
    
        
    
    
    
    
    
    
    
    
    