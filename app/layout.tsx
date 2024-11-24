"use client"
import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator, ThemeProvider  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import HeaderComponent from "@/components/header/headerComponent";
import { formFields,components } from "@/utils/authenticator_config";
import "../utils/amplify_set_config";
import ToastNotification from "@/components/notification/ToastNotification";

const inter = Inter({ subsets: ["latin"] });

//utilizando el patron composicion
export default function RootLayout({ children, }: {  children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider> 
        <Authenticator formFields={formFields} components={components}> 
           {/* al hacer esto next guarda un espacio en memoria lo q permite q estos componentes sean de tipo server */}
          <HeaderComponent/>
          {children}
         </Authenticator> 
      </ThemeProvider> 
      <ToastNotification />
      </body>
    </html>
  );
}
