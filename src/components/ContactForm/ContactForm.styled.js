import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikMessage } from 'formik';

export const Form = styled(FormikForm)`
    border: 1.5px solid black;
    width: 480px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-weight: 500;

    input {
        display: block;
        margin-top: 6px;
        padding: 6px;
        width: 460px;
        outline: none;
        border: 1.5px solid #c8c9cc;
        border-radius: 2px;
    }

    input:focus {
        border: 2px solid #72a1ed;
        border-radius: 2px;
    }
    button {
        display: inline-block;
        width: 140px;
    }
`
export const ErrorMessage = styled(FormikMessage)`
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: normal;
    color: red;
`
