// alert("Hello world");
// console.log("Hello world");
//string, number, boolean, array, object
// console.log("123", 1 + 1);
//array
// console.log([1, 2, 3]);
// console.log({ name: "Nhất Linh", age: 18 });
//syntax
// if (false) {
//   console.log("Hello world");
// } else {
//   console.log("Bad");
// }
//falsy - 0, "", false, undefined, null, NaN
//falsy thì trả về false hết

//=== so sánh cả giá trị và kiểu dữ liệu ------ còn == thì so sánh giá trị t

//cong string
// console.log("1 + 1" + " = 2");

//template literal
// console.log(`1 + 1 = ${2}`);

//kiểm tra 1 số là chẵn hay lẻ
// var number = 10;
// if (number % 2 == 0) {
//   console.log(`${number} là số chẵn`);
// } else {
//   console.log(`${number} là số lẻ`);
// }
//----------------------------------------
// var s = "";
// for (i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     if (i == 2) {
//       s = i;
//     } else {
//       s += "-" + i;
//     }
//   }
// }
// console.log(s);
//-----------------------------------------------
// var a = 1;
// var b = 5;
// var sum = 0;
// for (i = a; i <= b; i++) {
//   if (i % 2 != 0) {
//     sum += i;
//   }
// }
// console.log(`tong cua cac so le tu ${a} den ${b} bang ${sum}`);
//---------------------------]
//3 cach goi function
//params: msg, args: Hello world
// function print(msg) {
//   console.log(msg);
// }
// print("Hello world");
// print("Hello Linh");
//------------
//funciton expression
// function k co ten la anonymous
// var print = function (msg) {
//   console.log(msg);
// };
// print("Hello Linh");
// print("Hello world");
//--------------------
//arrow funcition
// var print = (msg) => {
//   console.log(msg);
// };
// print("Hello Linh");
// print("Hello world");
//------------
// var add = (a, b) => {
//   return a + b;
// };
// console.log(add(6, 4));
//----------------
//array
// var array = [1, 2, 3, 4, 5, "hello", { name: "Linh" }];
// console.log(array);
//---------------------
// dynamic type language
// var a = 10;
// a = "hello";
//-----------------
//tinh so pt trong mang
// var array = [1, 2, 3, 4];
// console.log(array.length);
//------------------
//them pt vao cuoi mang
//array.push tra ve so luong phan tu moi sau khi them
// var array = [1, 2, 3, 4];
// console.log("new length:", array.push(5, "hello"));
// console.log(array);
//------------------
//Them phan tu vao dau mang
// var array = [1, 2, 3, 4];
// console.log("new length:", array.unshift(5, "hello"));
// console.log(array);
//------------
//Remove phan tu cuoi mang
// var array = [1, 2, 3, 4];
// console.log("Pt vua remove:", array.pop());
// console.log("Pt vua remove:", array.pop());
// console.log(array);
//---------------------
//Remove dau mang
// var array = [1, 2, 3, 4];
// console.log("Pt vua remove:", array.shift());
// console.log("Pt vua remove:", array.shift());
// console.log(array);
//--------------------------
// var array = [1, 2, 3, 4, 5];
// for (i = 1; i < array.length + 1; i++) {
//   console.log(i);
// }
//----------------------------
// var arr = [1, 2, 3, 4, 5];
// var i = 0;
// var j = arr.length - 1;
// var array = [];
// while (true) {
//   if (i < j) {
//     array.push([arr[i], arr[j]]);
//   } else if (i == j) {
//     array.push([arr[i]]);
//   } else {
//     break;
//   }
//   i++;
//   j--;
// }
// console.log(array);
//------------------------------------
// var array = ["Hello", 3, "1", 4, 56];
// var result = "";
// for (i = 0; i < array.length; i++) {
//   if (typeof array[i] == "number") {
//     result.push([array[i]]);
//   }
// }
// console.log(result);
//-----------------------------------------
// var array = ["bao", "thuan", "an", "minh", "toan", "ly"];
// var result = [];
// for (i = 0; i < array.length; i++) {
//   if (array[i].length >= 3 && array[i].length <= 5 && array[i].includes("a")) {
//     result.push(array[i]);
//   }
// }
// console.log(result);
//----------------------------------------
// var array = [1, 2, 3, "hello"];
//mỗi phần tử ngăn các với nhau bằng dấu phẩy
// console.log(array.toString());
//mỗi phần tử ngăn cách với nhau bằng dấu 'bất kỳ'
// console.log(array.join("-"));
//----------------------------------------------
//lấy những mảng con trong mảng ban đầu
//không lấy giá trị tại end
// var array = [1, 2, 3, "hello"];
// console.log(array.slice(0, 2));
//slice 1 lấy từ vị trí 1 đến cuối mảng luôn
//-------------------------------------
//lấy 2 pt cuối mảng
var array = [1, 2, 3, 4, "hello"];
// var newArray = array.slice(-2);
var newArray = array.slice(1, -1);
console.log(newArray);
//------------------------------
//Thêm giữa mảng
//ngay vị trí index 0, xóa 0pt, thêm vào maria
// var array = [1, 2, 3, 4, "hello"];
// array.splice(0, 0, "maria");
// console.log("cac pt da xoa la: ", array.splice(0, 2));
// console.log(array);
//--------------------------------------------
//lấy mảng gồm các pt nằm giữa mảng
//[8]
//[8,7]
// var arr = [2, 3, 5, 6];
// var startIndex = Math.round(arr.length / 2) - 1;
// const result = arr.slice(startIndex, -startIndex);
// console.log(result.join("-"));
//--------------------------------------
//in xen ke chan le
// var array = [1, 2, 3, 5, 2, 10];
// var result = [];
// for (i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     array.unshift(result[i]);
//   }
// }
// console.log(result);
//-----------------------
//Lap lai so 1 5 lan
// var myWord = "1";
// console.log("1".repeat(5));
//------------------------
//upper viet hoa, lower viet thuong
// var myWord = "hello";
// console.log("1".toLowerCase);
// console.log("1".toUpperCase);
//--------------------------
//kiem tra co ton tai chu hay  khong
// var myWord = "hello";
// console.log(myWord.includes("o"));
//-----------------------------
//IndexOf: Vị trí xuất hiện đầu tiên
// var myString = "Hello world";
// console.log(myString.indexOf("o"));
//Bắt đầu tìm từ vị trí số 5
// console.log(myString.indexOf("o", 5));
//Vị trí xuất hiện đầu tiên từ dưới lên
// console.log(myString.lastIndexOf("o"));
//Không tìm thấy trả về -1
//------------------------------
//Substring: Giống slice nhưng áp dụng cho chuỗi
//Không lấy giá trị âm
// var myString = "Hello world";
// console.log(myString.substring(2, 5));
//-----------------------------------
//Lấy vị trí index, lấy bao nhieu ký tự
// var myString = "Hello world";
// console.log(myString.substr(0, 5));
//----------------------------------
//Loại bỏ khoảng trắng
// let text = "     Hello World!     ";
// let result = text.trim();
// console.log(result.length);
// console.log(text.length);
//---------------------
// var coupon = "MARIA6969";
//M*********9
// var len = coupon.length;
// var hiddenCoupon = coupon[0] + "*".repeat(len - 2) + coupon[len - 1];
// console.log(hiddenCoupon);
//-------------------------
//chuyen chu hoa sang chu thuong va chuyen chu thuong sang chu hoa
// var myString = "AbcA";
// var string = myString.split("");
// for (i = 0; i < string.length; i++) {
//   if (string[i] == string[i].toLowerCase()) {
//     string[i] = string[i].toUpperCase();
//   } else if (string[i] == string[i].toUpperCase()) {
//     string[i] = string[i].toLowerCase();
//   }
// }
// console.log(string.join(""));
//----------------------------
// Exam 1: Tìm ra ký tự không lặp lại đầu tiên trong chuỗi.
// Input: "cbcbdde"
// Output: "e"
// var mystring = "cbcbddexxxaep";
// for (i = 0; i < mystring.length; i++) {
//   var word = mystring.charAt(i);
//   if (mystring.indexOf(word) == i && mystring.indexOf(word, i + 1) == -1) {
//     var result = word;
//   }
// }
// console.log(result);
//--------------------------------
// Exam 2: Đảo ngược các chữ cái và từ.
// Input: "I evol uoy os !hcum"
// Output: "I love you so much!"
// var myString = "!hcum os uoy evol I";
// var split = myString.split("");
// var reverse = split.reverse(myString);
// var result = reverse.join("");
// console.log(result);
//---------------------------------------------
// Exam 3: Kiểm tra 2 chuỗi có phải là đảo ngược của nhau hay không.
// Input: str1 = 'abcd', str2 = 'dabc'
// Output: true
// var str1 = "abcd";
// var str2 = "dcba";
// var split = str1.split("");
// var reverse = split.reverse();
// var result = reverse.join("");
// console.log(result == str2);
//---------------------------------------------
// Exam 4: Kiểm tra 2 chuỗi có phải là đảo ngữ của nhau hay không.
// Input: str1 = 'abcd', str2 = 'dabc'
// Output: true

