import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
 background-color: #000;
  width: 100%;
  

  display: flex;
  align-items: center;
  justify-content: center;
}


.item {
  width: 500px;
  padding: 1em;
  margin: 1em;
  border-radius: 4px;
  border: 2px solid #eead2d;
  display: flex;
  justify-content: space-around;
  background-color: #ccc;
}


#btnContainer{
  display: flex;
  align-items: center;
  justify-content: space-around;
   
}



`;
