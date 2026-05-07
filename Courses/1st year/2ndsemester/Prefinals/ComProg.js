const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      {
        type: "mc",
        q: "What is an enumeration (enum) in Java?",
        o: [
          "A data type that contains a fixed set of constants",
          "A data type that contains a dynamic list of values",
          "A method used to iterate over arrays",
          "A class that stores key-value pairs"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "When are enums best used?",
        o: [
          "When the values change frequently at runtime",
          "When all possibilities of values or instances of the class are known",
          "When working with dynamic user input only",
          "When storing large amounts of numeric data"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is a common example of when enumerations are used?",
        o: [
          "Storing database records",
          "Parsing JSON data",
          "Compass directions",
          "Managing network connections"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What keyword is used to create an enumeration in Java?",
        o: [
          "const",
          "enum",
          "static",
          "final"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Given the enum declaration: public enum Period { PRELIM, MIDTERM, PREFINAL, FINAL; }, which of the following correctly assigns an enum constant to a variable?",
        o: [
          "Period p = MIDTERM;",
          "Period p = Period.MIDTERM;",
          "Period p = new Period(MIDTERM);",
          "Period p = Period(MIDTERM);"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the advantage of using enums over numeric or String constants?",
        o: [
          "Enums allow more values to be stored",
          "Enums are faster to process at runtime",
          "An invalid enum value cannot be created without a compiler error",
          "Enums automatically sort their values alphabetically"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "An enumeration type such as Period is a:",
        o: [
          "Primitive data type",
          "Interface",
          "Class",
          "Abstract method"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The enum constants in Java act as:",
        o: [
          "Static fields of the class only",
          "Objects instantiated from the enum class",
          "Primitive integer values",
          "String literals"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM, what does p.toString() return?",
        o: [
          "\"Period.MIDTERM\"",
          "1",
          "\"MIDTERM\"",
          "\"midterm\""
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM in the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }, what does p.ordinal() return?",
        o: [
          "0",
          "1",
          "2",
          "3"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the ordinal() method return for the first constant in an enum?",
        o: [
          "1",
          "-1",
          "0",
          "The name of the constant"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM, what is the result of p.equals(Period.PRELIM)?",
        o: [
          "true",
          "false",
          "0",
          "A compiler error"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM, what does p.compareTo(Period.FINAL) return?",
        o: [
          "A positive integer",
          "Zero",
          "A negative integer",
          "null"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM, what does p.compareTo(Period.PRELIM) return?",
        o: [
          "Zero",
          "A negative integer",
          "A positive integer",
          "null"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Given p = Period.MIDTERM, what does p.compareTo(Period.MIDTERM) return?",
        o: [
          "A positive integer",
          "A negative integer",
          "null",
          "Zero (0)"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What type of methods are toString(), ordinal(), equals(), and compareTo() in an enum?",
        o: [
          "Static methods",
          "Abstract methods",
          "Non-static (instance) methods",
          "Constructor methods"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the static method valueOf() do when used with enumerations?",
        o: [
          "Returns an array of all enum constants",
          "Accepts a string parameter and returns an enumeration constant",
          "Returns the ordinal value of an enum constant",
          "Compares two enum constants"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does Period.valueOf(\"PRELIM\") return?",
        o: [
          "The string \"PRELIM\"",
          "The integer 0",
          "The PRELIM enum constant",
          "An array of all Period constants"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the static method values() return when used with an enum?",
        o: [
          "The number of constants in the enum",
          "The first constant in the enum",
          "An array of the enumerated constants",
          "A string of all constants concatenated"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "How many elements does Period.values() return for the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }?",
        o: [
          "3",
          "4",
          "2",
          "1"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Where can an enumerated type be declared in Java?",
        o: [
          "Only inside a method body",
          "Only in its own file",
          "In its own file, or within a class but not within a method",
          "Only at the top of the main method"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "When declaring an enum in its own file, what must the filename match?",
        o: [
          "The name of the first enum constant",
          "The type name of the enum, with a .java extension",
          "The name of the package",
          "The name of the main class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the EnumDemo program, what method is used to convert the user's string input to an enumeration value?",
        o: [
          "ordinal()",
          "toString()",
          "values()",
          "valueOf()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "In the EnumDemo program, what is the purpose of calling .toUpperCase() on the user's input?",
        o: [
          "To format output for display",
          "To ensure the input matches the uppercase enum constant names",
          "To remove special characters",
          "To convert the input to an integer"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the EnumDemo program, if the user enters \"Midterm\", what is the value of position after calling pd.ordinal()?",
        o: [
          "0",
          "1",
          "2",
          "3"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the output of 'So its period number is ' + (position + 1) when the user selects MIDTERM?",
        o: [
          "So its period number is 1",
          "So its period number is 2",
          "So its period number is 3",
          "So its period number is 0"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Enumerations can be used to control which Java structure?",
        o: [
          "A for loop",
          "A while loop",
          "A switch structure",
          "A try-catch block"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the EnumDemo2 program with enum Size { REGULAR, LARGE, PARTY }, if s = Size.LARGE, what is printed?",
        o: [
          "Price of pizza is 381.00",
          "Price of pizza is 799.00",
          "Price of pizza is 602.00",
          "Price of pizza is 0.00"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does 'type-safe' mean in the context of enums?",
        o: [
          "The enum values are automatically converted between types",
          "The data type allows only appropriate behaviors",
          "The enum cannot be used in switch statements",
          "The enum values are stored as primitive integers"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Can methods and additional fields be added to an enum type in Java?",
        o: [
          "No, enums cannot have any methods or fields",
          "Yes, as with other classes, methods and fields can be added",
          "Only static methods can be added",
          "Only fields, not methods, can be added"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is a nested class in Java?",
        o: [
          "A class that extends another class",
          "A class that implements an interface",
          "A class created within another class",
          "A class declared inside a method only"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the class that contains a nested class called?",
        o: [
          "Inner class",
          "Sub class",
          "Top-level class",
          "Abstract class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "How many types of nested classes are there in Java according to the handout?",
        o: [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which type of nested class has access to all static methods of the top-level class?",
        o: [
          "Non-static member class",
          "Local class",
          "Anonymous class",
          "Static member class"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which type of nested class requires an instance and has access to all data and methods of the top-level class?",
        o: [
          "Static member class",
          "Non-static member class (inner class)",
          "Local class",
          "Anonymous class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which type of nested class is defined within a method body?",
        o: [
          "Static member class",
          "Non-static member class",
          "Local class",
          "Anonymous class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "An anonymous class is described as:",
        o: [
          "A nested class with no fields",
          "A special case of a local class that has no identifier",
          "A class that extends from an abstract class",
          "A static class with no methods"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the most common reason for nesting a class inside another?",
        o: [
          "To make the inner class accessible to all other classes",
          "To improve runtime performance",
          "Because the inner class is used only by the top-level class",
          "To avoid using interfaces"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the RealEstateListing example, what is the inner class called?",
        o: [
          "RealEstateListing",
          "Address",
          "HouseData",
          "Listing"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the RealEstateListing example, what access modifier is the inner class HouseData?",
        o: [
          "public",
          "protected",
          "default (no modifier)",
          "private"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the effect of making an inner class private?",
        o: [
          "It prevents the top-level class from accessing it",
          "It keeps its members hidden from outside classes",
          "It makes the inner class static",
          "It prevents any methods from being added to the inner class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Can an inner class access its top-level class's private fields and methods?",
        o: [
          "No, private members are never accessible from inner classes",
          "Yes, an inner class can access even private members of its top-level class",
          "Only if the inner class is declared static",
          "Only if the inner class is declared public"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Can an outer class access its inner class's members?",
        o: [
          "No, the outer class cannot access inner class members",
          "Only if the inner class is static",
          "Yes, an outer class can access its inner class's members",
          "Only if the inner class is declared public"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to the handout, what is a disadvantage of making HouseData an inner class instead of a regular class?",
        o: [
          "It cannot access private members of the outer class",
          "It is usable only in the class in which it resides",
          "It cannot have its own constructor",
          "It cannot be declared private"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "If HouseData were made a regular class stored in its own file, it could be used with composition in:",
        o: [
          "Only the RealEstateListing class",
          "Only the main method",
          "Other classes as well",
          "No other class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is a regular expression (regex)?",
        o: [
          "A loop structure used to iterate over strings",
          "A character or sequence of characters that represents a string or multiple strings",
          "A class used to sort arrays",
          "A method for splitting strings by whitespace"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Regular expressions in Java are part of which package?",
        o: [
          "java.lang",
          "java.io",
          "java.util.regex",
          "java.string"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is a common use of regular expressions for form validation?",
        o: [
          "Checking if a string has numeric digits only",
          "Ensuring strings contain the correct email format (@ sign is included)",
          "Converting strings to uppercase",
          "Sorting strings alphabetically"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which String class method returns true if a string matches the given regular expression?",
        o: [
          "equals()",
          "compareTo()",
          "contains()",
          "matches(String regex)"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the key difference between matches() and equals() in the String class?",
        o: [
          "matches() is case-insensitive while equals() is case-sensitive",
          "equals() compares one string to another; matches() allows variability through regex",
          "matches() only works with integers while equals() works with strings",
          "equals() allows multiple comparison values while matches() does not"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the | symbol do in a regular expression?",
        o: [
          "Represents any single character",
          "Indicates one or more occurrences",
          "Acts as an OR operator, allowing the match of one value or another",
          "Marks the beginning of a character range"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does animal.matches(\"cat|dog\") return if animal is \"cat\"?",
        o: [
          "false",
          "null",
          "true",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What are square brackets ([]) used for in regular expressions?",
        o: [
          "Grouping expressions for repetition",
          "Character variability",
          "Marking the end of a string",
          "Defining method parameters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does animal.matches(\"[Cc]at|[Dd]og\") return if animal is \"Dog\"?",
        o: [
          "false",
          "true",
          "An exception",
          "null"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does animal.matches(\"[Cc]at|[Dd]og\") return if animal is \"dOg\"?",
        o: [
          "true",
          "null",
          "An exception",
          "false"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Square brackets can be combined with which symbol to include any range of characters?",
        o: [
          "A dot (.)",
          "A hyphen (-)",
          "An asterisk (*)",
          "A pipe (|)"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does word.matches(\"[a-z]at\") return if word is \"bat\"?",
        o: [
          "false",
          "An exception",
          "null",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does word.matches(\"[a-zA-Z](at|AT)\") allow?",
        o: [
          "Only lowercase letters before 'at'",
          "Only uppercase letters before 'AT'",
          "Any letter (upper or lowercase) followed by 'at' or 'AT'",
          "Any digit followed by 'at'"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Why does using the range a-Z or A-z in a character class not work correctly?",
        o: [
          "Java does not support hyphens in character classes",
          "Those ranges include non-letter characters between uppercase Z and lowercase a in ASCII",
          "Regex ranges are case-sensitive by default",
          "Java requires explicit listing of all characters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the regex \"[0-9a-zA-Z]bcde\", what does the character class [0-9a-zA-Z] define?",
        o: [
          "The last character of the match",
          "The entire string to match",
          "Exactly how the first character can be represented",
          "The repeating pattern after 'bcde'"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the regex \"[0-9a-zA-Z]bcde\", is the rest of the word (\"bcde\") case-sensitive?",
        o: [
          "No, it is case-insensitive",
          "Yes, the rest is case-sensitive",
          "Only the digits are case-sensitive",
          "Only if the [0-9] part is matched"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the dot (.) in a regular expression called, and what does it represent?",
        o: [
          "The anchor operator; represents the end of a string",
          "The wildcard operator; represents any single character",
          "The range operator; represents a character range",
          "The optional operator; represents zero or one character"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does element.matches(\"[0-9].\") check for?",
        o: [
          "A string that is exactly two digits",
          "A string consisting of a number followed by any other single character",
          "A string that starts with a letter and ends with a digit",
          "A string with exactly one digit and nothing else"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is a repetition operator in regular expressions?",
        o: [
          "An operator that defines character ranges",
          "A symbol indicating the number of times a specified character appears in a matching string",
          "An operator that splits a string",
          "A symbol that replaces characters in a string"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the * repetition operator mean in a regular expression?",
        o: [
          "1 or more occurrences",
          "Exactly 1 occurrence",
          "0 or 1 occurrence",
          "0 or more occurrences"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does str.matches(\"A*\") return if str is an empty string \"\"?",
        o: [
          "false",
          "An exception",
          "true",
          "null"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the ? repetition operator mean in a regular expression?",
        o: [
          "0 or more occurrences",
          "0 or 1 occurrence",
          "1 or more occurrences",
          "Exactly 1 occurrence"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\"A?\") return if str is \"AA\"?",
        o: [
          "true",
          "null",
          "An exception",
          "false"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the + repetition operator mean in a regular expression?",
        o: [
          "0 or more occurrences",
          "0 or 1 occurrence",
          "1 or more occurrences",
          "Exactly 2 or more occurrences"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A+\") return if str is \"AAAA\"?",
        o: [
          "false",
          "null",
          "true",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the {x} repetition operator specify in a regular expression?",
        o: [
          "Between x and some number of occurrences",
          "x or more occurrences",
          "Exactly x occurrences",
          "0 to x occurrences"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7}\") return if str is \"AAAAAAA\" (7 A's)?",
        o: [
          "false",
          "null",
          "An exception",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the {x,y} repetition operator specify in a regular expression?",
        o: [
          "Exactly x occurrences",
          "x or more occurrences",
          "Between x and y occurrences (inclusive)",
          "At most y occurrences"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7,9}\") return if str is \"AAAAAAAA\" (8 A's)?",
        o: [
          "false",
          "null",
          "true",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the {x,} repetition operator specify in a regular expression?",
        o: [
          "Exactly x occurrences",
          "0 to x occurrences",
          "Between x and some fixed maximum",
          "x or more occurrences"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{5,}\") return if str is \"AAAA\" (4 A's)?",
        o: [
          "true",
          "An exception",
          "null",
          "false"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the regex \".*\" match?",
        o: [
          "Only empty strings",
          "Only strings of digits",
          "Any number of any characters in a sequence",
          "Exactly one character"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the regex \".*\", the dot (.) represents any character and the asterisk (*) represents:",
        o: [
          "One or more occurrences of the preceding character",
          "Any number of occurrences of the preceding character",
          "Zero or one occurrence of the preceding character",
          "Exactly five occurrences of the preceding character"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\".?[0-5]{10}\") check for?",
        o: [
          "A string of exactly ten digits from 0 to 9",
          "An optional single character followed by exactly ten characters from 0 to 5",
          "Any character repeated ten times",
          "A string starting with a digit and ending with five characters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What class in java.util.regex stores the format of a regular expression?",
        o: [
          "Matcher",
          "RegEx",
          "Pattern",
          "Scanner"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which method is used to initialize a Pattern object from a regular expression string?",
        o: [
          "Pattern.create()",
          "Pattern.match()",
          "Pattern.build()",
          "Pattern.compile()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the purpose of compiling a regex pattern with Pattern.compile()?",
        o: [
          "It converts the regex to a string",
          "A compiled regex pattern can speed up your program when the pattern is used frequently",
          "It checks the pattern for syntax errors and throws an error if invalid",
          "It automatically applies the pattern to all strings in the program"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What class in java.util.regex stores a possible match between a pattern and a string?",
        o: [
          "Pattern",
          "Matcher",
          "RegexMatch",
          "StringMatch"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "How is a Matcher object initialized?",
        o: [
          "Matcher match = new Matcher(pattern, string);",
          "Matcher match = pattern.find(string);",
          "Matcher match = patternName.matcher(stringName);",
          "Matcher match = Matcher.compile(string);"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "After obtaining a Matcher object, which method is used to check if the regular expression matches the given string entirely?",
        o: [
          "find()",
          "search()",
          "test()",
          "matches()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the following code print? Pattern p = Pattern.compile(\"[A-F]{5,}.*\"); String str = \"AAAAAhhh\"; Matcher match = p.matcher(str); System.out.println(match.matches());",
        o: [
          "false",
          "null",
          "An exception",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the Matcher's find() method do?",
        o: [
          "Returns the entire matched string",
          "Replaces all matched substrings",
          "Scans the input sequence looking for the next subsequence that matches the pattern",
          "Splits the string at every match"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does find() return if the defined pattern exists as a substring of the string?",
        o: [
          "The matching substring",
          "true",
          "The index of the match",
          "false"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the following code print? Pattern p = Pattern.compile(\"[0-9]\"); String str = \"Passw0rd\"; Matcher match = p.matcher(str); System.out.println(match.find());",
        o: [
          "false",
          "null",
          "0",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the difference between matches() and find() in the Matcher class?",
        o: [
          "matches() checks for a full-string match; find() checks if the pattern exists as a substring",
          "find() checks for a full-string match; matches() checks for a substring",
          "Both methods are identical in behavior",
          "matches() is faster than find()"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "What does the split() method do in Java?",
        o: [
          "Replaces all occurrences of a regex in a string",
          "Finds the first match of a regex in a string",
          "Splits the string around matches of the given regular expression",
          "Converts a string to uppercase"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the output of: String phone = \"991-978-6452\"; String[] tokens = phone.split(\"-\"); for (String t : tokens) System.out.println(t);",
        o: [
          "991-978-6452",
          "991 978 6452",
          "991\n978\n6452",
          "9919786452"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the replaceAll() method do?",
        o: [
          "Removes all whitespace from a string",
          "Replaces the first occurrence of a regex match",
          "Replaces all occurrences of the defined regular expression found in the string with another string",
          "Finds and counts all regex matches in a string"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the following code do? str = str.replaceAll(\" {2,}\", \" \");",
        o: [
          "Removes all spaces from the string",
          "Replaces two or more consecutive spaces with a single space",
          "Removes single spaces and keeps double spaces",
          "Adds spaces between each character"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the RealEstateListing example, what fields does the inner class HouseData contain?",
        o: [
          "listingNumber and price",
          "streetAddress and squareFeet",
          "address and area",
          "name and price"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the RealEstateListing class, how is the HouseData object created?",
        o: [
          "hData = HouseData.create(address, sqFt);",
          "hData = new HouseData(address, sqFt);",
          "hData = HouseData(address, sqFt);",
          "hData = new HouseData();"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following correctly accesses a field of the inner class in the display() method of RealEstateListing?",
        o: [
          "HouseData.streetAddress",
          "this.streetAddress",
          "hData.streetAddress",
          "streetAddress"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The built-in enum methods toString(), ordinal(), equals(), and compareTo() are:",
        o: [
          "Static methods called on the enum type",
          "Non-static methods called on individual enum constants",
          "Methods of the Scanner class",
          "Methods of the String class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The static enum methods valueOf() and values() are called on:",
        o: [
          "Individual enum constant objects",
          "The enum type itself",
          "The Scanner class",
          "The String class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What happens if you try to create an invalid enum value in Java?",
        o: [
          "A runtime exception is thrown",
          "The value defaults to null",
          "A compiler error is introduced",
          "The enum stores the invalid value as a String"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is NOT a valid repetition operator in Java regular expressions?",
        o: [
          "*",
          "?",
          "#",
          "+"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the enhanced for loop in EnumDemo iterate over?",
        o: [
          "An array created by Period.valueOf()",
          "The elements of Period.values()",
          "A manually created array of strings",
          "The ordinal values of the enum"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In a switch statement using enums, how are the case labels written?",
        o: [
          "With the enum type prefix, e.g., case Period.MIDTERM:",
          "Without the enum type prefix, e.g., case MIDTERM:",
          "As integer ordinal values, e.g., case 1:",
          "As string literals, e.g., case \"MIDTERM\":"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Is it necessary to make an inner class private?",
        o: [
          "Yes, Java requires all inner classes to be private",
          "No, but making it private keeps its members hidden from outside classes",
          "Yes, otherwise the compiler throws an error",
          "No, inner classes are always public by default"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "If class members of an inner class must be accessible to other classes, what should you do?",
        o: [
          "Declare the inner class as public",
          "Do not make it an inner class",
          "Declare the inner class as static",
          "Use the protected modifier"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\"A*\") return if str is \"B\"?",
        o: [
          "true",
          "null",
          "An exception",
          "false"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does str.matches(\"A?\") return if str is \"A\"?",
        o: [
          "false",
          "null",
          "true",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A?\") return if str is \"\"?",
        o: [
          "false",
          "An exception",
          "null",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does str.matches(\"A+\") return if str is \"\" (empty string)?",
        o: [
          "true",
          "false",
          "null",
          "An exception"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7}\") return if str is \"AAAAAA\" (only 6 A's)?",
        o: [
          "true",
          "null",
          "false",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7,9}\") return if str is \"AAAAAAAAAA\" (10 A's)?",
        o: [
          "true",
          "false",
          "null",
          "An exception"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{5,}\") return if str is \"AAAAA\" (5 A's)?",
        o: [
          "false",
          "null",
          "An exception",
          "true"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which regex correctly checks if a string consists of zero or more A's but no other letter?",
        o: [
          "\"A+\"",
          "\"A?\"",
          "\"A*\"",
          "\"A{1,}\""
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the Pattern class, what is the method used to compile a regular expression?",
        o: [
          "Pattern.build()",
          "Pattern.create()",
          "Pattern.parse()",
          "Pattern.compile()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "The matcher() method of the Pattern class returns a:",
        o: [
          "String",
          "Pattern object",
          "Matcher object",
          "Boolean"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the following regex pattern match: \"[A-F]{5,}.*\"?",
        o: [
          "Any string of exactly 5 uppercase letters A through F",
          "A string of 5 or more characters from A to F, followed by any characters",
          "Any 5-character string",
          "A string starting with at least 5 digits"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the compareTo() method return if the calling enum object's ordinal is greater than the argument's ordinal?",
        o: [
          "Zero",
          "A negative integer",
          "A positive integer",
          "null"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the compareTo() method return if the calling enum object's ordinal is less than the argument's ordinal?",
        o: [
          "Zero",
          "A negative integer",
          "A positive integer",
          "null"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Instead of using compareTo() to compare enum constants, what can also be used?",
        o: [
          "The instanceof operator",
          "The == operator only",
          "Comparison operators",
          "The String.compareTo() method"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the split() method in Java use to determine where to split the string?",
        o: [
          "A fixed character position",
          "A regular expression",
          "The length of the string",
          "A predefined separator list"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the EnumDemo2 example, what would be the output if s = Size.REGULAR?",
        o: [
          "Price of pizza is 602.00",
          "Price of pizza is 799.00",
          "Price of pizza is 381.00",
          "Price of pizza is 0.00"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the EnumDemo2 example, what would be the output if s = Size.PARTY?",
        o: [
          "Price of pizza is 381.00",
          "Price of pizza is 602.00",
          "Price of pizza is 0.00",
          "Price of pizza is 799.00"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What ordinal value does PRELIM have in the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }?",
        o: [
          "1",
          "0",
          "2",
          "3"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What ordinal value does FINAL have in the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }?",
        o: [
          "4",
          "0",
          "2",
          "3"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What ordinal value does PREFINAL have in the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }?",
        o: [
          "1",
          "3",
          "2",
          "0"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following best describes how nested classes and their top-level classes share access?",
        o: [
          "Only the top-level class can access the inner class, but not vice versa",
          "Only the inner class can access the top-level class's members",
          "An inner class can access the top-level class's members, and the outer class can access the inner class's members",
          "Neither can access the other's private members"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The java.util.regex package contains classes to help:",
        o: [
          "Sort and filter collections",
          "Form and use regular expressions",
          "Connect to databases",
          "Format numbers and dates"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does find() return if the defined pattern does NOT exist in the string?",
        o: [
          "null",
          "An empty string",
          "true",
          "false"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does word.matches(\"[a-z]at\") return if word is \"Cat\"?",
        o: [
          "true",
          "null",
          "false",
          "An exception"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does word.matches(\"[a-zA-Z](at|AT)\") return if word is \"BAT\"?",
        o: [
          "false",
          "true",
          "null",
          "An exception"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "How many fields does the outer class RealEstateListing have (not counting the inner class fields)?",
        o: [
          "1",
          "4",
          "3",
          "2"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is true about local classes in Java?",
        o: [
          "They are defined within a method body",
          "They have access to all static members of the top-level class only",
          "They are always anonymous",
          "They require an instance of the top-level class to be created"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "According to the handout, when would you NOT want to create an inner class?",
        o: [
          "When you want to keep members hidden from outside classes",
          "When the class is only used by the top-level class",
          "When class members must be accessible to other classes",
          "When the class needs to access private fields of the outer class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the regex expression \" {2,}\" match?",
        o: [
          "Exactly 2 spaces",
          "Two or more consecutive spaces",
          "Any whitespace character",
          "A string of 2 to unlimited digits"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which statement about the matches() method in the String class is correct?",
        o: [
          "It only works with single-character patterns",
          "It returns an integer representing the position of the match",
          "It returns true if the entire string matches the given regular expression",
          "It is identical to the equals() method"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the EnumDemo program, what type of loop is used to display all grading periods?",
        o: [
          "A standard for loop with an index",
          "A while loop",
          "An enhanced for loop (for-each)",
          "A do-while loop"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What input would cause a runtime error in the EnumDemo program if the user enters a value that doesn't match any enum constant?",
        o: [
          "A value that matches the exact enum constant name",
          "A value that does not correspond to any defined Period constant",
          "An integer value",
          "An empty string"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What package must be imported to use Scanner in the EnumDemo program?",
        o: [
          "java.util.regex",
          "java.io",
          "java.util.Scanner",
          "java.lang"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the regex [0-9] represent?",
        o: [
          "Only the digit 0 or the digit 9",
          "Any digit from 0 to 9",
          "Any character that is not a digit",
          "The string \"0-9\""
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the regex [A-F] represent?",
        o: [
          "Only the letters A and F",
          "Any uppercase letter from A to Z",
          "Any uppercase letter from A to F",
          "Any lowercase letter from a to f"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to the handout, packaging nested classes together makes their connection:",
        o: [
          "Harder to understand but more efficient",
          "Easier to understand and their code easier to maintain",
          "Accessible to more outside classes",
          "Slower at runtime"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is the result of Period.valueOf(\"FINAL\") for the enum Period { PRELIM, MIDTERM, PREFINAL, FINAL }?",
        o: [
          "3",
          "The string \"FINAL\"",
          "The FINAL enum constant",
          "null"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the statement 'return str.matches(\".*\");' always return?",
        o: [
          "false for empty strings",
          "true for any string",
          "false for strings with spaces",
          "true only for non-empty strings"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "How are static enum methods like values() and valueOf() different from non-static methods like ordinal()?",
        o: [
          "Static methods are called on individual enum constants; non-static on the type",
          "Static methods are called on the enum type; non-static methods are called on individual constants",
          "There is no difference in how they are called",
          "Static methods return strings; non-static methods return integers"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following regex patterns checks if a string starts with any digit and is followed by exactly one more character?",
        o: [
          "\"[0-9]+\"",
          "\"[0-9]{2}\"",
          "\"[0-9].\"",
          "\"[0-9].*\""
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is NOT listed as a common example of when enumerations are appropriate?",
        o: [
          "Compass directions",
          "Months of the year",
          "Cards in a deck",
          "User account balances"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which class is used to store the format/pattern of a regular expression in java.util.regex?",
        o: [
          "Matcher",
          "RegexFormat",
          "Pattern",
          "StringPattern"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which class in java.util.regex is used to store the result of matching a pattern against a string?",
        o: [
          "Pattern",
          "Scanner",
          "StringMatch",
          "Matcher"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the regex \".?[0-5]{10}\" mean?",
        o: [
          "Exactly 10 digits from 0 to 5",
          "An optional single character followed by exactly 10 characters in the range 0 to 5",
          "Zero or more characters followed by 10 characters",
          "Exactly 11 characters, the first being any digit"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What output does the EnumDemo program show first before prompting for user input?",
        o: [
          "\"Select a grading period:\"",
          "\"You entered\"",
          "\"The grading periods are: PRELIM MIDTERM PREFINAL FINAL\"",
          "\"MIDTERM is in position\""
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Can enum constants in Java be declared on their own outside of any class?",
        o: [
          "No, they must always be inside a class",
          "Yes, they can be declared on their own or within another class",
          "Only if the enum has more than 2 constants",
          "Only inside an abstract class"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What happens when you call sc.nextLine().toUpperCase() in the EnumDemo program?",
        o: [
          "Reads user input and converts it to lowercase",
          "Reads user input and converts it to uppercase, ensuring it matches enum constant names",
          "Trims whitespace from the input",
          "Converts the input to an integer"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following statements is true about the replaceAll() method?",
        o: [
          "It replaces only the first occurrence of the regex match",
          "It is a method of the Matcher class only",
          "It replaces all occurrences of the defined regex with a specified replacement string",
          "It removes all characters from the string"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "According to the handout, are nested classes commonly created by developers?",
        o: [
          "Yes, they are used in most Java programs",
          "No, inner classes are not usually created, but they are implemented in some built-in Java classes",
          "Yes, they are required for all object-oriented programs",
          "No, they are completely deprecated in modern Java"
        ],
        a: 1
      }
    ];