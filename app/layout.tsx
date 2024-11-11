"use client"
import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator, ThemeProvider  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import HeaderComponent from "@/components/header/headerComponent";
import { formFields,components } from "@/utils/authenticator_config";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

const inter = Inter({ subsets: ["latin"] });

Amplify.configure(outputs);
export default function RootLayout({ children, }: {  children: React.ReactNode; }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <Authenticator formFields={formFields} components={components}> 
          <HeaderComponent/>
          {children}
        </Authenticator> 
      </ThemeProvider>
      </body>
    </html>
  );
}
