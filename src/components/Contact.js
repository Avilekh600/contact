import React,{useState} from 'react'
import styled from 'styled-components'

export default function Contact() {

    const [user,SetUser] = useState(
        {
            name : "",
            email : "",
            number : "",
            address : "",
            message : ""
        }
    );
    
    let name,value;
    const getData = (event) =>{
      name = event.target.name;
      value = event.target.value;
      
      SetUser({
        ...user,
        [name] : value
      });

    };

    const postData = async (event)=>{
          event.preventDefault();
          const {name,email,number,address,message} = user;
        
          if(name && email && number && address && message){
               
              const response = await fetch("https://reactcontact-5a477-default-rtdb.asia-southeast1.firebasedatabase.app/ReactContact.json",
              {
                method : "POST",
                headers : {
                    "Content-Type": "Application/json"
                },
                body : JSON.stringify({
                    name,
                    email,
                    number,
                    address,
                    message,
                })
              } 
              )
              if(response){
                SetUser(
                    {
                        name : "",
                        email : "",
                        number : "",
                        address : "",
                        message : ""
                    });
                    alert("Form submtted successfully");
              }
          }
          else{
            alert("please fill all the field");
          }
    }

  return (
    <Container>
        <form method='POST'>   
        <h1>Contact Us</h1>
        <Wrap>
        <Wrap1>
            <span>Your Name</span>
            <input 
                type="text" 
                name="name" 
                id="#" 
               value={user.name}
               required
               onChange = {getData}
                placeholder='Enter Your Name'
                autoComplete='off'
            
            />
        </Wrap1>
        <Wrap2>
        <span>Your Email</span>
            <input 
                type="email" 
                name="email" 
                id="#" 
               value={user.email}
               required
               onChange = {getData}
                placeholder='Enter Your Email'
                autoComplete='off'
            
            />
        </Wrap2>
        </Wrap>
       
        <Wrap>
        <Wrap1>
            <span>Mobile Number</span>
            <input 
                type="number" 
                name="number" 
                id="#" 
               value={user.number}
               required
               onChange = {getData}
                placeholder='Enter Your Mobile Number'
                autoComplete='off'
            
            />
        </Wrap1>
        <Wrap2>
        <span>Address</span>
            <input 
                type="text" 
                name="address" 
                id="#" 
               value={user.address}
               required
               onChange = {getData}
                placeholder='Enter Your Address'
                autoComplete='off'
            
            />
        </Wrap2>
        </Wrap>
        <Wrap >
            <Wrap1>
                <span>Message</span>
                <textarea 
                name="message"
                value={user.message}
                required
                onChange = {getData}
                          placeholder='Message here...'
                           
                >
                   
                </textarea>
            </Wrap1>
        </Wrap>
        <Submit>
           <button onClick={postData}>Submit</button>
        </Submit>
        </form>
    </Container>
  )
}

const Container = styled.div`
    margin : 10vh  20vw;
    @media screen and (max-width : 768px){
        margin : 5vh  10vw;
     }
`

const Wrap = styled.div`
     display : flex;
     gap : 5rem;
     @media screen and (max-width : 768px){
        flex-direction : column;
        gap : 1rem;
     }
`

const Wrap1 = styled.div`
margin : 10px 0;

 span{
    color : rgba(0,0, 0, 0.5);
    display : flex;
 }
 input{
    width : 320px;
    border : none;
    border-bottom: 2px solid red;
    outline : none;
    padding : 10px 2px;
    font-size : 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight : bold;
 }
  textarea{
    margin : 10px 0px;
    width : 730px;
    height : 100px;
    resize : none;
    padding : 10px 5px;
    font-size : 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight : bold;
    border : 2px solid red;
    &:focus{
        outline : none;
        border : 2px solid orange;
    }
    @media screen and (max-width : 768px){
        width : 310px;
     }
  }
 
`
const Wrap2 = styled(Wrap1)`
  
`
const Submit = styled.div`
  button{
    background-color : red;
    border : none;
    border-radius : 5px;
    font-size : 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight : bold;
    cursor : pointer;
    color: white;
    padding : 5px 10px;
    &:hover{
        background : orange;
    }

  }
`