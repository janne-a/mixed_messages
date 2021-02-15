// create arrays to hold text strings

const stSel1 = ["1.1", "1.2", "1.3"]
const stSel2 = ["2.1", "2.2", "2.3"]
const stSel3 = ["3.1", "3.2", "3.3"]

// take one random string from each and put them together
const randomNumber = () => Math.floor(Math.random() * 3 )
console.log(stSel1[randomNumber()] + ' ' + stSel2[randomNumber()] + ' ' + stSel3[randomNumber()] )                                                           
 


