import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 400px;
    height: 500px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    background:#0D1117;
    box-shadow: 1px 1px 20px #ffffff20;
`

export const TextContainer = styled.div`
    display: flex;
    width: 90%;
    height: 40%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    color: #fff;
    background: transparent;



    h1 {
        font-size: 2.4em;
        font-weight: 600;
    }

`

export const InputContainer = styled.div`
    display: flex;
    width: 90%;
    height: 40%;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    gap: 20px;
    background: transparent;



    input {
        width: 100%;
        padding: 8px 2px;
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid #E2F6F6;
        color: #E2F6F6;
    }

    input::placeholder {
        color: #E2F6F6;
    }


    .button {
        background-color: #ffffff00;
        color: #fff;
        width: 8.5em;
        height: 2.9em;
        border: #3654ff 0.2em solid;
        border-radius: 11px;
        text-align: right;
        transition: all 0.6s ease;
    }   

    .button:hover {
    background-color: #3654ff;
    cursor: pointer;
    }

    .button svg {
    width: 1.6em;
    margin: -0.2em 0.8em 1em;
    position: absolute;
    display: flex;
    transition: all 0.6s ease;
    }

    .button:hover svg {
    transform: translateX(5px);
    }

    .text {
    margin: 0 1.5em
    }



`

export const ResultContainer = styled.div`
    display: flex;
    width: 400px;
    height: 500px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    background:#0D1117;
    box-shadow: 1px 1px 20px #ffffff20;
    color: #fff;


    

`

export const FormUser = styled.form`
    .avatar {
        width: 220px;
        border-radius: 50%;
    }

    .userName {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 500;
    }

    .userLogin {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        color: #848d97;
    }

    .visitUrl {
        display: block;
        margin-top: 15px;
        padding: 5px 85px;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        border-radius: 6px;
        background: #292E36;
        border: none;
        outline: none;
        cursor: pointer;
        color: #c9d1d9;
        transition: background 0.5s;
    }

    .visitUrl:hover {
        background: #32353a;
    }

    .div-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-block: 15px;
        color: #848d97;
        font-size: 0.9em;
    }

    .followers {
        margin-left: 5px;
        color: #fff;
    }

    .followers span {
        color: #848d97;
        margin-left: 5px;
    }

    .dot-follow {
        margin-left: 5px;
        color: #fff;
    }

    .company {
        display: flex;
        align-items: center;
        color: #848d97;
        font-size: 14px;
    }

    .company span {
        color: white;
        margin-left: 5px;
    }

    .location {
        display: flex;
        align-items: center;
        color: #848d97;
        font-size: 14px;
    }

    .location span {
        color: white;
        margin-left: 5px;
    }
`
    