// Input: str1 = "abcd", str2 = "dabe"
// Output: false
// var str1 = "abcde";
// var str2 = "dcab";
// for (i = 0; i < str1.length; i++) {
//   var pos1 = str1.charAt(i);
//   var pos2 = str2.charAt(i);
//   if (
//     str1.indexOf(pos1) == str2.indexOf(pos2) ||
//     str1.indexOf(pos1) == str2.indexOf(pos2, i + 1)
//   ) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
//-------------------------------------------
// Exam 4: Đếm số lượng từ của họ và tên lót.
// Input: "Nguyen Huynh Hoa"
// Output: 2

// Input: "Nguyen Hoang Thao Quyen"
// Output: 3
// var myString = "Nguyen Hoang Thao Quyen";
//----------------------------------------
// Exam 5: Format tên theo định dạng. Chữ cái đầu viết thường, các chữ cái còn lại viết hoa và
// loại bỏ các khoảng trắng dư thừa.

// Input: " NguYen vAn   tEO"
// oUTPUT: "nGUYEN vAN tEO"
// var string = "  NguYen vAn   tEO";
// var result = string.trim();
// console.log(result);
//---------------------------------\
//Ban muon lay thong tin gi cua user-->"name", "age"
// var user = {
//   name: "David",
//   age: 18,
//   address: {
//     district: "Thu Duc",
//     ward: "Tang Nhon Phu",
//   },
// };
// var inputValue = "name";
//dot operator
//[]

