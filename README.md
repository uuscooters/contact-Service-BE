# contact-Service-BE


#Conneting to Database MongoDB  
"mongodb+srv://contactService:12345Us@cluster0.lin5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

# API DOCUMENTATION

#Add users contact <br>
  Method : GET <br>
  Route path : /contact <br>
  Request URL : http://localhost:3000/api/v1/contact <br>
  req.params :
    { 
        "name" : "nameUsers", 
        "picture" : "pictureUsers",
        "phoneNumber" : "1230129301",
        "address" : "jalan baru"
    }
    
    
#View all contact users <br>
  Method : GET <br>
  Route path : /contact <br>
  Request URL : http://localhost:3000/api/v1/contact <br>
  
  
#Update contact users by Id <br>
  Method : PUT <br>
  Route path : /contact/:id <br>
  Request URL : http://localhost:3000/api/v1/contact/{id} <br>
  req.params :
    { _id : "019331413910" }
    
#Delete contact users by Id <br>
  Method : DELETE <br>
  Route path : /contact/:id <br>
  Request URL : http://localhost:3000/api/v1/contact/{id} <br>
  req.params :
    { _id : "019331413910" }
    
#Pagination <br>
  Method : GET <br>
  Route path : /contact/:page <br>
  Request URL : http://localhost:3000/api/v1/contact/{page} <br>
  req.params :
    { page : 9 }
    
#Search contact users by name and number <br>
  Method : GET <br>
  Route path : /contact <br>
  Request URL : http://localhost:3000/api/v1/contact?name=userName?phoneNumber=089213144242 <br>
  req.params :
    { 
    name: userName,
    phoneNumber: 089213144242
    }
