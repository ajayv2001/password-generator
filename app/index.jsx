import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
    password:Yup.number()
    .min(4,'should be min of 4 characters at least')
    .max(16, 'should be max of 16 characters at most')
    .required('length is required')
})

export default function index() {
    const [password, setPassword] = useState('')
    const [isPassGenerated,setIsPassGenerated] = useState(false)
    const [lowerCase,setLowerCase] = useState(true)
    const [upperCase,setUpperCase] = useState(false)
    const [number,setNumber] = useState(false)
    const [symbols,setSymbols] = useState(false)

    const generatePassword = (passwordLength)=>{
        let characterList = ''

        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitChars = '0123456789';
        const specialChars = '!@#$%^&*()_+';

        if (upperCase) {
        characterList += upperCaseChars
        }
        if (lowerCase) {
        characterList += lowerCaseChars
        }
        if (number) {
        characterList += digitChars
        }
        if (symbols) {
        characterList += specialChars
        }

        const passwordResult = createPassword( characterList ,passwordLength)

        setPassword(passwordResult)
        setIsPassGenerated(true)



    }

    const createPassword =(characters,passwordLength)=>{
        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random()*characters.length)
            result += characters.charAt(characterIndex)
            
        }
        return result

    }

    const resetPassword =()=>{
        setPassword('')
        setIsPassGenerated(false)
        setLowerCase(true)
        setUpperCase(false)
        setNumber(false)
        setSymbols(false)

    }

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({})