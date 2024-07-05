import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import * as YUP from 'yup'

const PasswordSchema = YUP.object().shape({
  passwordLength: YUP.number()
  .min(4,'Should be min of 4 characters')
  .max(16,'Should be max of 16 characters')
  .required("Length is required")
})
export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)

  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (password:number)=>{
      //
      let characterList = ''

      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';

      const numberChars = '0123456789';

      const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (upperCase) {
        characterList += upperCase;
    }
    
    if (lowerCase) {
        characterList += lowerCase;
    }
    
    if (numbers) {
        characterList += numberChars;
    }
    
    if (specialChars) {
        characterList += specialChars;
    }


  }

  const createPassword = (characters:string,
    passwordLength:number)=>{
      let result =''
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random()*characters.length);

        result += characters.charAt(characterIndex)
        
      }
      return result
    }
  
  const resetPassword = ()=>{
      //
      setPassword('')
      setIsPassGenerated(false)
      setLowerCase(true)
      setUpperCase(false)
      setNumbers(false)
      setSymbols(false)
    }

  return (
    <View>
      <Text>Appddddd</Text>
    </View>
  )
}

const styles = StyleSheet.create({})