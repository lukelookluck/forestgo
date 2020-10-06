import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "NanumSquareRound"; 
  text-align: center;
  padding: 0;
  margin: 0;

  & .cardImg {
    width: 200px;
    height: 200px;
  }

  & .header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    background-color: #fcfcfc;
  }

  & .header-title {
    margin-left: 20px;
    font-size: 17px;
  }

  & .back {
    font-size: 35px;
    margin-left: 5px;
  }

  & .paper {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 15px;
  }

  & .empty {
    height: 65px;
  }

  & .imgGrid {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  & .name {
    font-weight: bold;
    font-size: 22px;
  }
  & .date {
    text-align: right;
  }

  & .textArea {
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
  }

  & .textTop {
    margin-top: 15px;
    margin-left: 25px;
    margin-right: 25px;
  }

  & .engLabel {
    font-size: 20px;
    margin-right: 20px;
  }

  & .engName {
    font-size: 20px;
    font-weight: bold;
  }

  & .syLabel {
    font-size: 20px;
    margin-right: 20px;
  }

  & .sym {
    font-size: 20px;
    font-weight: bold;
  }
  
  & .seaLabel {
    font-size: 20px;
    margin-right: 20px;
  }

  & .sea {
    font-size: 20px;
    font-weight: bold;
  }

  & .desLabel {
    text-align: left;
    font-size: 20px;
    margin-bottom: 8px;
  }

  & .des{
    font-size: 18px;
    text-align: left;
  }

`;

export default Wrapper;
