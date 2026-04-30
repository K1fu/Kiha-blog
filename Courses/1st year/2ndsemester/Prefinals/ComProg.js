const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice =====
      {
        type: "mc",
        q: "What is an enumeration (enum) in Java?",
        o: [
          "A method that returns multiple values",
          "A data type that contains a fixed set of constants",
          "A class that contains only static methods",
          "A loop structure for iterating over arrays"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which keyword is used to declare an enumeration in Java?",
        o: ["class", "interface", "enum", "const"],
        a: 2
      },
      {
        type: "mc",
        q: "What does the ordinal() method return for an enum constant?",
        o: [
          "The name of the constant as a String",
          "The number of constants in the enum",
          "An integer representing the constant's position in the list, starting at 0",
          "A boolean indicating if the constant exists"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Given enum Period {PRELIM, MIDTERM, PREFINAL, FINAL} and p = Period.MIDTERM, what does p.ordinal() return?",
        o: ["0", "1", "2", "3"],
        a: 1
      },
      {
        type: "mc",
        q: "What does the toString() method return for an enum constant?",
        o: [
          "The ordinal value as a String",
          "The name of the calling constant object",
          "The class name of the enum",
          "A boolean value"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does p.compareTo(Period.FINAL) return if p = Period.MIDTERM?",
        o: ["A positive integer", "Zero", "A negative integer", "true"],
        a: 2
      },
      {
        type: "mc",
        q: "What does p.compareTo(Period.PRELIM) return if p = Period.MIDTERM?",
        o: ["A negative integer", "Zero", "A positive integer", "false"],
        a: 2
      },
      {
        type: "mc",
        q: "What does p.compareTo(Period.MIDTERM) return if p = Period.MIDTERM?",
        o: ["1", "-1", "0", "true"],
        a: 2
      },
      {
        type: "mc",
        q: "What does the static method valueOf() do for enumerations?",
        o: [
          "Returns an array of all enumerated constants",
          "Accepts a string parameter and returns an enumeration constant",
          "Returns the ordinal value of a constant",
          "Compares two enum constants"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does Period.values() return?",
        o: [
          "The number of constants in the Period enum",
          "The first constant in the Period enum",
          "An array of the enumerated constants",
          "A String of all constant names"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the term 'type-safe' used to describe?",
        o: [
          "A variable that cannot be reassigned",
          "A data type that allows only appropriate behaviors",
          "A method that handles all exceptions",
          "A class that is declared as final"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which of the following is NOT one of the four types of nested classes in Java?",
        o: [
          "Static member class",
          "Anonymous class",
          "Abstract class",
          "Local class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the most common reason for nesting a class inside another?",
        o: [
          "To improve performance",
          "Because the inner class is used only by the top-level class",
          "To allow the inner class to be used globally",
          "To reduce the number of files in a project"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which type of nested class requires an instance and has access to all data and methods of the top-level class?",
        o: [
          "Static member class",
          "Local class",
          "Anonymous class",
          "Non-static member class (inner class)"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which type of nested class has access to all static methods of the top-level class?",
        o: [
          "Static member class",
          "Non-static member class",
          "Local class",
          "Anonymous class"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "What is an anonymous class in Java?",
        o: [
          "A class with no constructor",
          "A class defined within a method body with an identifier",
          "A special case of a local class that has no identifier",
          "A class that cannot be instantiated"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the RealEstateListing example, what access modifier is used for the HouseData inner class?",
        o: ["public", "protected", "private", "default (no modifier)"],
        a: 2
      },
      {
        type: "mc",
        q: "Can an inner class access its top-level class's private fields and methods?",
        o: [
          "No, private members are inaccessible to any other class",
          "Yes, an inner class can access its top-level class's fields and methods, even if they are private",
          "Only if the inner class is declared static",
          "Only through getter methods"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is a regular expression (regex)?",
        o: [
          "A class in the java.lang package",
          "A character or a sequence of characters that represent a string or multiple strings",
          "A method used to sort arrays",
          "A data type for storing patterns"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In which Java package are regular expressions found?",
        o: ["java.lang.regex", "java.io.regex", "java.util.regex", "java.string.regex"],
        a: 2
      },
      {
        type: "mc",
        q: "What does the matches(String regex) method return?",
        o: [
          "An array of matched substrings",
          "true if a string matches the given regular expression",
          "The position of the first match",
          "A Matcher object"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the regular expression symbol | represent?",
        o: [
          "Concatenation",
          "Negation",
          "Alternation (OR)",
          "Repetition"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What are square brackets ([]) used for in regular expressions?",
        o: [
          "Grouping expressions",
          "Character variability",
          "Specifying repetition counts",
          "Defining method parameters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the dot (.) represent in a regular expression?",
        o: [
          "The end of a statement",
          "A literal period character",
          "Any single character (wildcard operator)",
          "Zero or more occurrences"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the repetition operator * mean in a regular expression?",
        o: [
          "Exactly one occurrence",
          "One or more occurrences",
          "Zero or one occurrence",
          "Zero or more occurrences"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the repetition operator + mean in a regular expression?",
        o: [
          "Zero or more occurrences",
          "One or more occurrences",
          "Zero or one occurrence",
          "Exactly one occurrence"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the repetition operator ? mean in a regular expression?",
        o: [
          "Zero or more occurrences",
          "One or more occurrences",
          "Zero or one occurrence",
          "Any number of occurrences"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7}\") return true for?",
        o: [
          "Any string containing at least 7 A's",
          "A string that is exactly a sequence of 7 A's",
          "A string of 7 or more A's",
          "A string of 7, 8, or 9 A's"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{7,9}\") return true for?",
        o: [
          "A sequence of 7 or more A's",
          "A sequence of exactly 9 A's",
          "A sequence of 7, 8, or 9 A's",
          "A sequence of at least 7 A's"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does str.matches(\"A{5,}\") return true for?",
        o: [
          "A sequence of exactly 5 A's",
          "A sequence of 5, 6, or 7 A's",
          "A sequence of 5 or more A's",
          "A sequence of 0 to 5 A's"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the Pattern class in java.util.regex do?",
        o: [
          "Stores a possible match between a pattern and a string",
          "Stores the format of a regular expression",
          "Splits a string based on a pattern",
          "Replaces occurrences of a pattern in a string"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What method is used to compile a regular expression into a Pattern object?",
        o: ["Pattern.create()", "Pattern.build()", "Pattern.compile()", "Pattern.init()"],
        a: 2
      },
      {
        type: "mc",
        q: "What does the Matcher class store?",
        o: [
          "The format of a regular expression",
          "A possible match between a pattern and a string",
          "An array of all matched substrings",
          "The compiled version of a regex"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does Matcher's find() method do?",
        o: [
          "Replaces all occurrences of the pattern",
          "Splits the string around pattern matches",
          "Scans the input sequence for the next subsequence matching the pattern",
          "Compiles the pattern into a Matcher object"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the split() method do?",
        o: [
          "Splits the string around matches of the given regular expression",
          "Splits a Pattern object into multiple Matchers",
          "Divides a regex into sub-expressions",
          "Removes all occurrences of a pattern from the string"
        ],
        a: 0
      },
      {
        type: "mc",
        q: "What does the replaceAll() method do?",
        o: [
          "Removes all characters matching the pattern",
          "Replaces the first occurrence of the pattern with another string",
          "Replaces all occurrences of the defined regular expression found in the string with another string",
          "Compiles and applies a pattern simultaneously"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the output of the EnumDemo2 program where s = Size.LARGE?",
        o: [
          "Price of pizza is 381.00",
          "Price of pizza is 602.00",
          "Price of pizza is 799.00",
          "Price of pizza is 0.00"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\".*\") mean?",
        o: [
          "The string must be empty",
          "The string must contain only dots",
          "Any number of any characters in a sequence will return true",
          "The string must contain at least one character"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following correctly returns true if animal is equal to \"cat\" or \"dog\" using regex?",
        o: [
          "animal.matches(\"cat+dog\")",
          "animal.matches(\"cat|dog\")",
          "animal.matches(\"cat&dog\")",
          "animal.matches(\"[cat][dog]\")"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which regex correctly matches a word starting with any lowercase letter and ending in \"at\"?",
        o: [
          "word.matches(\"[A-Z]at\")",
          "word.matches(\".at\")",
          "word.matches(\"[a-z]at\")",
          "word.matches(\"*at\")"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does word.matches(\"[Cc]at|[Dd]og\") match?",
        o: [
          "Only \"cat\" and \"dog\"",
          "\"cat\", \"Cat\", \"dog\", or \"Dog\"",
          "Any word starting with C or D",
          "\"CAT\" or \"DOG\""
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Why is using enums preferred over numeric or String constants?",
        o: [
          "Enums use less memory",
          "An invalid value can pass with numeric/String constants but enums cause a compiler error for invalid values",
          "Enums can be used in switch statements, constants cannot",
          "Enums are faster at runtime"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "How is a matcher object initialized?",
        o: [
          "Matcher match = new Matcher(pattern, string);",
          "Matcher match = Matcher.compile(pattern, string);",
          "Matcher match = patternName.matcher(stringName);",
          "Matcher match = pattern.createMatcher(string);"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What advantage does a compiled regex Pattern provide?",
        o: [
          "It automatically fixes invalid patterns",
          "It can speed up your program when the pattern is used frequently",
          "It allows the pattern to be used across different Java packages",
          "It converts the pattern to a String for easy printing"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the EnumDemo program, what method converts the user's input to an enumeration value?",
        o: ["ordinal()", "toString()", "valueOf()", "equals()"],
        a: 2
      },
      {
        type: "mc",
        q: "Which statement about local classes is correct?",
        o: [
          "They are defined at the top level of a Java file",
          "They are defined within a method body",
          "They have access only to static methods",
          "They are a special case of anonymous classes"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does str.matches(\".?[0-5]{10}\") mean?",
        o: [
          "A string of exactly 10 characters from 0-5",
          "An optional single character followed by exactly 10 digits from 0 to 5",
          "One or more characters followed by 10 digits",
          "A 10-character string of any characters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What happens when you use str.replaceAll(\" {2,}\", \" \") on a string with multiple spaces?",
        o: [
          "All spaces are removed from the string",
          "The string is split at every double space",
          "All occurrences of two or more consecutive spaces are replaced with a single space",
          "Only the first occurrence of multiple spaces is replaced"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which is true about an enumerated type such as Period?",
        o: [
          "It is an interface",
          "It is a primitive data type",
          "It is a class, and its enum constants act as objects instantiated from the class",
          "It cannot be declared within another class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which regex expression would NOT correctly match both uppercase and lowercase versions?",
        o: [
          "[a-zA-Z]",
          "[a-z]",
          "[a-Z]",
          "[A-Z]"
        ],
        a: 2
      },

      // ===== Identification =====
      {
        type: "id",
        q: "What term describes a data type that contains a fixed set of constants?",
        a: "Enumeration (enum)"
      },
      {
        type: "id",
        q: "What are the only allowed values for an enumeration type?",
        a: "Enum constants"
      },
      {
        type: "id",
        q: "What enum method returns true if its argument is equal to the calling object's value?",
        a: "equals()"
      },
      {
        type: "id",
        q: "What static enum method accepts a string parameter and returns an enumeration constant?",
        a: "valueOf()"
      },
      {
        type: "id",
        q: "What static enum method returns an array of the enumerated constants?",
        a: "values()"
      },
      {
        type: "id",
        q: "What is the term for a data type that allows only appropriate behaviors?",
        a: "Type-safe"
      },
      {
        type: "id",
        q: "What is the name given to a class defined within another class in Java?",
        a: "Nested class"
      },
      {
        type: "id",
        q: "What is the term for the class that contains a nested class?",
        a: "Top-level class"
      },
      {
        type: "id",
        q: "What type of nested class is defined within a method body?",
        a: "Local class"
      },
      {
        type: "id",
        q: "What type of nested class is a special case of a local class that has no identifier?",
        a: "Anonymous class"
      },
      {
        type: "id",
        q: "What is a regular expression (regex)?",
        a: "A character or a sequence of characters that represent a string or multiple strings"
      },
      {
        type: "id",
        q: "What Java package contains classes to help form and use regular expressions?",
        a: "java.util.regex"
      },
      {
        type: "id",
        q: "What regex symbol is the wildcard operator that represents any single character?",
        a: "Dot (.)"
      },
      {
        type: "id",
        q: "What is the term for any symbol in regular expressions that indicates the number of times a specified character appears in a matching string?",
        a: "Repetition operator"
      },
      {
        type: "id",
        q: "What class in java.util.regex stores the format of a regular expression?",
        a: "Pattern"
      },
      {
        type: "id",
        q: "What class in java.util.regex stores a possible match between a pattern and a string?",
        a: "Matcher"
      },
      {
        type: "id",
        q: "What method of the Pattern class compiles a given regular expression into a pattern?",
        a: "compile()"
      },
      {
        type: "id",
        q: "What Matcher method scans the input sequence looking for the next subsequence that matches the pattern?",
        a: "find()"
      },
      {
        type: "id",
        q: "What String method splits the string around matches of the given regular expression?",
        a: "split()"
      },
      {
        type: "id",
        q: "What method replaces all occurrences of the defined regular expression found in the string with another string?",
        a: "replaceAll()"
      },

      // ===== True or False =====
      {
        type: "tf",
        q: "With enums, it is impossible to create an invalid enum value without introducing a compiler error.",
        a: true
      },
      {
        type: "tf",
        q: "Enum constants are static by nature, so the built-in enum methods like toString() and ordinal() are also static.",
        a: false
      },
      {
        type: "tf",
        q: "An enumerated type can be declared within a class but not within a method.",
        a: true
      },
      {
        type: "tf",
        q: "An inner class can access its top-level class's fields and methods, even if they are private.",
        a: true
      },
      {
        type: "tf",
        q: "Making an inner class private is required in Java.",
        a: false
      },
      {
        type: "tf",
        q: "The matches() method allows variability when comparing a string to a regular expression, unlike equals().",
        a: true
      },
      {
        type: "tf",
        q: "The range [a-Z] in a regular expression correctly includes both uppercase and lowercase letters.",
        a: false
      },
      {
        type: "tf",
        q: "A compiled regex Pattern can speed up a program when the pattern is used frequently.",
        a: true
      },
      {
        type: "tf",
        q: "The find() method of the Matcher class returns true only if the entire string matches the pattern.",
        a: false
      },
      {
        type: "tf",
        q: "Regular expressions are often used to check the correct email format on form validation.",
        a: true
      },

      // ===== Fill in the Blank =====
      {
        type: "fitb",
        before: "An enumeration (enum) is a data type that contains a fixed set of",
        after: ".",
        a: "constants"
      },
      {
        type: "fitb",
        before: "To create an enum, declare a type with the",
        after: "keyword, an identifier of the kind, and a list of values called enum constants.",
        a: "enum"
      },
      {
        type: "fitb",
        before: "The ordinal() method returns an integer that represents the constant's position in the list of constants; the first position is",
        after: ".",
        a: "0"
      },
      {
        type: "fitb",
        before: "The static method",
        after: "accepts a string parameter and returns an enumeration constant.",
        a: "valueOf()"
      },
      {
        type: "fitb",
        before: "The static method",
        after: "returns an array of the enumerated constants.",
        a: "values()"
      },
      {
        type: "fitb",
        before: "Using enums makes the values",
        after: "; this term is used to describe a data type that allows only appropriate behaviors.",
        a: "type-safe"
      },
      {
        type: "fitb",
        before: "In Java, a class created within another class is called a",
        after: "class.",
        a: "nested"
      },
      {
        type: "fitb",
        before: "An anonymous class is a special case of a",
        after: "class that has no identifier.",
        a: "local"
      },
      {
        type: "fitb",
        before: "A regular expression is part of the",
        after: "package.",
        a: "java.util.regex"
      },
      {
        type: "fitb",
        before: "The String class contains a method named",
        after: "that returns true if a string matches the given regular expression.",
        a: "matches(String regex)"
      },
      {
        type: "fitb",
        before: "Square brackets can be combined with a",
        after: "to include any range of characters in a regular expression.",
        a: "hyphen (-)"
      },
      {
        type: "fitb",
        before: "The dot (.) is the",
        after: "operator that represents any single character in regular expressions.",
        a: "wildcard"
      },
      {
        type: "fitb",
        before: "The repetition operator",
        after: "means zero or more occurrences in a regular expression.",
        a: "*"
      },
      {
        type: "fitb",
        before: "The repetition operator",
        after: "means one or more occurrences in a regular expression.",
        a: "+"
      },
      {
        type: "fitb",
        before: "The repetition operator",
        after: "means zero or one occurrence in a regular expression.",
        a: "?"
      },
      {
        type: "fitb",
        before: "The Pattern class's",
        after: "method compiles the given regular expression into a pattern.",
        a: "compile()"
      },
      {
        type: "fitb",
        before: "The Matcher class's",
        after: "method returns true if the defined pattern exists as a substring of the string.",
        a: "find()"
      },
      {
        type: "fitb",
        before: "The",
        after: "method splits the string around matches of the given regular expression.",
        a: "split()"
      },
      {
        type: "fitb",
        before: "The",
        after: "method is used to replace all occurrences of the defined regular expression found in the string with another string.",
        a: "replaceAll()"
      },
      {
        type: "fitb",
        before: "The regex expression \".*\" means any number of",
        after: "in a sequence will return true.",
        a: "any characters"
      }
    ];