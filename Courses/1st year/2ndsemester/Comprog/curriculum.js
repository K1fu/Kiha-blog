const Curriculum = (() => {

  const meta = {
    title:    "JAVA FUNDAMENTALS",
    subtitle: "Core Java · Up to Concurrency",
    language: "Java",

    home: {
      welcome:     "Welcome to Java Fundamentals",
      tagline:     "From Hello World to multithreaded programs — one concept at a time.",
      description: "This course takes you through Java from first principles to concurrent programming. You will learn the language's syntax, master object-oriented design, explore the Collections Framework and the Streams API, and finish by writing multithreaded code using threads, virtual threads, and the Java Memory Model. Each lesson builds directly on the last, and every concept is reinforced with hands-on exercises.",
      features: [
        "Write real Java code from the very first lesson",
        "Master the 4 pillars of OOP with worked examples",
        "Explore Java 8+ features: lambdas, streams, and optionals",
        "Understand the Collections Framework from Lists to Maps",
        "Learn concurrency: threads, virtual threads, and the JMM",
        "Drag-and-drop, fill-in-the-blank, and free-code challenges",
        "XP and ranks track your progress automatically",
        "No IDE required — works entirely in the browser"
      ],
      notice: "A basic understanding of programming concepts (variables, loops) is helpful but not required. Java syntax is introduced from scratch."
    }
  };

  const lessons = [

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 1 — Java Syntax & Data Types
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_1",
      title: "Java Syntax & Data Types",

      content: [
        {
          type:  "text",
          value: "Every Java program lives inside a class. The entry point of any standalone Java application is the main method. The JVM (Java Virtual Machine) looks for this specific signature to know where execution begins."
        },
        {
          type:  "code",
          value:
`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`.trim()
        },
        {
          type:  "text",
          value: "Java is a statically typed language, which means every variable must have a declared type. There are two categories of types: primitives and reference types. Primitives store raw values directly in memory, while reference types store a reference (address) to an object on the heap."
        },
        {
          type:  "text",
          value: "The eight primitive types in Java are: byte, short, int, long, float, double, boolean, and char. You will use int, double, and boolean most often in everyday code."
        },
        {
          type:  "code",
          value:
`int age       = 25;          // 32-bit integer
double price  = 9.99;        // 64-bit floating-point
boolean valid = true;        // true or false
char grade    = 'A';         // a single Unicode character
long bigNum   = 9_000_000L;  // underscore separators are allowed`.trim()
        },
        {
          type:  "text",
          value: "Reference types include String, arrays, and any class you define or import. String is special: it is an object, but Java gives it literal syntax so it looks like a primitive. Strings are also immutable — once created, their content cannot be changed."
        },
        {
          type:  "code",
          value:
`String name    = "Alice";
int[]  scores  = {95, 82, 78};
String greeting = "Hello, " + name + "!";  // string concatenation`.trim()
        },
        {
          type:  "text",
          value: "Statements in Java end with a semicolon. Blocks of code are enclosed in curly braces. Java is case-sensitive: String and string are completely different identifiers."
        }
      ],

      exercises: [
        {
          id:   "lesson_1_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a valid Java Hello World program.",
          lines: [
            `    }`,
            `public class HelloWorld {`,
            `        System.out.println("Hello, World!");`,
            `    public static void main(String[] args) {`,
            `}`
          ],
          correctOrder: [1, 3, 2, 0, 4],
          xp: 10
        },
        {
          id:       "lesson_1_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank to declare an integer variable named score with a value of 100.",
          template: `_____ score = 100;`,
          blanks:   ["int"],
          xp: 10
        },
        {
          id:       "lesson_1_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in both blanks to declare a double named price and a boolean named inStock.",
          template: `_____ price = 4.99;\n_____ inStock = true;`,
          blanks:   ["double", "boolean"],
          xp: 15
        },
        {
          id:   "lesson_1_ex_3",
          type: "code_editor",
          prompt: "Write a complete Java program that prints exactly one line: Java is typed!\nThe class must be named Main.\nUse System.out.println for output.",
          correctAnswer:
`public class Main {
    public static void main(String[] args) {
        System.out.println("Java is typed!");
    }
}`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 2 — Variables, Operators & Type Casting
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_2",
      title: "Variables, Operators & Type Casting",

      content: [
        {
          type:  "text",
          value: "A variable is a named storage location. In Java you must declare a variable's type before you can use it. A variable can be declared and then initialized later, or declared and initialized on the same line."
        },
        {
          type:  "code",
          value:
`int x;           // declaration only
x = 10;          // initialization later

int y = 20;      // declaration + initialization on one line
int z = x + y;   // initialized using an expression`.trim()
        },
        {
          type:  "text",
          value: "Java provides the standard arithmetic operators: + (addition), - (subtraction), * (multiplication), / (integer or floating-point division depending on operand types), and % (modulus — the remainder after division). It also provides ++ and -- for increment and decrement."
        },
        {
          type:  "code",
          value:
`int a = 10, b = 3;
System.out.println(a + b);   // 13
System.out.println(a - b);   // 7
System.out.println(a * b);   // 30
System.out.println(a / b);   // 3  (integer division — truncates)
System.out.println(a % b);   // 1  (remainder)

a++;                          // a is now 11
b--;                          // b is now 2`.trim()
        },
        {
          type:  "text",
          value: "Relational operators compare two values and return a boolean: == (equal), != (not equal), > (greater than), < (less than), >= (greater than or equal), <= (less than or equal). Logical operators combine booleans: && (AND), || (OR), ! (NOT)."
        },
        {
          type:  "text",
          value: "Type casting converts a value from one type to another. Widening (implicit) casting happens automatically when no data can be lost — for example, assigning an int to a double. Narrowing (explicit) casting must be written by the programmer using a cast operator because data may be lost."
        },
        {
          type:  "code",
          value:
`// Widening — automatic, safe
int i = 100;
double d = i;        // int → double, no cast needed

// Narrowing — explicit, may lose data
double pi = 3.14159;
int truncated = (int) pi;   // → 3, decimal part discarded

// Casting in expressions
int x = 5, y = 2;
double result = (double) x / y;  // → 2.5 (without cast: 2)`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_2_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to correctly demonstrate widening then narrowing type casting.",
          lines: [
            `int truncated = (int) d;`,
            `int i = 42;`,
            `System.out.println(truncated);`,
            `double d = i;`
          ],
          correctOrder: [1, 3, 0, 2],
          xp: 10
        },
        {
          id:       "lesson_2_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank to explicitly cast the double value 7.9 to an int and store it in result.",
          template: `int result = _____ 7.9;`,
          blanks:   ["(int)"],
          xp: 10
        },
        {
          id:       "lesson_2_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in both blanks. The first blank is the modulus operator. The second blank is the result of 17 % 5.",
          template: `int remainder = 17 _____ 5;   // remainder is _____`,
          blanks:   ["%", "2"],
          xp: 15
        },
        {
          id:   "lesson_2_ex_3",
          type: "code_editor",
          prompt: "Declare an int named a with value 9 and an int named b with value 4.\nOn the next line, declare a double named result and assign it (double) a / b.\nOn the last line, print result using System.out.println.",
          correctAnswer:
`int a = 9;
int b = 4;
double result = (double) a / b;
System.out.println(result);`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 3 — Control Flow: Conditionals & Loops
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_3",
      title: "Control Flow: Conditionals & Loops",

      content: [
        {
          type:  "text",
          value: "Control flow statements let your program make decisions and repeat actions. The most fundamental decision-making construct is the if-else statement."
        },
        {
          type:  "code",
          value:
`int score = 72;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}`.trim()
        },
        {
          type:  "text",
          value: "The switch statement is a cleaner alternative when you're comparing one variable against many discrete constant values. Java 14+ introduced enhanced switch expressions that are more concise and do not fall through by default."
        },
        {
          type:  "code",
          value:
`String day = "MONDAY";

switch (day) {
    case "SATURDAY":
    case "SUNDAY":
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Weekday");
        break;
}`.trim()
        },
        {
          type:  "text",
          value: "Java has three loop constructs. The for loop is best when you know the number of iterations in advance. The while loop repeats as long as a condition is true. The do-while loop always executes at least once before checking the condition. The enhanced for-each loop iterates over arrays and collections without managing an index."
        },
        {
          type:  "code",
          value:
`// Traditional for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
int count = 0;
while (count < 3) {
    System.out.println("count: " + count);
    count++;
}

// For-each loop over an array
int[] numbers = {10, 20, 30};
for (int n : numbers) {
    System.out.println(n);
}`.trim()
        },
        {
          type:  "text",
          value: "Use break to exit a loop immediately, and continue to skip the rest of the current iteration and move to the next one."
        }
      ],

      exercises: [
        {
          id:   "lesson_3_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a for loop that prints 0, 1, and 2 on separate lines.",
          lines: [
            `}`,
            `    System.out.println(i);`,
            `for (int i = 0; i < 3; i++) {`
          ],
          correctOrder: [2, 1, 0],
          xp: 10
        },
        {
          id:       "lesson_3_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in both blanks to complete the if-else. The blank in the condition is the operator for 'greater than or equal to'. The blank in the else branch should print the word: Fail",
          template: `if (score _____ 60) {\n    System.out.println("Pass");\n} else {\n    System.out.println("_____");\n}`,
          blanks:   [">=", "Fail"],
          xp: 15
        },
        {
          id:   "lesson_3_ex_2",
          type: "code_editor",
          prompt: "Write a for-each loop over an int array named nums that contains the values 1, 2, 3.\nDeclare the array on the first line.\nOn the second line start the for-each loop using the variable name n.\nInside the loop, print n using System.out.println.",
          correctAnswer:
`int[] nums = {1, 2, 3};
for (int n : nums) {
    System.out.println(n);
}`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 4 — Methods
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_4",
      title: "Methods",

      content: [
        {
          type:  "text",
          value: "A method is a named block of code that performs a specific task. Methods promote reuse: you define the logic once and call it as many times as you need. Every method declaration specifies an access modifier, a return type, a name, and a parameter list."
        },
        {
          type:  "code",
          value:
`// Syntax: accessModifier returnType methodName(paramType paramName, ...) { ... }

public static int add(int a, int b) {
    return a + b;
}

public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
    // void means the method returns no value
}`.trim()
        },
        {
          type:  "text",
          value: "Calling a method passes control to its body. When the method finishes (or hits a return statement), control returns to the call site. If the method returns a value, you can store or use it immediately."
        },
        {
          type:  "code",
          value:
`public class MathUtil {

    public static int multiply(int x, int y) {
        return x * y;
    }

    public static void main(String[] args) {
        int product = multiply(6, 7);    // call with arguments 6 and 7
        System.out.println(product);     // prints 42

        greet("Jordan");                 // prints: Hello, Jordan!
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`.trim()
        },
        {
          type:  "text",
          value: "Parameters are local to the method — changes to primitive parameters inside a method do not affect the caller's variables. This is called pass-by-value. With reference types, the reference is passed by value, so the object itself can be mutated, but the caller's reference cannot be reassigned."
        },
        {
          type:  "text",
          value: "A method can call itself — this is called recursion. Every recursive method needs a base case that stops the recursion, otherwise the program will crash with a StackOverflowError."
        },
        {
          type:  "code",
          value:
`public static int factorial(int n) {
    if (n <= 1) return 1;        // base case
    return n * factorial(n - 1); // recursive call
}

// factorial(4) → 4 * factorial(3) → 4 * 3 * 2 * 1 → 24`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_4_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a complete method that squares an integer and returns the result.",
          lines: [
            `    return n * n;`,
            `public static int square(int n) {`,
            `}`
          ],
          correctOrder: [1, 0, 2],
          xp: 10
        },
        {
          id:       "lesson_4_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the return type for a method that returns nothing.",
          template: `public static _____ printMessage(String msg) {\n    System.out.println(msg);\n}`,
          blanks:   ["void"],
          xp: 10
        },
        {
          id:       "lesson_4_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank to call the method add with arguments 3 and 5, storing the result in sum.",
          template: `int sum = _____(3, 5);`,
          blanks:   ["add"],
          xp: 10
        },
        {
          id:   "lesson_4_ex_3",
          type: "code_editor",
          prompt: "Write a static method named max that takes two int parameters a and b and returns the larger of the two.\nUse an if-else statement.\nDo not include a class definition — write only the method.",
          correctAnswer:
`public static int max(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 5 — Classes & Objects
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_5",
      title: "Classes & Objects",

      content: [
        {
          type:  "text",
          value: "A class is a blueprint that describes the state (fields) and behavior (methods) of a concept. An object is a concrete instance of that blueprint, created with the new keyword. Each object gets its own copy of the instance fields."
        },
        {
          type:  "code",
          value:
`public class Dog {

    // Fields — the state each Dog object holds
    String name;
    int    age;

    // Constructor — runs when a new Dog is created
    public Dog(String name, int age) {
        this.name = name;   // 'this' refers to the current object
        this.age  = age;
    }

    // Method — behavior all Dogs share
    public void bark() {
        System.out.println(name + " says: Woof!");
    }
}`.trim()
        },
        {
          type:  "text",
          value: "You create objects using the new keyword, which allocates memory on the heap and calls the constructor. You then access fields and methods using the dot (.) operator."
        },
        {
          type:  "code",
          value:
`Dog rex  = new Dog("Rex",  4);
Dog luna = new Dog("Luna", 2);

rex.bark();              // Rex says: Woof!
luna.bark();             // Luna says: Woof!

System.out.println(rex.age);  // 4`.trim()
        },
        {
          type:  "text",
          value: "Constructors can be overloaded — you can define multiple constructors with different parameter lists. A no-argument (default) constructor is provided by Java automatically only if you define no constructors at all."
        },
        {
          type:  "code",
          value:
`public class Point {
    int x, y;

    // No-arg constructor defaults to origin
    public Point() {
        this.x = 0;
        this.y = 0;
    }

    // Constructor with coordinates
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}`.trim()
        },
        {
          type:  "text",
          value: "The toString() method is inherited from Java's Object class and is called automatically when you print an object or concatenate it with a String. Overriding it gives you a human-readable representation."
        }
      ],

      exercises: [
        {
          id:   "lesson_5_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to create a Car object and print its brand field.",
          lines: [
            `System.out.println(myCar.brand);`,
            `Car myCar = new Car("Toyota");`,
            `Car myCar;`
          ],
          correctOrder: [1, 0],
          xp: 10
        },
        {
          id:       "lesson_5_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword used to create a new object instance.",
          template: `Dog d = _____ Dog("Buddy", 3);`,
          blanks:   ["new"],
          xp: 10
        },
        {
          id:       "lesson_5_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank. Inside a constructor, _____ refers to the current object instance.",
          template: `public Dog(String name) {\n    _____.name = name;\n}`,
          blanks:   ["this"],
          xp: 10
        },
        {
          id:   "lesson_5_ex_3",
          type: "code_editor",
          prompt: "Write a complete Java class named Circle.\nIt should have one field: a double named radius.\nIt should have one constructor that accepts a double and assigns it to radius.\nIt should have one method named area that returns (double) Math.PI * radius * radius.\nDo not add a main method.",
          correctAnswer:
`public class Circle {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double area() {
        return Math.PI * radius * radius;
    }
}`,
          xp: 30
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 6 — The 4 Pillars of OOP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_6",
      title: "The 4 Pillars of OOP",

      content: [
        {
          type:  "text",
          value: "Object-Oriented Programming is built on four core principles: Encapsulation, Inheritance, Polymorphism, and Abstraction. Together they help you write code that is modular, reusable, and easier to maintain."
        },
        {
          type:  "text",
          value: "Encapsulation means bundling data and the methods that operate on it together, and controlling access from the outside. Access modifiers enforce this: private restricts access to the same class, protected allows access within the same package and subclasses, and public allows access from anywhere."
        },
        {
          type:  "code",
          value:
`public class BankAccount {
    private double balance;   // hidden from outside

    public double getBalance() {
        return balance;       // controlled read access
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;  // validation before mutation
    }
}`.trim()
        },
        {
          type:  "text",
          value: "Inheritance lets one class (the subclass) acquire the fields and methods of another (the superclass) using the extends keyword. The subclass can add new behavior and use super to call the parent's constructor or methods."
        },
        {
          type:  "code",
          value:
`public class Animal {
    String name;
    public Animal(String name) { this.name = name; }
    public void speak() { System.out.println(name + " makes a sound."); }
}

public class Cat extends Animal {
    public Cat(String name) { super(name); }  // call Animal's constructor

    @Override
    public void speak() {
        System.out.println(name + " says: Meow!");
    }
}`.trim()
        },
        {
          type:  "text",
          value: "Polymorphism means 'many forms'. Method overloading provides compile-time polymorphism — the same method name with different parameter lists. Method overriding (as seen above) provides runtime polymorphism — a subclass provides its own implementation of a superclass method. The @Override annotation tells the compiler to verify the override."
        },
        {
          type:  "text",
          value: "Abstraction hides implementation details and exposes only what is necessary. Abstract classes cannot be instantiated and can contain abstract methods (no body) that subclasses must implement. Interfaces define a contract of methods that any implementing class must provide."
        },
        {
          type:  "code",
          value:
`// Interface — a pure contract
public interface Shape {
    double area();       // implementing classes must provide this
    double perimeter();
}

// Abstract class — partial implementation
public abstract class Vehicle {
    int speed;
    public abstract void move();   // subclasses fill in the body
    public void stop() { speed = 0; }  // concrete method with a body
}`.trim()
        },
        {
          type:  "text",
          value: "A class can implement multiple interfaces but can only extend one class. Interfaces are the preferred way to define contracts in modern Java."
        }
      ],

      exercises: [
        {
          id:   "lesson_6_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a subclass Dog that extends Animal and overrides speak().",
          lines: [
            `}`,
            `    @Override`,
            `public class Dog extends Animal {`,
            `    public void speak() { System.out.println("Woof!"); }`,
            `    public Dog(String name) { super(name); }`
          ],
          correctOrder: [2, 4, 1, 3, 0],
          xp: 10
        },
        {
          id:       "lesson_6_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the access modifier that makes a field visible only within its own class.",
          template: `_____ int balance;`,
          blanks:   ["private"],
          xp: 10
        },
        {
          id:       "lesson_6_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword a class uses to adopt the contract of an interface.",
          template: `public class Circle _____ Shape {`,
          blanks:   ["implements"],
          xp: 10
        },
        {
          id:   "lesson_6_ex_3",
          type: "code_editor",
          prompt: "Write an interface named Printable with one method: void print().\nThen write a class named Document that implements Printable.\nThe print() method should print: Printing document...\nDo not add a main method.",
          correctAnswer:
`public interface Printable {
    void print();
}

public class Document implements Printable {
    @Override
    public void print() {
        System.out.println("Printing document...");
    }
}`,
          xp: 30
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 7 — Advanced OOP: Records, Enums & Binding
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_7",
      title: "Advanced OOP: Records, Enums & Binding",

      content: [
        {
          type:  "text",
          value: "Enums (enumerations) define a fixed set of named constants. They are more type-safe than using plain integers or strings for a limited set of values. Enum constants can also have fields and methods."
        },
        {
          type:  "code",
          value:
`public enum Direction {
    NORTH, SOUTH, EAST, WEST;
}

Direction heading = Direction.NORTH;

switch (heading) {
    case NORTH -> System.out.println("Going north");
    case SOUTH -> System.out.println("Going south");
    default    -> System.out.println("Going east or west");
}`.trim()
        },
        {
          type:  "text",
          value: "Records (introduced in Java 14, finalized in Java 16) are immutable data classes. A single record declaration automatically generates the constructor, getters, equals(), hashCode(), and toString() — removing a huge amount of boilerplate."
        },
        {
          type:  "code",
          value:
`// Traditional immutable class needs ~30 lines; a record needs one:
public record Point(int x, int y) {}

// Using a record
Point p = new Point(3, 4);
System.out.println(p.x());         // 3  — getter auto-generated
System.out.println(p.toString());  // Point[x=3, y=4]`.trim()
        },
        {
          type:  "text",
          value: "Method chaining is a design technique where each method returns the current object (this), allowing multiple calls to be chained in a single expression. Builder patterns use this extensively."
        },
        {
          type:  "code",
          value:
`public class StringBuilder {   // simplified concept
    private String text = "";

    public StringBuilder append(String s) {
        text += s;
        return this;   // return this to enable chaining
    }

    public String build() { return text; }
}

String result = new StringBuilder()
    .append("Hello")
    .append(", ")
    .append("World!")
    .build();`.trim()
        },
        {
          type:  "text",
          value: "Static (early) binding resolves a method call at compile time. This applies to static methods, private methods, and final methods. Dynamic (late) binding resolves a method call at runtime based on the actual object type — this is how polymorphism works in Java. When you call a method on a superclass reference that points to a subclass object, the JVM uses the subclass's version."
        },
        {
          type:  "code",
          value:
`Animal a = new Cat("Whiskers");  // superclass reference, subclass object
a.speak();   // → "Whiskers says: Meow!" — dynamic binding at runtime`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_7_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to define a Season enum with four constants.",
          lines: [
            `    SPRING, SUMMER, AUTUMN, WINTER;`,
            `}`,
            `public enum Season {`
          ],
          correctOrder: [2, 0, 1],
          xp: 10
        },
        {
          id:       "lesson_7_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank to declare a record named Person with fields String name and int age.",
          template: `public _____ Person(String name, int age) {}`,
          blanks:   ["record"],
          xp: 10
        },
        {
          id:       "lesson_7_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank. A method that enables chaining must return _____ at the end.",
          template: `public Builder setName(String name) {\n    this.name = name;\n    return _____;\n}`,
          blanks:   ["this"],
          xp: 10
        },
        {
          id:   "lesson_7_ex_3",
          type: "code_editor",
          prompt: "Define an enum named Status with three constants: PENDING, ACTIVE, CLOSED.\nThen write a single line that declares a Status variable named current and assigns it Status.ACTIVE.",
          correctAnswer:
`public enum Status {
    PENDING, ACTIVE, CLOSED;
}

Status current = Status.ACTIVE;`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 8 — Packages, Modules & Exception Handling
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_8",
      title: "Packages, Modules & Exception Handling",

      content: [
        {
          type:  "text",
          value: "Packages organize related classes into namespaces, much like folders on a file system. The package declaration must be the first statement in a source file. The import statement brings types from other packages into scope."
        },
        {
          type:  "code",
          value:
`package com.myapp.util;   // this file lives in the util package

import java.util.ArrayList;  // import a specific class
import java.util.*;          // import everything in java.util (wildcard)

public class Helper { }`.trim()
        },
        {
          type:  "text",
          value: "Java's module system (introduced in Java 9) adds a higher level of encapsulation on top of packages. A module declares which packages it exports (makes public to other modules) and which modules it requires. This is done in a module-info.java file."
        },
        {
          type:  "text",
          value: "Exception handling lets your program respond to errors gracefully instead of crashing. The try block contains code that might throw an exception. The catch block handles a specific exception type. The finally block always runs — whether or not an exception occurred — and is used for cleanup such as closing files."
        },
        {
          type:  "code",
          value:
`try {
    int result = 10 / 0;   // throws ArithmeticException
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} finally {
    System.out.println("This always runs.");
}`.trim()
        },
        {
          type:  "text",
          value: "You can throw exceptions manually with the throw keyword. A method that might throw a checked exception must declare it with throws in its signature. Unchecked exceptions (RuntimeException and its subclasses) do not need to be declared."
        },
        {
          type:  "code",
          value:
`// Declaring a checked exception
public void readFile(String path) throws IOException {
    // ... file reading logic
}

// Throwing manually
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative: " + age);
    }
    this.age = age;
}`.trim()
        },
        {
          type:  "text",
          value: "You can also create custom exceptions by extending Exception (for checked) or RuntimeException (for unchecked). This lets you signal domain-specific errors with meaningful names."
        },
        {
          type:  "code",
          value:
`public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Tried to withdraw: " + amount);
    }
}`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_8_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a correct try-catch-finally block.",
          lines: [
            `} finally {`,
            `    System.out.println("Done.");`,
            `try {`,
            `    int x = Integer.parseInt("abc");`,
            `} catch (NumberFormatException e) {`,
            `    System.out.println("Bad number: " + e.getMessage());`,
            `}`
          ],
          correctOrder: [2, 3, 4, 5, 0, 1, 6],
          xp: 10
        },
        {
          id:       "lesson_8_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword used to declare that a method may throw a checked exception.",
          template: `public void connect() _____ IOException {`,
          blanks:   ["throws"],
          xp: 10
        },
        {
          id:       "lesson_8_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword used to manually raise an exception.",
          template: `if (name == null) _____ new IllegalArgumentException("Name required");`,
          blanks:   ["throw"],
          xp: 10
        },
        {
          id:   "lesson_8_ex_3",
          type: "code_editor",
          prompt: "Write a custom unchecked exception class named NegativeValueException.\nIt should extend RuntimeException.\nIt should have one constructor that takes an int value and calls super with the message: Value cannot be negative: followed by the value.",
          correctAnswer:
`public class NegativeValueException extends RuntimeException {
    public NegativeValueException(int value) {
        super("Value cannot be negative: " + value);
    }
}`,
          xp: 25
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 9 — Generics, Annotations & Memory Management
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_9",
      title: "Generics, Annotations & Memory Management",

      content: [
        {
          type:  "text",
          value: "Generics allow you to write classes and methods that work with any type while still being type-safe at compile time. Instead of using Object (which requires casting and loses type information), you use a type parameter in angle brackets."
        },
        {
          type:  "code",
          value:
`// A generic box that can hold any type T
public class Box<T> {
    private T value;

    public Box(T value) { this.value = value; }
    public T get()      { return value; }
}

Box<String>  strBox = new Box<>("Hello");
Box<Integer> intBox = new Box<>(42);

String s = strBox.get();  // no cast needed — compiler knows it's a String`.trim()
        },
        {
          type:  "text",
          value: "Generic methods declare their type parameters before the return type. You can also constrain what types are accepted using bounds: <T extends Comparable<T>> means T must implement Comparable."
        },
        {
          type:  "code",
          value:
`public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

System.out.println(max(10, 20));       // 20
System.out.println(max("apple", "banana")); // banana`.trim()
        },
        {
          type:  "text",
          value: "Annotations are metadata markers applied to code elements (classes, methods, fields). They do not change runtime behavior on their own but are read by the compiler or frameworks. Common built-in annotations include @Override (verifies an override), @Deprecated (marks outdated API), and @SuppressWarnings (silences compiler warnings)."
        },
        {
          type:  "code",
          value:
`@Override
public String toString() { return "MyObject"; }

@Deprecated
public void oldMethod() { /* use newMethod() instead */ }

@SuppressWarnings("unchecked")
List list = new ArrayList();  // raw type warning suppressed`.trim()
        },
        {
          type:  "text",
          value: "The JDK (Java Development Kit) is the full toolkit: compiler, JRE, debugger, and tools. The JRE (Java Runtime Environment) is the subset needed to run programs. The JVM (Java Virtual Machine) is the engine that actually executes bytecode — it abstracts away the underlying OS and hardware, giving Java its 'write once, run anywhere' property."
        },
        {
          type:  "text",
          value: "Java manages memory automatically through Garbage Collection (GC). Objects are allocated on the heap. When an object has no more references pointing to it, the GC marks it for collection and eventually reclaims its memory. You do not call free() or delete as in C/C++. The GC runs in the background, but you can influence behavior with JVM flags."
        },
        {
          type:  "code",
          value:
`// Once 'dog' goes out of scope or is reassigned, the old Dog object
// becomes eligible for garbage collection — you don't have to free it.
Dog dog = new Dog("Rex", 4);
dog = null;  // the old Dog object is now unreachable — GC can collect it`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_9_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to define and use a generic Pair class that holds two values.",
          lines: [
            `    public Pair(A first, B second) { this.first = first; this.second = second; }`,
            `Pair<String, Integer> p = new Pair<>("Score", 100);`,
            `public class Pair<A, B> {`,
            `    A first; B second;`,
            `}`
          ],
          correctOrder: [2, 3, 0, 4, 1],
          xp: 10
        },
        {
          id:       "lesson_9_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the annotation that tells the compiler to verify that the method below is a proper override.",
          template: `_____\npublic String toString() { return "Item"; }`,
          blanks:   ["@Override"],
          xp: 10
        },
        {
          id:       "lesson_9_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword used to make an object unreachable and eligible for garbage collection.",
          template: `myObject = _____;`,
          blanks:   ["null"],
          xp: 10
        },
        {
          id:   "lesson_9_ex_3",
          type: "code_editor",
          prompt: "Write a generic method named printItem that takes one type parameter T and one parameter item of type T.\nThe method should print the item using System.out.println.\nThe return type is void.\nDo not include a class definition.",
          correctAnswer:
`public static <T> void printItem(T item) {
    System.out.println(item);
}`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 10 — Collections: Lists, Sets & Maps
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_10",
      title: "Collections: Lists, Sets & Maps",

      content: [
        {
          type:  "text",
          value: "The Java Collections Framework provides a unified set of interfaces and classes for storing and manipulating groups of objects. The three most important interfaces are List, Set, and Map."
        },
        {
          type:  "text",
          value: "A List is an ordered collection that allows duplicate elements. ArrayList is backed by a dynamic array — fast for random access by index. LinkedList is backed by a doubly linked list — faster for frequent insertions and deletions in the middle."
        },
        {
          type:  "code",
          value:
`import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Alice");         // duplicates are allowed

System.out.println(names.get(0));   // Alice
System.out.println(names.size());   // 3
names.remove("Bob");
System.out.println(names);          // [Alice, Alice]`.trim()
        },
        {
          type:  "text",
          value: "A Set is an unordered collection that does not allow duplicates. HashSet provides the fastest operations (O(1) average) but gives no ordering guarantees. LinkedHashSet preserves insertion order. TreeSet keeps elements in sorted (natural or custom) order."
        },
        {
          type:  "code",
          value:
`import java.util.HashSet;
import java.util.Set;

Set<String> cities = new HashSet<>();
cities.add("Paris");
cities.add("Tokyo");
cities.add("Paris");   // duplicate — silently ignored

System.out.println(cities.size());         // 2
System.out.println(cities.contains("Tokyo")); // true`.trim()
        },
        {
          type:  "text",
          value: "A Map stores key-value pairs. Keys are unique; each key maps to exactly one value. HashMap is the most commonly used implementation — it provides O(1) average lookup. TreeMap keeps keys in sorted order. LinkedHashMap preserves insertion order."
        },
        {
          type:  "code",
          value:
`import java.util.HashMap;
import java.util.Map;

Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob",   82);
scores.put("Alice", 99);   // replaces the previous value for "Alice"

System.out.println(scores.get("Alice"));         // 99
System.out.println(scores.containsKey("Bob"));   // true
System.out.println(scores.size());               // 2

// Iterating over entries
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_10_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to create an ArrayList of integers, add two values, then print the list.",
          lines: [
            `nums.add(10);`,
            `System.out.println(nums);`,
            `List<Integer> nums = new ArrayList<>();`,
            `nums.add(20);`
          ],
          correctOrder: [2, 0, 3, 1],
          xp: 10
        },
        {
          id:       "lesson_10_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the Set implementation that keeps elements in their natural sorted order.",
          template: `Set<String> sorted = new _____<>();`,
          blanks:   ["TreeSet"],
          xp: 10
        },
        {
          id:       "lesson_10_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in both blanks to put a key-value pair in a Map and retrieve it.",
          template: `map._____(\"name\", \"Alice\");\nString s = map._____("name");`,
          blanks:   ["put", "get"],
          xp: 15
        },
        {
          id:   "lesson_10_ex_3",
          type: "code_editor",
          prompt: "Create a HashMap<String, Integer> named inventory.\nAdd two entries: apple with value 5, and banana with value 3.\nPrint the value for apple using System.out.println.",
          correctAnswer:
`Map<String, Integer> inventory = new HashMap<>();
inventory.put("apple", 5);
inventory.put("banana", 3);
System.out.println(inventory.get("apple"));`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 11 — Collections: Queues, Stacks & Iterators
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_11",
      title: "Collections: Queues, Stacks & Iterators",

      content: [
        {
          type:  "text",
          value: "A Queue is a first-in, first-out (FIFO) structure. Elements are added at the tail and removed from the head. PriorityQueue orders elements by their natural order or a custom Comparator — the head is always the smallest (or highest-priority) element."
        },
        {
          type:  "code",
          value:
`import java.util.PriorityQueue;
import java.util.Queue;

Queue<Integer> pq = new PriorityQueue<>();
pq.offer(30);
pq.offer(10);
pq.offer(20);

System.out.println(pq.peek());   // 10 — the smallest, not removed
System.out.println(pq.poll());   // 10 — removes and returns smallest
System.out.println(pq.poll());   // 20`.trim()
        },
        {
          type:  "text",
          value: "ArrayDeque (double-ended queue) is a resizable array implementation that can serve as both a Queue (FIFO) and a Stack (LIFO). It is faster than the legacy Stack class (which extends Vector) and is the preferred choice for both use cases."
        },
        {
          type:  "code",
          value:
`import java.util.ArrayDeque;
import java.util.Deque;

// Used as a Stack (LIFO)
Deque<String> stack = new ArrayDeque<>();
stack.push("first");
stack.push("second");
stack.push("third");

System.out.println(stack.pop());  // third — last in, first out
System.out.println(stack.pop());  // second`.trim()
        },
        {
          type:  "text",
          value: "An Iterator provides a uniform way to traverse any collection without exposing its internal structure. The hasNext() method returns true if there are more elements; next() returns the next element. You can also call remove() on the iterator to safely remove the current element during iteration."
        },
        {
          type:  "code",
          value:
`import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

List<String> items = new ArrayList<>();
items.add("alpha");
items.add("beta");
items.add("gamma");

Iterator<String> it = items.iterator();
while (it.hasNext()) {
    String item = it.next();
    if (item.equals("beta")) {
        it.remove();  // safe removal during iteration
    }
}
System.out.println(items);  // [alpha, gamma]`.trim()
        },
        {
          type:  "text",
          value: "The Collections utility class provides static helper methods such as sort(), reverse(), shuffle(), min(), max(), and frequency(). These work on any List or Collection."
        }
      ],

      exercises: [
        {
          id:   "lesson_11_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to use an ArrayDeque as a stack: push two items then pop one.",
          lines: [
            `System.out.println(stack.pop());`,
            `stack.push("A");`,
            `Deque<String> stack = new ArrayDeque<>();`,
            `stack.push("B");`
          ],
          correctOrder: [2, 1, 3, 0],
          xp: 10
        },
        {
          id:       "lesson_11_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the PriorityQueue method that removes and returns the head element.",
          template: `Integer head = pq._____;`,
          blanks:   ["poll()"],
          xp: 10
        },
        {
          id:       "lesson_11_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the Iterator method that checks whether more elements remain.",
          template: `while (it._____()) {\n    System.out.println(it.next());\n}`,
          blanks:   ["hasNext"],
          xp: 10
        },
        {
          id:   "lesson_11_ex_3",
          type: "code_editor",
          prompt: "Create a PriorityQueue<Integer> named pq.\nAdd the values 50, 10, and 30 using offer().\nPrint the result of pq.poll() using System.out.println.",
          correctAnswer:
`Queue<Integer> pq = new PriorityQueue<>();
pq.offer(50);
pq.offer(10);
pq.offer(30);
System.out.println(pq.poll());`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 12 — Functional Programming: Lambdas & Functional Interfaces
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_12",
      title: "Lambdas & Functional Interfaces",

      content: [
        {
          type:  "text",
          value: "Java 8 introduced a functional programming style. A functional interface is any interface with exactly one abstract method. Lambda expressions are a concise syntax for providing the implementation of a functional interface without writing a full anonymous class."
        },
        {
          type:  "code",
          value:
`// Before Java 8 — anonymous class
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running!");
    }
};

// Java 8+ — lambda expression (much shorter)
Runnable r2 = () -> System.out.println("Running!");

r1.run();
r2.run();`.trim()
        },
        {
          type:  "text",
          value: "The java.util.function package contains the most common built-in functional interfaces. Predicate<T> takes a T and returns boolean. Function<T, R> takes a T and returns an R. Consumer<T> takes a T and returns nothing. Supplier<T> takes nothing and returns a T."
        },
        {
          type:  "code",
          value:
`import java.util.function.Predicate;
import java.util.function.Function;
import java.util.function.Consumer;
import java.util.function.Supplier;

Predicate<Integer> isEven   = n -> n % 2 == 0;
Function<String, Integer> length = s -> s.length();
Consumer<String>  printer   = s -> System.out.println(s);
Supplier<String>  greeting  = () -> "Hello, World!";

System.out.println(isEven.test(4));       // true
System.out.println(length.apply("Java")); // 4
printer.accept("Hi!");                    // Hi!
System.out.println(greeting.get());       // Hello, World!`.trim()
        },
        {
          type:  "text",
          value: "Lambdas can capture local variables from the enclosing scope, but those variables must be effectively final (their value never changes after assignment). This restriction exists because lambdas may be executed later in a different context."
        },
        {
          type:  "text",
          value: "Method references are a shorthand for lambdas that simply call an existing method. They use the :: operator. There are four kinds: static method reference, instance method reference on a specific object, instance method reference on an arbitrary object of a type, and constructor reference."
        },
        {
          type:  "code",
          value:
`import java.util.Arrays;
import java.util.List;

List<String> words = Arrays.asList("banana", "apple", "cherry");

// Lambda version
words.forEach(w -> System.out.println(w));

// Method reference version — shorter, same result
words.forEach(System.out::println);`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_12_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to define a Predicate<String> that returns true if a string is empty, then test it.",
          lines: [
            `System.out.println(isEmpty.test(""));`,
            `Predicate<String> isEmpty = s -> s.isEmpty();`,
            `System.out.println(isEmpty.test("hi"));`
          ],
          correctOrder: [1, 0, 2],
          xp: 10
        },
        {
          id:       "lesson_12_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank to complete the lambda assigned to a Consumer<String> that prints its argument.",
          template: `Consumer<String> printer = s -> _____(s);`,
          blanks:   ["System.out.println"],
          xp: 10
        },
        {
          id:       "lesson_12_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the method reference operator.",
          template: `words.forEach(System.out_____println);`,
          blanks:   ["::"],
          xp: 10
        },
        {
          id:   "lesson_12_ex_3",
          type: "code_editor",
          prompt: "Declare a Supplier<String> named hello that returns the string Hello from a lambda.\nOn the next line, print the result of calling hello.get() using System.out.println.",
          correctAnswer:
`Supplier<String> hello = () -> "Hello";
System.out.println(hello.get());`,
          xp: 20
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 13 — Streams API & Optionals
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_13",
      title: "Streams API & Optionals",

      content: [
        {
          type:  "text",
          value: "The Streams API (Java 8+) lets you process sequences of elements in a declarative, pipeline style. A stream is not a data structure — it is a view of data that you can filter, transform, and collect. Streams are lazy: intermediate operations are not executed until a terminal operation is called."
        },
        {
          type:  "code",
          value:
`import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)      // intermediate — keep only even numbers
    .map(n -> n * n)               // intermediate — square each one
    .collect(Collectors.toList()); // terminal — gather into a List

System.out.println(evens);  // [4, 16, 36, 64]`.trim()
        },
        {
          type:  "text",
          value: "Common intermediate operations: filter (keep elements matching a predicate), map (transform each element), flatMap (flatten nested streams), sorted (sort), distinct (remove duplicates), limit (take first n), skip (skip first n). Common terminal operations: collect, forEach, reduce, count, findFirst, anyMatch, allMatch, min, max."
        },
        {
          type:  "code",
          value:
`List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// Find all names starting with 'A', sorted alphabetically
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .sorted()
    .collect(Collectors.toList());

System.out.println(result);  // [Alice, Anna]

// Count how many names have more than 3 characters
long count = names.stream()
    .filter(name -> name.length() > 3)
    .count();
System.out.println(count);  // 2`.trim()
        },
        {
          type:  "text",
          value: "Optional<T> is a container that may or may not hold a non-null value. It was introduced to make null handling explicit and safe. Instead of returning null (and potentially causing a NullPointerException), a method returns Optional.empty() or Optional.of(value)."
        },
        {
          type:  "code",
          value:
`import java.util.Optional;

Optional<String> found = names.stream()
    .filter(name -> name.startsWith("B"))
    .findFirst();

// Safe access
if (found.isPresent()) {
    System.out.println("Found: " + found.get());  // Bob
}

// Or use orElse for a fallback
String name = found.orElse("No match");

// Or use ifPresent for a consumer
found.ifPresent(n -> System.out.println("Name: " + n));`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_13_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to form a stream pipeline that collects strings longer than 3 characters into a list.",
          lines: [
            `    .collect(Collectors.toList());`,
            `    .filter(s -> s.length() > 3)`,
            `List<String> result = words.stream()`
          ],
          correctOrder: [2, 1, 0],
          xp: 10
        },
        {
          id:       "lesson_13_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the stream terminal operation that returns the number of elements.",
          template: `long total = numbers.stream().filter(n -> n > 0)._____;`,
          blanks:   ["count()"],
          xp: 10
        },
        {
          id:       "lesson_13_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank to safely unwrap an Optional with a fallback of Unknown if it is empty.",
          template: `String value = opt._____(\"Unknown\");`,
          blanks:   ["orElse"],
          xp: 10
        },
        {
          id:   "lesson_13_ex_3",
          type: "code_editor",
          prompt: "Write a stream pipeline over a List<String> named words.\nFilter to keep only words that start with the letter J.\nMap each word to its uppercase version using String::toUpperCase.\nCollect into a List<String> named result.\nAssume words and the required imports already exist.",
          correctAnswer:
`List<String> result = words.stream()
    .filter(w -> w.startsWith("J"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());`,
          xp: 25
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 14 — Build Tools & I/O
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_14",
      title: "Build Tools & I/O",

      content: [
        {
          type:  "text",
          value: "Reading from the console is done with the Scanner class. You wrap System.in in a Scanner, then call methods like nextLine(), nextInt(), or nextDouble() to read input. Always close the Scanner when you are done."
        },
        {
          type:  "code",
          value:
`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = sc.nextLine();
System.out.println("Hello, " + name + "!");
sc.close();`.trim()
        },
        {
          type:  "text",
          value: "For reading files efficiently, BufferedReader wraps a FileReader (or any Reader) and reads text line by line. It buffers input, making it much faster than reading character-by-character. The try-with-resources syntax (try (Resource r = ...)) ensures the reader is closed automatically."
        },
        {
          type:  "code",
          value:
`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error reading file: " + e.getMessage());
}`.trim()
        },
        {
          type:  "text",
          value: "Writing to files is done with BufferedWriter or PrintWriter. The Files utility class (in java.nio.file) provides convenient one-liner methods for reading and writing files as strings or lists of lines — often the easiest option for simple tasks."
        },
        {
          type:  "code",
          value:
`import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

// Read all lines at once
List<String> lines = Files.readAllLines(Path.of("data.txt"));

// Write a string to a file (creates or overwrites)
Files.writeString(Path.of("output.txt"), "Hello, file!");`.trim()
        },
        {
          type:  "text",
          value: "Maven and Gradle are the dominant build tools for Java projects. They manage dependencies (external libraries your project needs), compile source files, run tests, and package your application into a JAR. Instead of manually downloading JAR files, you declare dependencies in a config file and the tool fetches them from a central repository."
        },
        {
          type:  "code",
          value:
`<!-- Maven — pom.xml — declaring a dependency on Google's Guava library -->
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>32.1.3-jre</version>
</dependency>`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_14_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to read one line from System.in with a Scanner and print it back.",
          lines: [
            `System.out.println(line);`,
            `Scanner sc = new Scanner(System.in);`,
            `String line = sc.nextLine();`,
            `sc.close();`
          ],
          correctOrder: [1, 2, 0, 3],
          xp: 10
        },
        {
          id:       "lesson_14_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the BufferedReader method that returns the next line of text, or null at end-of-file.",
          template: `String line = reader._____;`,
          blanks:   ["readLine()"],
          xp: 10
        },
        {
          id:       "lesson_14_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the java.nio.file class that provides utility methods like readAllLines() and writeString().",
          template: `List<String> lines = _____.readAllLines(Path.of("file.txt"));`,
          blanks:   ["Files"],
          xp: 10
        },
        {
          id:   "lesson_14_ex_3",
          type: "code_editor",
          prompt: "Write a try-with-resources block that opens a BufferedReader on a FileReader for the file notes.txt.\nInside the loop, read lines with readLine() into a variable named line and print each line.\nCatch IOException and print its message.\nAssume the required imports already exist.",
          correctAnswer:
`try (BufferedReader reader = new BufferedReader(new FileReader("notes.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println(e.getMessage());
}`,
          xp: 30
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LESSON 15 — Concurrency & Multithreading
    // ─────────────────────────────────────────────────────────────────────────
    {
      id:    "lesson_15",
      title: "Concurrency & Multithreading",

      content: [
        {
          type:  "text",
          value: "A thread is the smallest unit of execution within a process. Java programs always have at least one thread — the main thread. You can create additional threads to do work in parallel. There are two classic ways: extending the Thread class or implementing the Runnable interface."
        },
        {
          type:  "code",
          value:
`// Option 1: Extend Thread
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

// Option 2: Implement Runnable (preferred — allows extending another class)
Runnable task = () -> System.out.println("Task running in: " + Thread.currentThread().getName());

// Starting threads
new MyThread().start();            // start() creates the OS thread; run() would not
new Thread(task).start();`.trim()
        },
        {
          type:  "text",
          value: "Virtual threads (Project Loom, finalized in Java 21) are lightweight threads managed by the JVM rather than the OS. Traditional platform threads are expensive — creating thousands of them is impractical. Virtual threads are cheap enough to create one per task, dramatically simplifying concurrent I/O-bound code."
        },
        {
          type:  "code",
          value:
`// Creating a virtual thread (Java 21+)
Thread vt = Thread.ofVirtual().start(() -> {
    System.out.println("Virtual thread: " + Thread.currentThread().isVirtual());
});
vt.join();  // wait for it to finish

// Running thousands of virtual threads — no problem
for (int i = 0; i < 10_000; i++) {
    Thread.ofVirtual().start(() -> doWork());
}`.trim()
        },
        {
          type:  "text",
          value: "The Java Memory Model (JMM) defines the rules for how threads interact through memory. Each thread may cache variable values in CPU registers or caches for performance. This means one thread's write to a variable may not be immediately visible to another thread — a phenomenon called visibility failure."
        },
        {
          type:  "text",
          value: "The volatile keyword guarantees that reads and writes to a variable always go directly to main memory, bypassing the CPU cache. This ensures all threads always see the most recent value. Use volatile for flags and state variables that are read by one thread and written by another."
        },
        {
          type:  "code",
          value:
`public class Server {
    private volatile boolean running = true;  // volatile ensures visibility

    public void stop() {
        running = false;  // written by one thread
    }

    public void run() {
        while (running) {    // read by another thread — sees the update immediately
            processRequest();
        }
    }
}`.trim()
        },
        {
          type:  "text",
          value: "volatile alone is not enough when a variable is both read and written by multiple threads (e.g., a counter). For that you need synchronization with the synchronized keyword, or atomic classes from java.util.concurrent.atomic such as AtomicInteger. The JMM guarantees that properly synchronized code behaves consistently across all JVM implementations."
        },
        {
          type:  "code",
          value:
`import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger counter = new AtomicInteger(0);

// Safe increment from multiple threads — no race condition
counter.incrementAndGet();

System.out.println(counter.get());`.trim()
        }
      ],

      exercises: [
        {
          id:   "lesson_15_ex_0",
          type: "reorder",
          prompt: "Arrange these lines to create a Runnable lambda, wrap it in a Thread, and start it.",
          lines: [
            `t.start();`,
            `Thread t = new Thread(task);`,
            `Runnable task = () -> System.out.println("Hello from thread!");`
          ],
          correctOrder: [2, 1, 0],
          xp: 10
        },
        {
          id:       "lesson_15_ex_1",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the keyword that ensures a variable's value is always read from and written to main memory, preventing CPU-cache visibility issues.",
          template: `private _____ boolean active = true;`,
          blanks:   ["volatile"],
          xp: 10
        },
        {
          id:       "lesson_15_ex_2",
          type:     "fill_blank",
          prompt:   "Fill in the blank with the Thread factory method (Java 21+) used to create a virtual thread.",
          template: `Thread vt = Thread._____.start(() -> System.out.println("virtual"));`,
          blanks:   ["ofVirtual()"],
          xp: 10
        },
        {
          id:   "lesson_15_ex_3",
          type: "code_editor",
          prompt: "Write a class named Counter.\nIt should have one field: a private volatile int named count initialized to 0.\nIt should have one method: public void increment() that adds 1 to count.\nIt should have one method: public int getCount() that returns count.\nDo not add a main method.",
          correctAnswer:
`public class Counter {
    private volatile int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}`,
          xp: 25
        },
        {
          id:   "lesson_15_ex_4",
          type: "code_editor",
          prompt: "Write a Runnable lambda that prints: Concurrency is fun!\nAssign it to a variable named task.\nCreate a Thread named t using task.\nCall t.start() to launch the thread.",
          correctAnswer:
`Runnable task = () -> System.out.println("Concurrency is fun!");
Thread t = new Thread(task);
t.start();`,
          xp: 20
        }
      ]
    }

  ];

  return { meta, lessons };

})();
