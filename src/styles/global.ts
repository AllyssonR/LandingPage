import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --brow-dark:#2F2325;
  --brow-light:#8E5D52;
  --brown-100:#FFF2E7;
  --brown-200:#ECD6C4;
  --white:#FFF;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
body{
 font-size:100%;
 background: linear-gradient(68.15deg, var(--brow-dark) 16.62%, var(--brow-light) 85.61%);
 height: 100%;
 width: 100%;
 overflow: hidden;

}

button{
  cursor: pointer;
}
`