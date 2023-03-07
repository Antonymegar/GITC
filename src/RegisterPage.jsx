import React,{useState, useRef} from "react";


 import Form from "react-validation/build/form";
 import Input from "react-validation/build/input";
 import CheckButton from "react-validation/build/button";
 import {isEmail} from "validator";

 import validator from 'validator';
 import { register } from "./auth";

 const required = (value)=>{
    if(!value){
        return (
            <div className= "alert alert-danger" role ="alert">
                This field is required !
            </div>
        );
    }
 }

 const validEmail=(value)=>{
    if(!isEmail (value)) {
        return (
            <div className= "alert alert-danger" role= "alert">
                This is not a valid email.
            </div>
        );
    }
 };

  // const validPhoneNumber = (value) => {
  //   const isValidPhoneNumber = validator.isMobilePhone(value)
  //   return (isValidPhoneNumber)
  //  }



 const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
           Your name should be between between 3 and 18 characters.
        </div>
      );
    }
  };


 const RegisterPage = () =>{
    const form = useRef();
    const checkBtn = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAdress] = useState("");
    const [successful, setSuccessful] = useState(false);
    

    const onChangename = (e) => {
        const name = e.target.value;
        setName(name);
      };
    
      
    
    const onChangeAdress = (e) => {
        const address = e.target.value;
        setAdress(address);
      };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

      const onChangePhone = (e) => {
        const phone= e.target.value;
        setPhone(phone);
      };

      const handleRegister = (e) => {
        e.preventDefault();
    
        setSuccessful(false);
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          register({name,email,phone,address})
            .then(() => {
              setSuccessful(true);
            })
            .catch(() => {
              setSuccessful(false);
            });
        }
      };
    return (
    <div className="container mt-5 md-auto">
      <div className=" card-container ms-auto me-auto p-3 shadow-lg custom-card">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
                <div className="form-group">
                <label htmlFor="username">Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangename}
                  validations={[required, vname]}
                />
              </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  // onBlur={checkEmailAvailability}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">PhoneNumber</label>
                <Input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={phone}
                  onChange={onChangePhone}
                  validations={[required ]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Address</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={address}
                  onChange={onChangeAdress}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block ">Sign Up</button>
              </div>
            </div>
          )}

          
            {/* <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              </div>
            </div> */}
          
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </div>
       </div>
    );

 };
 export default RegisterPage;