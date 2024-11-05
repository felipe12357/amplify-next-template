"use client"
import { Inter } from "next/font/google";
import "./app.css";
import HeaderComponent from "@/components/header/headerComponent";
import { Authenticator, useTheme, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { signUp, SignUpInput } from "aws-amplify/auth";

const inter = Inter({ subsets: ["latin"] });
const components = {
  Header() {
    return (
        <HeaderComponent></HeaderComponent>
    );
  },
}

const formFields = {
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

const services = {
  async handleSignUp(data:any) {
    // custom username and email
    const { username, password, options } = data;
    return signUp({
      username,
      password,
      options: {
        userAttributes: {
          preferredUsername: options.userAttributes.preferred_username,
          email: username
        },
      },
    });
  },
}


export default function RootLayout({ children, }: {  children: React.ReactNode; }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authenticator services={services} formFields={formFields} components={components}> 
          <HeaderComponent/>
          {children}
        </Authenticator> 
      </body>
    </html>
  );
}
