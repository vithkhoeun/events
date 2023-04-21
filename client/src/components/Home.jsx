// import React, {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const UserForm = () => {
//     const [user, setUser] = useState ({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     })
//     const [errors, setErrors] = useState({})
//     const navigate = useNavigate();

//     const onChangeHandler =(e) => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         })  
//     }

//     const formValidator = () => {
//         let isValid= true
//         if (user.password.length <5 ) {
//             return false
//         }
//         return isValid
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (formValidator()) {
//             axios.post('http://localhost:8000/api/users/', user)
//                 .then(res => console.log(res))
//                 .catch(err => console.log(err))
//         }
//         else{
//             setErrors({
//                 description: "Description must be at least 5 characters long"
//             })
//         }
//         navigate("/api/events")
//     }
//     return (
//     <div>
//         <h2>Add Event</h2>
//         <a style={{fontSize: 25}} href="/api/users/">Home</a>
//         {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
//         <form action="" className="col-md-6 offset-3" onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label htmlFor='firstName'>First Name: </label>
//                 <input type="text" className="form-control" name="firstName" id="firstName" onChange={onChangeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor='lastName'>Last Name: </label>
//                 <input type="text" className="form-control" name="lastName" id="lastName" onChange={onChangeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor='email'>E-mail: </label>
//                 <input type="text" className="form-control" name="email" id="email" onChange={onChangeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor='password'>Password: </label>
//                 <input type="password" className="form-control" name="password" id="password" onChange={onChangeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor='confirmPassword'>confirm Password: </label>
//                 <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" onChange={onChangeHandler}/>
//             </div>
//             <button className="btn btn-info mt-4">Submit</button>
//         </form>

//         <script>
//             document.querySelector('.button').onclick = function (){
//                 var password = document.querySelector('.password').value,
//                 confirmPassword = document.querySelector('.confirmPassword').value;

//                 if(password == ""{
//                     alert("Field cannot be empty.");
//                 }
//                 else if (password != confirmPassword) {
//                     alert("Password didnt' match, try again");
//                     return false
//                 }
//                 else if (password == confirmPassword) 
//                     return true;
                
//             }
//         </script>
//     </div>
    
//     )
// }

// export default UserForm