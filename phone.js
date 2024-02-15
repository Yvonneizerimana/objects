

var studentCredentials=[
    {
        name: "ange",
        location: "kacyiru",
        phone:{
            namePhone:"iphone",
            price: 120000,
            color:"white",
        },
        courses:["mongo db","postgress db","mysql","javascript"],
    },
{
    name:"mugisha",
    location:"nyamirambo",
    changeLocation: function(change){
this.location=change;
return this.location;
    },
},
{
    constructor: function(age, status, grade){
        this.age=age;
        this.status=status;
        this.grade=grade;
    }
}


];

let change2=studentCredentials.changeLocation("byumba");
console.log(change2);

console.log("student name is"+studentCredentials.name+","+"phone name is"+studentCredentials.phone.namePhone);
console.log(studentCredentials.courses[0]);

