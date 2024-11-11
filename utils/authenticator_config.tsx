import HeaderComponent from "@/components/header/headerComponent";

export const components = {
    Header() {
      return (
          <HeaderComponent></HeaderComponent>
      );
    },
  }
  
export const formFields = {
    signUp: {
      email: {
        label:'E-mail',
        placeholder: 'Enter your E-mail',
        order:2,
        isRequired: true,
      },
      preferred_username: {
        label:'Username',
        placeholder: 'Enter your user name',
        order:1,
        isRequired: true,
      },
    },
  }
  