//Lấy giá trị key trong object, key không tồn tại -> trả undefined
// console.log(user[inputValue]);
//-----------------------------
//Lay danh sach key trong object
// var user = {
//   name: "David",
//   age: 18,
//   address: {
//     district: "Thu Duc",
//     ward: "Tang Nhon Phu",
//   },
// };
// var keys = Object.values(user);
// var keys = Object.keys(user);
// var keys = Object.keys(user.address);

// console.log(keys);
//---------------------------------
//Them gia tri vao object
// var user = {
//   name: "David",
//   age: 18,
//   address: {
//     district: "Thu Duc",
//     ward: "Tang Nhon Phu",
//   },
// };
// user["boyfriend"] = "Vu";
// console.log(user);
//------------------------
//check co key trong Object
// var user = {
//   name: "David",
//   age: 18,
//   address: {
//     district: "Thu Duc",
//     ward: "Tang Nhon Phu",
//   },
// };
// console.log("crush" in user);
// console.log("age" in user);
//string, number, boolean, undefined, null, NaN
//---------------------------------
//Kiem tra value trong object, co value nao ton tai chu ="a"
// var user1 = {
//   name: "David",
//   age: 18,
//   address: "Thu Duc",
// };
// var user2 = {
//   name: "Ken",
//   age: 18,
//   address: "Thu Duc",
// };
// const checkAInObj = (obj) => {
//   var values = Object.values(obj);
//   for (i = 0; i < values.length; i++) {
// check string
//     if (typeof values[i] == "string") {
//       if (values[i].toLowerCase().includes("a")) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// console.log(checkAInObj(user1));
// console.log(checkAInObj(user2));
//-------------------------------------------
// var numbers = [1, 2, 3, 4];
//[2,4,6,8]
// var result = [];
// for (i = 0; i < numbers.length; i++) {
//   result.push(numbers[i] * 2);
// }
// console.log(result);
//-----------------------------------------
//map
//duyet qua cac phan tu cua mang
//ket qua sau return se push vao mang moi
//so luong phan tu luon bang mang ban dau
// var numbers = [1, 2, 3, 4];
// var result = numbers.map((val, index) => {
//   return val - 1 == true;
// });
// console.log(result);
//1 == true
//0, 2, 3 == false
//lan lap 1: val = 1, index = 0, push 2 vao mang moi ==>[2]
//lan lap 2: val = 2, index = 1, push 4 vao mang moi ==>[2, 4]
//lan lap 3: val = 4, index = 3, push 8 vao mang moi ==>[2, 4, 6, 8]
//---------------------------------------
//filter: loc ra cac phan tu thoa man dk gi do
// var numbers = [1, 2, 3, 10];
// var result = numbers.filter((val, idx) => {
//   return val % 2 == 0;
// });
// console.log(result);
//lan lap 1: val = 1, index = 0, false > neu sau return = false, k lam gi ==>[]
//lan lap 3: val = 3, index = 0, true > neu sau return = true, push val vao mang moi = [3]
//-----------------------------------
//filter cac user co tuoi >=18
// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     age: 10,
//   },
//   {
//     id: 2,
//     name: "User 2",
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "User 3",
//     age: 20,
//   },
// ];
// var result = users.filter((val, idx) => {
//   return val["age"] >= 18;
// });
// var rs = result.map((val, idx) => {
//   return val.name;
// });
// console.log(rs);
//-----------------------------------------
//in ra ten cac user co chua chu "e",["user - age"]
// const users = [
//   {
//     id: 1,
//     name: "David",
//     age: 10,
//   },
//   {
//     id: 2,
//     name: "Beckham",
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "Messi",
//     age: 20,
//   },
//   {
//     id: 4,
//     name: "Cr7",
//     age: 20,
//   },
// ];
// var result = users
//   .filter((val, idx) => {
//     return val.name.includes("e");
//   })
//   .map((val, idx) => {
//     return `${val.name} - ${val.age}`;
//   });
// console.log(result);
//-------------------------------------------
//TH1 k có initialValue, lop 1 acc = array[0]
//reduce -  tich tru, tich luy
//tong mang
//accumulator
var numbers = [1, 2, 3, 4];
var total = numbers.reduce((acc, val, idx) => {
  return val + acc;
});
console.log(total);
//luu va tich tru trong bien acc
//lop 1: acc = 1, val = 2, idx = 1, acc = 3
//lop 2: acc = 3, val = 3, idx = 2, acc = 6
//lop 3: acc = 6, val = 4, idx = 3, acc = 10
//----------------------------------------------
//TH2 co initialValue, acc = initialValue
//truong hop co initiaValue = >
// var numbers = [1, 2, 3, 4];
// var total = numbers.reduce((acc, val, idx) => {
//   return val + acc;
// }, 30);
// console.log(total);
//lop 1: acc = 30, val = 1, idx = 0, acc(return) = 31
//lop 2: acc = 31, val = 2, idx = 1, acc(return) = 33
//lop 3: acc = 33, val = 3, idx = 2, acc(return) = 36
//lop 4: acc = 36, val = 4, idx = 3, acc(return) = 40
//----------------------------------
// var numbers = [1, 2, 3, 4];
// var total = numbers.reduce((acc, val, idx) => {
//   return 0;
// }, 30);
// console.log(total);
//lop 1: acc = 30, val = 1, acc(return) =0
//ket qua sau cung la ket qua của acc
//--------------------------------------
//getElementByClassName luon tra ve mang
// var hello = document.getElementsByClassName("hello")[0]; //[]
//lay 1 cai dau tien
// var hello = document.querySelector(".hello");
//Lay tat ca co class Hello
// var hello = document.querySelectorAll(".hello")[0];
// console.log(hello[0].textContent); //Lay text DOM
//--------------------------------
//goi dom cua button
// var btn = document.querySelector(".clickme");
//add su kien
// btn.addEventListener("click", function () {
// hello.textContent = "HiHi";
//   hello.innerHTML = "<p>Hello</p>";
// });
// console.log(hello.textContent);
//---------------------------
//Lay noi dung trong o input
// var input = document.querySelector("input");
//click me
// var btn = document.querySelector("button");
//thay noi dung h2
// var title = document.querySelector("h2");

