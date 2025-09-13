import {View, Text, TextInput, StyleSheet, TouchableOpacity, CheckBox} from "react-native";
import React, {useState} from "react"

export default page_bai02 = () => {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('8');
  const [isLower, setIsLower] = useState(false);
  const [isUpper, setIsUpper] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);


  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let characters = '';
    if (isLower) characters += lowercase;
    if (isUpper) characters += uppercase;
    if (isNumber) characters += numbers;
    if (isSymbol) characters += symbols;

    if (!characters) {
      setGeneratedPassword('');
      return;
    }

    const length = parseInt(passwordLength) || 8;
    let result = '';
    
    if (isLower) result += lowercase[Math.floor(Math.random() * lowercase.length)];
    if (isUpper) result += uppercase[Math.floor(Math.random() * uppercase.length)];
    if (isNumber) result += numbers[Math.floor(Math.random() * numbers.length)];
    if (isSymbol) result += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = result.length; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }

    result = result.split('').sort(() => Math.random() - 0.5).join('');
    setGeneratedPassword(result);
  };
  return(
    <View style={{backgroundColor: 'rgb(87 87 165)', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
      <View style={{backgroundColor: 'rgb(35 35 91)', margin: 15, borderRadius: 15, padding: 15, height: '95%', flexDirection: 'column', justifyContent: "space-between"}}>
        <View>
          <View style={{width: "100%", marginVertical: 30}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 25, fontWeight: 'bold'}}>PASSWORD{'\n'}GENERATOR</Text>
          </View>
          <View style={{backgroundColor: 'rgb(21 21 55)'}}>
            <Text style={{textAlign: 'center', lineHeight: 60, fontSize: 20, height: 60, color: 'white'}}>{generatedPassword}</Text>
          </View>
          <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.checkboxText}>Password length</Text>
            <TextInput 
              style={{backgroundColor: 'white', width: '30%', height: 40, textAlign: 'center', fontSize: 22}}
              keyboardType="numeric"
              maxLength={3}
              value={passwordLength}
              onChangeText={setPasswordLength}

            />
          </View>
          <View style={styles.checkboxMainContainer}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>Include lower case letters</Text>
              <CheckBox
                value={isLower}
                onValueChange={setIsLower}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>Include upper case letters</Text>
              <CheckBox
                value={isUpper}
                onValueChange={setIsUpper}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>Include number</Text>
              <CheckBox
                value={isNumber}
                onValueChange={setIsNumber}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>Include special symbol</Text>
              <CheckBox
                value={isSymbol}
                onValueChange={setIsSymbol}
                style={styles.checkbox}
              />
            </View>
          </View>
        </View>
        <View style={{marginBottom: 0}}>
          <TouchableOpacity style={{backgroundColor: 'rgb(87 87 165)', padding: 15, margin: 20}}
            onPress={generatePassword}
          >
            <Text style={{textAlign: "center", color: 'white', fontWeight: 'bold', fontSize: 20}}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  checkboxMainContainer: {
    marginTop: 40
  },
  checkboxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 20
  },
  checkboxText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  checkbox:{
    width: 30,
    height: 30,
  }
})