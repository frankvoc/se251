#Python functions
def binaryToDecimal(binaryString):
    #gives binary base of 2 for conversion
    return int(binaryString, 2)

def decimalToBinary(decimalNumber):
    #Using Pythons built in bin() function to convert decimal number to binary 
    return bin(decimalNumber)

def octaToBinary(octalString):
    #Give decimal base of 8 for conversion
    decimalNumber = int(octalString, 8)
    return bin(decimalNumber)

def binaryToOct(binaryString):
    #base of 2 to convert
    decimalNumber = int(binaryString, 2)
    #Using Pythons built in oct() function to convert decimal number to octal 
    return oct(decimalNumber)

def binaryToHex(binaryString):
    decimalNumber = int(binaryString, 2)
    #Using pythons hex() to convert decimal number to hexadecimal
    return hex(decimalNumber)

def hexadecimalToBinary(hexadecimal_string):
    #Base of 16 for hexa => binary
    decimalNumber = int(hexadecimal_string, 16)
    #Using python bin() to convert decimal number to binary
    return bin(decimalNumber)

#Replace these #s for calcu here
binaryNum = "1010101111"
decimalNumber = 142
octealNumber = "77"
hexadecimalNumber = "7D"

#Perform conversions
newDeci = binaryToDecimal(binaryNum)#calls binaryToDecimal function and uses the binaryNum as an argument and stores new value in newDeci
newBinary = decimalToBinary(decimalNumber)#calls decToBinary function and uses DecimalNumber as argument
newBinaryFromOct = octaToBinary(octealNumber)#calls octToBinary and uses octeal number as argument
newOct = binaryToOct(binaryNum)#calls biarytooct and uses binary number as argument
newHexa = binaryToHex(binaryNum)#calls binaryToHex and uses binary num as argument
newBinFromHexa = hexadecimalToBinary(hexadecimalNumber)#calls function hextoBinary and uses hexNumber as argument

#Print Statements
print(f"Binary: {binaryNum} \tDecimal: {newDeci}")
print(f"Decimal: {decimalNumber} \t\tBinary: {newBinary}")
print(f"Octal: {octealNumber} \t\tBinary: {newBinaryFromOct}")
print(f"Binary: {binaryNum} \tOctal: {newOct}")
print(f"Binary: {binaryNum} \tHexadecimal: {newHexa}")
print(f"Hexadecimal: {hexadecimalNumber} \tBinary: {newBinFromHexa}")