// btn.addEventListener("click", function () {
//   var inputValue = input.value;
//   title.textContent = inputValue;
// });
//-------------------------------------------
// var form = document.querySelector("form");

// var username = document.querySelector(".username");
// var password = document.querySelector(".password");
// var login = document.querySelector("h2");

// form.addEventListener("submit", function (e) {
//   //mac dinh form khi submit se reload lai trang
//   //k cho reload nua, loai bo mac dinh
//   e.preventDefault();
//   var usernameValue = username.value;
//   var passwordValue = password.value;
//   console.log(usernameValue);
//   console.log(passwordValue);
//   if (!usernameValue || !passwordValue) {
//     alert("can dien thong tin");
//     login.style.backgroundColor = "red";
//   } else {
//     if (usernameValue === "admin" && passwordValue === "admin") {
//       alert("Welcome admin");
//     } else {
//       alert("Welcome guest");
//     }
//     login.style.backgroundColor = "green";
//     login.classList.add("active"); //them class

//     username.value = "";
//     password.value = "";
//   }
// });
//------------------------------

//RESPONSIVE
// var btnMenu = document.querySelector(".btn-menu");
// var nav = document.querySelector("nav");
// document.addEventListener("click", function (e) {
//   var onClickNav = e.target.closest("nav");
//   var onClickBtnMenu = e.target.closest(".btn-menu");
//   if (!onClickNav) {
//     nav.classList.remove("active");
//   }
//   if (onClickBtnMenu) {
//     nav.classList.add("active");
//   }
// });
var fullName = "Paul Steve Panakkal".split(" ");
lastName = fullName[fullName.length - 1];
fstringname = fullName.join(" ");
hifstringname = fstringname.length;
fsname = lastName.length;
hname = fstringname.slice(0, hifstringname - fsname);
console.log(hname);
