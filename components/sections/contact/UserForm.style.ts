// TODO: Complete this file's migration to this project

// import { colors, device } from "../../styles/global";
// import { IFormWrapper, IStyledInput } from "../../types/Form.type";
import styled from "@emotion/styled";

export  const device = {
  mobile: "min-width: 320px",
  mobileL: "min-width: 480px",
  tablet: "min-width: 768px",
  laptop: "min-width: 992px",
  desktop: "min-width: 1200px"
}

const colors = {
  text: "black",
  button: "",
  border: "",
}
export const StyledLabel = styled.label`
  /* color: ${colors.text};
  @media(${device.mobile}) {
    padding: 0.3em 0;
  }
  @media(${device.tablet}) {
    flex-direction: row ;
    padding: 0.4em;
  }
  @media(${device.laptop}) {
    flex-direction: row ;
  }
  @media(${device.desktop}) {
    flex-direction: row ;
  } */
`;
export interface IStyledInput {
  border?: string | boolean;
}
export interface IFormValues {
  company: string;
  name: string;
  phone: string;
  email: string;
}
export interface IUserForm {
  country: string | undefined;
  submitted: boolean | undefined;
  setSubmitted: any;
  setFormData: any;
  formData: any;
  setCompany: any;
  setName: any;
  setPhone: any;
  setEmail: any;
}
export interface IFormWrapper {
  display?: string;
  id?: string;
}
export const StyledError = styled.div`
  color: red;
  font-size: small;
  max-width: 26em;
  margin: 0 0.65em;
  padding: 0 0.65em;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0.4em;
  margin-bottom: 0.65rem;
  /* @media(${device.mobile}) {
    flex-direction: column ;
    padding: 0em  0em;
  }
  @media(${device.tablet}) {
    flex-direction: row ;
    padding: 0.4em;
  }
  @media(${device.laptop}) {
    flex-direction: row ;
  }
  @media(${device.desktop}) {
    flex-direction: row ;
  }
  & div.react-tel-input {
    & input.phoneInput {
      border-radius: 0.2em !important;
      font-size: 1rem !important;
      height: 2.6em !important; 
      width: 14.4rem;
      @media(${device.mobile}) {
        width: 19.2rem;
      }
      @media(${device.mobileL}) {
        width: 17.4rem;
      }
    }
    & div.phoneButtonInput  {
    }
  } */
`

export const StyledInput = styled.input<IStyledInput>`
  width: 13rem;
  /* border: 1px solid ${colors.border}; */
  font-size: 1rem;
  padding: 0.65em;
  border-radius: 0.2em;
  outline: none;
  background-color: white;
  /* border: ${(props) => (props.border ? `1px solid red` : `1px solid ${colors.border}`)}; */
  &:focus {
    outline: none;
    /* border: 1px solid ${colors.button}; */
  }
  @media(${device.mobile}) {
    width: 17.8rem;
  }
  @media(${device.mobileL}) {
    width: 16rem;
  }
  `;

export const FormWrapper = styled.div`
  padding: 2em;
  border-radius: 0.28em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media(${device.mobile}) {
    margin: 0;
    padding: 0em;
    width: 100%;
  }
  @media(${device.mobileL}) {
    margin: 0;
    padding: 0em;
    width: 100%;
  }
  @media(${device.tablet}) {
    flex-direction: row ;
    padding: 0.4em;

  }
  @media(${device.laptop}) {
    flex-direction: row ;
  }
  @media(${device.desktop}) {
    flex-direction: row ;
  } */
  form{
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;

    /* @media(${device.mobile}) {
      align-items: flex-start;
    }
    @media(${device.tablet}) {
      align-items: end;
    }
    @media(${device.laptop}) {
      align-items: end;
    }
    @media(${device.desktop}) {
      align-items: end;
    } */
  }
`;
export interface IStyledParagraph {
  useCase?: string;
}
export const StyledParagraph = styled.p<IStyledParagraph>`
  text-align: center;
  /* @media(${device.mobile}) {
    display: ${(props) => (props.useCase === "displaySubmittedInfo"? `inline` : `none`)};
  }
  @media(${device.tablet}) {
    display: inline;
  } */
`