const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (30) =====
      {
        type: "mc",
        q: "A programming paradigm refers to the different approaches to structuring and organizing code. What is the term 'paradigm' most likely synonymous with?",
        o: ["Logic", "Pattern", "Module", "Variable"],
        a: 1
      },
      {
        type: "mc",
        q: "In which style of programming are operations executed one after another in a sequence?",
        o: ["Functional Programming", "Object-oriented Programming", "Procedural Programming", "Logical Programming"],
        a: 2
      },
      {
        type: "mc",
        q: "Which programming style focuses on declarations and expressions rather than the execution of statements?",
        o: ["Procedural Programming", "Functional Programming", "Object-oriented Programming", "Structured Programming"],
        a: 1
      },
      {
        type: "mc",
        q: "In Functional Programming, functions are treated as 'first-class citizens', meaning they can be:",
        o: ["Assigned to a variable", "Passed as an argument", "Returned from a function", "All of the above"],
        a: 3
      },
      {
        type: "mc",
        q: "What are the main building blocks of Object-oriented Programming (OOP)?",
        o: ["Functions", "Procedures", "Objects representing real-world models", "Mathematical expressions"],
        a: 2
      },
      {
        type: "mc",
        q: "Which programming paradigm uses a 'top-down' approach?",
        o: ["Procedural Programming", "Object-oriented Programming", "Functional Programming", "Logical Programming"],
        a: 0
      },
      {
        type: "mc",
        q: "Which programming paradigm uses a 'bottom-up' approach?",
        o: ["Procedural Programming", "Object-oriented Programming", "Functional Programming", "Logical Programming"],
        a: 1
      },
      {
        type: "mc",
        q: "In Procedural Programming, 'Structured Members' are likened to what in OOP?",
        o: ["Classes", "Methods", "Objects", "Instance Variables"],
        a: 3
      },
      {
        type: "mc",
        q: "What is the act of including only essential details of an entity without including the background details?",
        o: ["Data Encapsulation", "Inheritance", "Data Abstraction", "Polymorphism"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the process of wrapping up data and functions into a class to insulate data from outside programs?",
        o: ["Inheritance", "Data Abstraction", "Polymorphism", "Data Encapsulation"],
        a: 3
      },
      {
        type: "mc",
        q: "Which concept allows the same word or symbol to be interpreted correctly in different situations based on the context?",
        o: ["Polymorphism", "Data Hiding", "Inheritance", "Encapsulation"],
        a: 0
      },
      {
        type: "mc",
        q: "What is the process of having two or more functions with the same name but different return types or numbers of arguments?",
        o: ["Operator Overloading", "Function Overloading", "Method Overriding", "Data Abstraction"],
        a: 1
      },
      {
        type: "mc",
        q: "Which access modifier allows any other class to use a method and not just in the class in which it resides?",
        o: ["private", "protected", "public", "package"],
        a: 2
      },
      {
        type: "mc",
        q: "When is the keyword 'static' used in a method header?",
        o: ["When the method is hidden", "When the method returns no data", "When a method can be used without instantiating an object", "When the method is a child class"],
        a: 2
      },
      {
        type: "mc",
        q: "What return type is used when a method returns no data back to its calling method?",
        o: ["int", "String", "void", "static"],
        a: 2
      },
      {
        type: "mc",
        q: "A name that includes the class name, a dot, and the method name is called a:",
        o: ["Complete Identifier", "Fully qualified identifier", "Static identifier", "Legal identifier"],
        a: 1
      },
      {
        type: "mc",
        q: "Where are data fields declared in a class?",
        o: ["Inside the main() method", "Outside any method", "Inside a loop", "Inside a constructor"],
        a: 1
      },
      {
        type: "mc",
        q: "Which principle is used when creating private access to a field so no other classes can access its values?",
        o: ["Data Abstraction", "Inheritance", "Information hiding", "Polymorphism"],
        a: 2
      },
      {
        type: "mc",
        q: "Which operator is used to allocate computer memory for an object?",
        o: ["dot operator", "assignment operator", "new operator", "addition operator"],
        a: 2
      },
      {
        type: "mc",
        q: "A constructor is a special type of method that:",
        o: ["Deletes objects", "Creates and initializes objects", "Hides data", "Overrides methods"],
        a: 1
      },
      {
        type: "mc",
        q: "Which keyword establishes inheritance between classes?",
        o: ["implements", "interface", "extends", "static"],
        a: 2
      },
      {
        type: "mc",
        q: "What is the relationship provided by inheritance between classes?",
        o: ["Has-A relationship", "Is-A relationship", "Use-A relationship", "Part-Of relationship"],
        a: 1
      },
      {
        type: "mc",
        q: "What happens when the same method is present in both the superclass and subclass?",
        o: ["Function Overloading", "Method Overriding", "Data Hiding", "Multiple Inheritance"],
        a: 1
      },
      {
        type: "mc",
        q: "Which keyword can be used to call the method of the superclass from the method of the subclass?",
        o: ["this", "new", "super", "extends"],
        a: 2
      },
      {
        type: "mc",
        q: "An interface is a collection of constants and:",
        o: ["Static methods", "Private methods", "Abstract methods", "Constructors"],
        a: 2
      },
      {
        type: "mc",
        q: "Which keyword is used by a class to apply an interface?",
        o: ["extends", "implements", "interface", "abstract"],
        a: 1
      },
      {
        type: "mc",
        q: "In the smartphone example, color, weight, and price are considered:",
        o: ["Function members", "Methods", "Data members", "Blueprints"],
        a: 2
      },
      {
        type: "mc",
        q: "A class header starts with an optional access specifier, followed by the keyword:",
        o: ["object", "class", "method", "extends"],
        a: 1
      },
      {
        type: "mc",
        q: "A data field is ... if it occurs once per class.",
        o: ["non-static", "private", "public", "static"],
        a: 3
      },
      {
        type: "mc",
        q: "Methods that set or change field values are called:",
        o: ["Accessor methods", "Mutator methods", "Static methods", "Abstract methods"],
        a: 1
      },

      // ===== Identification (30) =====
      {
        type: "id",
        q: "What is the basic unit of programming in OOP?",
        a: "Class"
      },
      {
        type: "id",
        q: "What is a specific and concrete instance of a class?",
        a: "Object"
      },
      {
        type: "id",
        q: "What term refers to the different approaches to structuring and organizing code?",
        a: "Programming paradigm"
      },
      {
        type: "id",
        q: "What is the basic construct of Procedural Programming?",
        a: "Procedures"
      },
      {
        type: "id",
        q: "In functional programming, these are the basic units and are treated as first-class citizens.",
        a: "Functions"
      },
      {
        type: "id",
        q: "What concept reduces complexity through the use of related objects sharing common code?",
        a: "Inheritance"
      },
      {
        type: "id",
        q: "What is a group or collection of objects with common properties?",
        a: "Class"
      },
      {
        type: "id",
        q: "Objects can be compared to what part of speech?",
        a: "Nouns"
      },
      {
        type: "id",
        q: "Methods can be compared to what part of speech?",
        a: "Verbs"
      },
      {
        type: "id",
        q: "This process describes languages that allow the same symbol to be interpreted based on context.",
        a: "Polymorphism"
      },
      {
        type: "id",
        q: "What is the process of making an operator perform tasks in different instances?",
        a: "Operator Overloading"
      },
      {
        type: "id",
        q: "What familiar method executes automatically when a Java program is run?",
        a: "main()"
      },
      {
        type: "id",
        q: "What provides information about how other methods can interact with a method?",
        a: "Method header"
      },
      {
        type: "id",
        q: "What contains the statements that carry out the work of the method?",
        a: "Method body"
      },
      {
        type: "id",
        q: "What is another term for the body of a method?",
        a: "Implementation"
      },
      {
        type: "id",
        q: "Methods that retrieve values are called:",
        a: "Accessor methods"
      },
      {
        type: "id",
        q: "Accessor methods conventionally start with what prefix?",
        a: "get"
      },
      {
        type: "id",
        q: "Mutator methods conventionally start with what prefix?",
        a: "set"
      },
      {
        type: "id",
        q: "Object names become this type, which is a name for a memory address where the object is held.",
        a: "Reference type"
      },
      {
        type: "id",
        q: "What type are built-in types like int?",
        a: "Primitive types"
      },
      {
        type: "id",
        q: "What method name is the same as the name of the class whose objects it constructs?",
        a: "Constructor"
      },
      {
        type: "id",
        q: "In inheritance, the class that inherits properties of the other class is called (provide one term):",
        a: "Subclass"
      },
      {
        type: "id",
        q: "In inheritance, the class that provides the properties to be inherited is called (provide one term):",
        a: "Superclass"
      },
      {
        type: "id",
        q: "What promotes code reusability by allowing the subclass to reuse fields and methods?",
        a: "Inheritance"
      },
      {
        type: "id",
        q: "What is a method without a body?",
        a: "Abstract method"
      },
      {
        type: "id",
        q: "What keyword is used to create a construct for a class without specifying its implementation?",
        a: "interface"
      },
      {
        type: "id",
        q: "What keyword is used to extend an interface?",
        a: "extends"
      },
      {
        type: "id",
        q: "The naming convention for naming a class should start with what type of letter?",
        a: "Uppercase"
      },
      {
        type: "id",
        q: "What access modifier provides the highest security level by limiting access to the same class?",
        a: "private"
      },
      {
        type: "id",
        q: "What determines how many times a method can be called?",
        a: "Unlimited"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "Procedural Programming models real-world entities.",
        a: false
      },
      {
        type: "tf",
        q: "A class definition exists before any objects are created from it.",
        a: true
      },
      {
        type: "tf",
        q: "Objects of interfaces can be created directly.",
        a: false
      },
      {
        type: "tf",
        q: "The main() method is always executed first in any Java application.",
        a: true
      },
      {
        type: "tf",
        q: "Static data fields occur once per object.",
        a: false
      },
      {
        type: "tf",
        q: "Functional Programming aims to write bug-resistant code by avoiding flow-control statements like 'for' and 'while'.",
        a: true
      },
      {
        type: "tf",
        q: "Inheritance replaces the parent class with the subclass.",
        a: false
      },
      {
        type: "tf",
        q: "Data stored in a variable can change during the execution of a program.",
        a: true
      },
      {
        type: "tf",
        q: "A method can be placed within another method.",
        a: false
      },
      {
        type: "tf",
        q: "It is possible for a class to implement multiple interfaces.",
        a: true
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "The term",
        after: "is synonymous with 'pattern'.",
        a: "paradigm"
      },
      {
        type: "fitb",
        before: "Procedural Programming uses a",
        after: "approach.",
        a: "top-down"
      },
      {
        type: "fitb",
        before: "Object-oriented Programming uses a",
        after: "approach.",
        a: "bottom-up"
      },
      {
        type: "fitb",
        before: "A class is a",
        after: "for objects.",
        a: "blueprint"
      },
      {
        type: "fitb",
        before: "Data abstraction hides information from the user, which is called",
        after: "data.",
        a: "abstracted"
      },
      {
        type: "fitb",
        before: "In inheritance, a",
        after: "extends a single-parent class.",
        a: "subclass"
      },
      {
        type: "fitb",
        before: "Polymorphism: 'Poly' means many, while 'morph' means",
        after: ".",
        a: "forms"
      },
      {
        type: "fitb",
        before: "The",
        after: "operator is the addition (+) operator acting as a concatenation operator for Strings.",
        a: "String concatenation"
      },
      {
        type: "fitb",
        before: "A",
        after: "method, or client method, invokes a called method.",
        a: "calling"
      },
      {
        type: "fitb",
        before: "A method name must be one word with no spaces and cannot be a",
        after: "keyword.",
        a: "Java"
      },
      {
        type: "fitb",
        before: "The method body is found between a pair of",
        after: ".",
        a: "curly braces"
      },
      {
        type: "fitb",
        before: "A data field is",
        after: "if it happens once per object.",
        a: "non-static"
      },
      {
        type: "fitb",
        before: "The principle used in creating private access is referred to as",
        after: ".",
        a: "information hiding"
      },
      {
        type: "fitb",
        before: "The",
        after: "keyword is used to apply an interface to a class.",
        a: "implements"
      },
     {
        type: "fitb",
        before: "A method",
        after: "contains parameters to be sent to the method.",
        a: "parentheses"
    },
      {
        type: "fitb",
        before: "In inheritance, if Class B inherits from Class A, it can be concluded that",
        after: ".",
        a: "B is a type of A"
      },
      {
        type: "fitb",
        before: "An interface is a collection of",
        after: "methods and constant values.",
        a: "abstract"
      },
      {
        type: "fitb",
        before: "Objects are",
        after: "instances of classes.",
        a: "specific"
      },
      {
        type: "fitb",
        before: "A method",
        after: "provides information about how other methods can interact with it.",
        a: "header"
      },
      {
        type: "fitb",
        before: "A",
        after: "identifier includes the class name, a dot, and the method name.",
        a: "fully qualified"
      }
    ];