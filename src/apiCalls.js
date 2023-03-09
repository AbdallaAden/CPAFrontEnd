import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:8800/login", userCredential);//may need to rewrite the path??
    //const res = await axios.post("/controllers/loginController", userCredential);
    //console.log(userCredential.data.data.username)
    //console.log(res)
    //alert(JSON.stringify(res.data.data.username + ' Welcome to CPA Scripted'))
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {   
      console.log(JSON.stringify(err.response.data));//replace(/^["'](.+(?=["']$))["']$/, '$1'))
      alert(JSON.stringify(err.response.data).replace(/^["'](.+(?=["']$))["']$/, '$1'))
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};