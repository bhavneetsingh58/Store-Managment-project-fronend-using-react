import React,{useState} from 'react'
import axios from 'axios'
import {Button,FormGroup,Label,Input,FormText,Form} from 'reactstrap'
import {useForm} from 'react-hook-form'

function PostEX() {
  const {register, handleSubmit} = useForm();

  // const myAPI = "https://localhost:44314/api/Users/";

//const testAPI ="https://localhost:44314/api/Users/13?name=rahul&email=rahul@gmail.com&pass=user@123&userType=manufacturer";

// const SignUpInitValues = {
// name:'deepu',
// email:"deepu@gmail.com",
// pass:"",
// userType:"user"
// };

// const initialValue = {
//   name:'singh',
//   email:'singh3@gmail.com',
//   pass:'user@123',
//   userType:'admin',
//   userID:13
// };



// const initialIDValue = {
//   id:"13"
// }


//const [id,setId] = useState("13");


    const onSubmit = (e) => {
        console.log(e.target.files)
    } 


    // const onClick = () =>{
    // const myAPI2 = myAPI + initialValue.userID;
    // axios.put(myAPI2,initialValue)
    //   .then((response=>{
    //     console.log(response);
    //   }))
    // }
    // const [id, setID] = useState("13");

    const initValue = {
      photo: ''
    }

    const [photo,setPhoto] = useState("");

    const uploadImage = async (e) =>{
      const file = e.target.files[0];
      console.log(file);
      initValue.photo =  await convertBase64(file);
      console.log(initValue.photo);
      
    }

    const convertBase64 = (file) =>{
      return new Promise((resolve,reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () =>(
          resolve(fileReader.result)
        );
          
        fileReader.onerror =  ((error)=>{
          reject(error)
        })

      });
    }



    return (
        <div className="content">

          <Form> {/* onSubmit={handleSubmit(onSubmit(e))} */}
            <Label for="exampleFile">File</Label>
           <Input ref={register} type="file" name="file" id="exampleFile"
           onChange = {(e) => {
             uploadImage(e);
           }}
           />
             <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
           <Button >Submit</Button> 
          </Form>
        </div>
    )
}

export default PostEX;



