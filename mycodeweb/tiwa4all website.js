        // How to create an open form js
// function openform()
// {
//     document.querySelector('.form').style.display="block";
// }
// function closeform(){
//     document.querySelector('.form').style.display="none"
// }
// when you click button and you want an alert message
// const button=document.querySelector('button class/id');
// button.onclick= function(){
//     alert(`
//     Fill in the Login details below. Create an account with us if you don't 
//     have an account`)
// }

        var a=prompt("Enter Name","");
        if (a!==null) {
                document.getElementById("para").innerHTML="HI! " + a.toUpperCase();
        }
                document.querySelector(".yyy").href = "Login to facebook.html?name="+a;
                
                // {console.log('User name: ' +a.toUpperCase())}
                
        function myfunction(){
                var x = document.getElementById("psw");
                var y = document.getElementById("hide1");
                var z = document.getElementById("hide2");

                if(x.type === 'password'){
                        x.type = "text";
                        y.style.display = "block";
                        z.style.display = "none";
                }
                else{
                        x.type = "password";
                        y.style.display = "none";
                        z.style.display = "block";
                }
                }
                // function handleSubmit (){
                //         var firstname=a;
                //         localStorage.setItem("textvalue", firstname);
                //         return false;
                // }
                
                
                var t = document.getElementById("maill");
                function handleSubmit (){
                                var firstname=t.value;
                                 localStorage.setItem("textvalue", firstname);
                                return false;
                        }



                var myInput = document.getElementById("psw");
                var letter = document.getElementById("letter");
                var capital = document.getElementById("capital");
                var number = document.getElementById("number");
                var length = document.getElementById("length");
                myInput.onfocus = function() {
                    document.getElementById('message').style.display = "block";
                  }
                  myInput.onblur = function() {
                    document.getElementById("message").style.display = "none";
                  }
                    // When the user starts to type something inside the password field
                    myInput.onkeyup = function() {
                        // Validate lowercase letters
                        var lowerCaseLetters = /[a-z]/g;
                        if(myInput.value.match(lowerCaseLetters)) {  
                        letter.classList.remove("invalid");
                        letter.classList.add("valid");
                        } else {
                        letter.classList.remove("valid");
                        letter.classList.add("invalid");
                        }
                        
                        // Validate capital letters
                                                
                        var upperCaseLetters = /[A-Z]/g;
                        if(myInput.value.match(upperCaseLetters)) {  
                        capital.classList.remove("invalid");
                        capital.classList.add("valid");
                        } else {
                        capital.classList.remove("valid");
                        capital.classList.add("invalid");
                        }
                    
                        // Validate numbers
                        var numbers = /[0-9]/g;
                        if(myInput.value.match(numbers)) {  
                        number.classList.remove("invalid");
                        number.classList.add("valid");
                        } else {
                        number.classList.remove("valid");
                        number.classList.add("invalid");
                        }
                        
                        // Validate length
                        if(myInput.value.length >= 8) {
                        length.classList.remove("invalid");
                        length.classList.add("valid");
                        } else {
                        length.classList.remove("valid");
                        length.classList.add("invalid");
                        }
                    }

        // const queryStr = "name=Timi&age=19&occupation=student"

        // const usp = new URLSearchParams({
        //         name: 'Timi',
        //         age: '19',
        //         occupation: 'Student'
        // });

        // const myName = usp.get('name');
        

        // console.log (`value for 'name': ${myName}`)

        // usp.set('name','Wahab')

        // for (const [key, value] of usp) {
        //         console.log(`${key} = ${value}`)
        // }


        // console.log(usp.toString())
       
        // let url = new URL('https://javascript.info/url');

        


        // const usp = new URLSearchParams({
        //         name: 'Timi',
        //         age: '45',
        // })

        // // const myName = ups.get ('name')
        // // console.log (`value for 'name': ${myName}`)

        // // ups.set ('name')