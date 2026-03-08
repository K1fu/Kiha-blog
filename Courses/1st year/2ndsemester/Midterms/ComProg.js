const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [

    // ===== Multiple Choice (50) =====

    {
      type: "mc",
      q: "Debugging is defined as the process of identifying and rectifying errors in a program that leads to:",
      o: ["Slow program execution", "Unexpected behavior", "Memory overflow", "Compilation failure"],
      a: 1
    },
    {
      type: "mc",
      q: "Which of the following correctly lists the three steps of a typical debugging process in order?",
      o: [
        "Fixing the error → Identifying the cause → Examining error symptoms",
        "Identifying the cause → Examining error symptoms → Fixing the error",
        "Examining error symptoms → Identifying the cause → Fixing the error",
        "Examining error symptoms → Fixing the error → Identifying the cause"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "Backtracking is also called:",
      o: ["Forward debugging", "Backward debugging", "Cluster debugging", "Binary debugging"],
      a: 1
    },
    {
      type: "mc",
      q: "Which debugging technique starts from the point the problem first began and works backward through the code?",
      o: ["Rubber Ducking", "Binary Search", "Backtracking", "Log Analysis"],
      a: 2
    },
    {
      type: "mc",
      q: "Which of the following is listed as an example debugging tool in the handout?",
      o: ["Eclipse Debugger", "IntelliJ Inspector", "Chrome DevTools", "NetBeans Profiler"],
      a: 2
    },
    {
      type: "mc",
      q: "A breakpoint is defined as:",
      o: [
        "A tool that automatically finds and fixes bugs",
        "The point in the code to temporarily stop the execution of the program to inspect the state of its functionality",
        "A line of code that throws an exception intentionally",
        "A marker that documents where an error was previously found"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "In Binary Search debugging, the code is divided into halves to:",
      o: [
        "Document all bugs found",
        "Group related bugs together",
        "Systematically narrow the bug location",
        "Rewrite the problematic sections"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "Rubber Ducking is described as an analogy for:",
      o: [
        "Using automated testing tools shaped like a rubber duck",
        "Explaining a problem to an object like a rubber duck to identify the issue",
        "Grouping bugs into categories named after objects",
        "A tool that alerts when a bug is found"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "Log Analysis as a debugging technique involves:",
      o: [
        "Grouping error reports into classes of related bugs",
        "Dividing the code into halves",
        "Placing log statements in strategic areas of the code to provide valuable information for debugging",
        "Taking notes after each debugging session"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "Clustering Bugs as a debugging technique means:",
      o: [
        "Placing log statements in strategic areas",
        "Grouping error reports into classes of related bugs as they often share common causes or patterns",
        "Dividing code into sections and commenting them out",
        "Stepping through each line of code manually"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "An exception is defined as:",
      o: [
        "A normal program termination event",
        "An unexpected or error condition encountered in programming",
        "A user-defined error message",
        "A type of syntax error found at compile time"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "If an unplanned exception occurs during a program's execution, it is called a:",
      o: ["Syntax error", "Logic error", "Runtime error", "Compilation error"],
      a: 2
    },
    {
      type: "mc",
      q: "If an exception is discovered during program compilation, it is called a:",
      o: ["Runtime error", "Syntax error", "Logic error", "Memory error"],
      a: 1
    },
    {
      type: "mc",
      q: "Which Java class represents more serious errors that a program usually might not recover from?",
      o: ["Exception Class", "RuntimeException Class", "Error Class", "Throwable Class"],
      a: 2
    },
    {
      type: "mc",
      q: "Which Java class represents less serious errors indicating unusual conditions from which the program can recover?",
      o: ["Error Class", "VirtualMachineError Class", "Throwable Class", "Exception Class"],
      a: 3
    },
    {
      type: "mc",
      q: "The Throwable class is considered the superclass for all errors and exceptions and originates from the:",
      o: ["Exception class", "Error class", "Object class", "RuntimeException class"],
      a: 2
    },
    {
      type: "mc",
      q: "IOException is described as:",
      o: [
        "Raised whenever a wrong mathematical operation appears in the code during runtime",
        "The base class for exceptions thrown while accessing data from files, directories, and streams",
        "Only detected during the execution of the application",
        "Indicates that the element being requested does not exist"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "ArithmeticException is raised whenever:",
      o: [
        "An array has been accessed with an illegal index",
        "The user does not provide the proper type of input",
        "A wrong mathematical operation appears in the code during runtime",
        "There is insufficient space to allocate an object"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "ArrayIndexOutOfBoundsException indicates that an array has been accessed with an illegal index that is:",
      o: [
        "Equal to 1",
        "Either negative or greater than or equal to the size of the array",
        "Greater than zero",
        "Less than the array size but non-integer"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "InputMismatchException occurs when:",
      o: [
        "A wrong mathematical operation appears in the code",
        "An array is accessed out of bounds",
        "The user does not provide the proper type of input or input is out of range",
        "The Java Virtual Machine runs out of resources"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "VirtualMachineError indicates that:",
      o: [
        "There is insufficient space to allocate an object",
        "An unexpected internal error has occurred in the JVM",
        "The Java Virtual Machine is broken or has run out of resources necessary for it to continue operating",
        "The element being requested does not exist"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "OutOfMemoryError is thrown when:",
      o: [
        "The Java Virtual Machine is broken",
        "There is insufficient space to allocate an object",
        "An unexpected internal error has occurred in the JVM",
        "An invalid array subscript value is used"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "InternalError indicates:",
      o: [
        "The Java Virtual Machine is broken or has run out of resources",
        "There is insufficient space to allocate an object",
        "An unexpected internal error has occurred in the Java Virtual Machine",
        "The element being requested does not exist"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "In the Division class example, what exception is thrown when the user enters 0 as the denominator?",
      o: ["InputMismatchException", "IOException", "NullPointerException", "ArithmeticException"],
      a: 3
    },
    {
      type: "mc",
      q: "In the Division class example, what exception is thrown when the user enters a string like 'three' or a float like '3.0' for the denominator?",
      o: ["ArithmeticException", "IndexOutOfBoundsException", "InputMismatchException", "IOException"],
      a: 2
    },
    {
      type: "mc",
      q: "The list of error messages which shows each method called as the program ran after each attempted execution is called:",
      o: ["Error dump", "Runtime log", "Stack trace history list or stack trace", "Exception report"],
      a: 2
    },
    {
      type: "mc",
      q: "A try block consists of the try keyword followed by a pair of curly braces and:",
      o: [
        "Only the catch keyword immediately after",
        "Executable statements between the curly braces, including statements that might cause exceptions",
        "A return statement at the end",
        "A list of exception types to handle"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "A throw statement sends an Exception object out of a block or method so it can be:",
      o: ["Deleted from memory", "Logged to a file automatically", "Handled elsewhere", "Converted to a syntax error"],
      a: 2
    },
    {
      type: "mc",
      q: "A catch block looks like a method named catch() but it is NOT a method because:",
      o: [
        "It has no parameters",
        "It has no return type and cannot be called directly",
        "It does not use curly braces",
        "It cannot handle multiple exception types"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "The finally block executes:",
      o: [
        "Only when an exception is thrown",
        "Only when no exception is thrown",
        "Only when the catch block fails",
        "Whether or not the preceding try block identifies an Exception"
      ],
      a: 3
    },
    {
      type: "mc",
      q: "In the DivisionMistakeCaught class, when a valid denominator is entered, the catch block:",
      o: [
        "Executes and displays a success message",
        "Is bypassed",
        "Executes before the try block",
        "Throws a new exception"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "A computer file is defined as a collection of data stored on a nonvolatile device or a:",
      o: ["Temporary memory location", "Virtual memory space", "Permanent storage device", "Cache register"],
      a: 2
    },
    {
      type: "mc",
      q: "Text files contain data that can be read in a text editor because the data is encoded using:",
      o: ["Binary format (0s and 1s)", "ASCII or Unicode", "Hexadecimal format", "Base-64 encoding"],
      a: 1
    },
    {
      type: "mc",
      q: "Binary files contain data items that have not been encoded as text; examples include:",
      o: [
        "Payroll files and employee data",
        "Program source files and documentation",
        "Music, images, and compiled program files with a .class extension",
        "Configuration files and log files"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "In a Windows operating system, the path identifier that separates path components is the:",
      o: ["Forward slash (/)", "Colon (:)", "Pipe (|)", "Backslash (\\)"],
      a: 3
    },
    {
      type: "mc",
      q: "In the Solaris (UNIX) operating system, which character is used as the delimiter for path components?",
      o: ["Backslash (\\)", "Forward slash (/)", "Colon (:)", "Period (.)"],
      a: 1
    },
    {
      type: "mc",
      q: "Which Java import statement is used to access both the Path and Files classes?",
      o: ["import java.io.*;", "import java.util.*;", "import java.nio.file.*;", "import java.file.path.*;"],
      a: 2
    },
    {
      type: "mc",
      q: "The 'nio' in java.nio stands for:",
      o: ["Network Input/Output", "Native Input/Output", "New Input/Output", "Node Input/Output"],
      a: 2
    },
    {
      type: "mc",
      q: "In OOP, a factory is:",
      o: [
        "A static method that returns primitive types",
        "An interface that defines file operations",
        "An abstract class for stream processing",
        "An object that creates other objects"
      ],
      a: 3
    },
    {
      type: "mc",
      q: "Which class is described as a 'helper class that eliminates the need to create a FileSystem object'?",
      o: ["FileSystem", "FileSystems", "Path", "Paths"],
      a: 3
    },
    {
      type: "mc",
      q: "An absolute path is:",
      o: [
        "A path that depends on other path information",
        "A path using only a filename",
        "A complete path that does not need any information to locate a file on a system",
        "A path relative to the user home directory"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "When working with a path containing only a filename, the file is assumed to be:",
      o: [
        "In the root directory of the C drive",
        "In the same folder as the program using it",
        "In the user's home directory",
        "In the Java installation directory"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "Which method is used to convert a relative path to an absolute path in Java?",
      o: ["getAbsolutePath()", "resolvePath()", "toAbsolutePath()", "convertPath()"],
      a: 2
    },
    {
      type: "mc",
      q: "The Path method getNameCount() retrieves:",
      o: [
        "The file size in bytes",
        "The number of name elements in the Path",
        "The last modified time of the file",
        "The number of files in a directory"
      ],
      a: 1
    },
    {
      type: "mc",
      q: "In a Path's element index, the top-level element in the directory structure is located at index:",
      o: ["1", "-1", "0", "The highest index number"],
      a: 2
    },
    {
      type: "mc",
      q: "The checkAccess() method with a READ argument checks that:",
      o: [
        "The file exists only",
        "The file exists and the program has permission to execute the file",
        "The file exists and the program has permission to read the file",
        "The file exists and the program has permission to write to the file"
      ],
      a: 2
    },
    {
      type: "mc",
      q: "The readAttributes() method of the Files class takes two arguments: a Path object and:",
      o: ["FileTime.class", "FileSystems.class", "BasicFileAttributes.class", "AccessMode.class"],
      a: 2
    },
    {
      type: "mc",
      q: "FileTime objects are represented in the format:",
      o: ["dd/mm/yyyy hh:mm:ss", "mm-dd-yyyyThh:mm:ss", "yyyy-mm-ddThh:mm:ss", "hh:mm:ss yyyy-mm-dd"],
      a: 2
    },
    {
      type: "mc",
      q: "Which IO class is described as 'an abstract class that contains methods for performing input'?",
      o: ["FileInputStream", "BufferedInputStream", "InputStream", "Reader"],
      a: 2
    },
    {
      type: "mc",
      q: "PrintStream is a child of FilterOutputStream, and Java's System class contains a PrintStream object named:",
      o: ["System.err", "System.in", "System.print", "System.out"],
      a: 3
    },


    // ===== Identification (20) =====

    {
      type: "id",
      q: "What is the name of the debugging technique that involves explaining the problem to an object in order to force critical thinking and identify the issue?",
      a: "Rubber Ducking"
    },
    {
      type: "id",
      q: "What is the term for the point in the code where execution is temporarily stopped to inspect the state of the program's functionality?",
      a: "Breakpoint"
    },
    {
      type: "id",
      q: "What is the class considered the superclass for all errors and exceptions in the Java language?",
      a: "Throwable"
    },
    {
      type: "id",
      q: "What type of error is it when an exception is discovered during program compilation?",
      a: "Syntax error"
    },
    {
      type: "id",
      q: "What type of error is it when an unplanned exception occurs during a program's execution?",
      a: "Runtime error"
    },
    {
      type: "id",
      q: "What is the name of the exception thrown when a wrong mathematical operation (such as division by zero) appears in the code during runtime?",
      a: "ArithmeticException"
    },
    {
      type: "id",
      q: "What is the name of the exception that indicates the element being requested does not exist?",
      a: "NoSuchElementException"
    },
    {
      type: "id",
      q: "What is the name of the exception that is thrown when there is insufficient space to allocate an object?",
      a: "OutOfMemoryError"
    },
    {
      type: "id",
      q: "What statement sends an Exception object out of a block or method so it can be handled elsewhere?",
      a: "throw statement"
    },
    {
      type: "id",
      q: "What block is used when actions must be performed at the end of a try-catch sequence, executing regardless of whether an exception occurred?",
      a: "finally block"
    },
    {
      type: "id",
      q: "What is the complete list of the disk drive and the hierarchy of directories in which a file resides called?",
      a: "Path"
    },
    {
      type: "id",
      q: "What type of file contains data items that have not been encoded as text, stored in binary format (0s and 1s)?",
      a: "Binary file"
    },
    {
      type: "id",
      q: "What Java class performs operations on files and directories, including deletion, determining their attributes, and creating input and output streams?",
      a: "Files class"
    },
    {
      type: "id",
      q: "What is a complete path that does not need any information to locate a file on a system called?",
      a: "Absolute path"
    },
    {
      type: "id",
      q: "What method is used in Java to convert a relative path to an absolute path?",
      a: "toAbsolutePath()"
    },
    {
      type: "id",
      q: "What method of the Files class is used to retrieve useful information about a file, such as its size, creation time, and last modified time?",
      a: "readAttributes()"
    },
    {
      type: "id",
      q: "What is the list of error messages showing each method called as the program ran after each attempted execution called?",
      a: "Stack trace"
    },
    {
      type: "id",
      q: "What IO class reads text from a character-input stream, buffering characters to provide for efficient reading of characters, arrays, and lines?",
      a: "BufferedReader"
    },
    {
      type: "id",
      q: "What is the name of the Paths class method that calls getPath() of the default file system without requiring a FileSystem object?",
      a: "get()"
    },
    {
      type: "id",
      q: "What import statement must be included to use READ, WRITE, or EXECUTE constants as arguments to the checkAccess() method?",
      a: "import static java.nio.file.AccessMode.*;"
    },

    // ===== True or False (10) =====

    {
      type: "tf",
      q: "Debugging is described as the most time-intensive and challenging phase of coding.",
      a: true
    },
    {
      type: "tf",
      q: "The Error class in Java represents less serious errors that a program can recover from on its own.",
      a: false
    },
    {
      type: "tf",
      q: "A catch block has a return type and can be called directly like a regular method.",
      a: false
    },
    {
      type: "tf",
      q: "The finally block executes only when an exception is thrown in the try block.",
      a: false
    },
    {
      type: "tf",
      q: "In Java, two backslashes (\\\\) must be typed within a string to indicate a single backslash as a path delimiter.",
      a: true
    },
    {
      type: "tf",
      q: "Text files contain data that can be read in a text editor as the data is encoded using a scheme such as ASCII or Unicode.",
      a: true
    },
    {
      type: "tf",
      q: "The Paths class (with an ending 's') requires a FileSystem object to be created before a Path can be defined.",
      a: false
    },
    {
      type: "tf",
      q: "RuntimeException is only detected during the execution of the application.",
      a: true
    },
    {
      type: "tf",
      q: "An exception is necessarily 'bad' in nature; every exception indicates a critical failure in the program.",
      a: false
    },
    {
      type: "tf",
      q: "The top-level element in a Path's directory structure is located at index 0.",
      a: true
    },

    // ===== Fill in the Blank (20) =====

    {
      type: "fitb",
      before: "Debugging is a critical component in programming that represents the most time-intensive and challenging phase of",
      after: ".",
      a: "coding"
    },
    {
      type: "fitb",
      before: "Backtracking is also called",
      after: "where it starts from the point the problem first began and works backward through the code.",
      a: "backward debugging"
    },
    {
      type: "fitb",
      before: "Using the",
      after: "technique, a programmer manually moves through each line of code to study variables and data structures for problems.",
      a: "stepping"
    },
    {
      type: "fitb",
      before: "Exception handling refers to the object-oriented techniques that",
      after: "such errors.",
      a: "manage or resolve"
    },
    {
      type: "fitb",
      before: "The Error and Exception classes descend from the",
      after: "class, which originates from the Object class.",
      a: "Throwable"
    },
    {
      type: "fitb",
      before: "IndexOutOfBoundsException is thrown when an index used in arrays, lists, or strings is",
      after: ".",
      a: "invalid"
    },
    {
      type: "fitb",
      before: "The",
      after: "exception indicates that an unexpected internal error has occurred in the Java Virtual Machine.",
      a: "InternalError"
    },
    {
      type: "fitb",
      before: "A",
      after: "block is placed when a programmer creates a segment of code in which something might go wrong.",
      a: "try"
    },
    {
      type: "fitb",
      before: "When actions must be performed at the end of a try-catch sequence, a",
      after: "block is used.",
      a: "finally"
    },
    {
      type: "fitb",
      before: "A computer file is a collection of data stored on a nonvolatile device or a permanent storage device such as a hard disk,",
      after: "drive, compact disk, and reel or cassette of magnetic tape.",
      a: "universal serial bus (USB)"
    },
    {
      type: "fitb",
      before: "A complete list of the disk drive and the hierarchy of directories in which a file resides is called its",
      after: ".",
      a: "path"
    },
    {
      type: "fitb",
      before: "The",
      after: "class creates objects containing information about files and directories, including their locations, sizes, creation dates, and whether they exist.",
      a: "Path"
    },
    {
      type: "fitb",
      before: "The import",
      after: "statement can be included in a Java program to use both the Path and Files classes.",
      a: "java.nio.file.*;"
    },
    {
      type: "fitb",
      before: "In OOP, a",
      after: "is an object that creates other objects.",
      a: "factory"
    },
    {
      type: "fitb",
      before: "When working with a path containing only a filename, the file is assumed to be in the same folder as",
      after: ".",
      a: "the program using it"
    },
    {
      type: "fitb",
      before: "The",
      after: "method of the Files class can retrieve useful information about a file and takes a Path object and BasicFileAttributes.class as its two arguments.",
      a: "readAttributes()"
    },
    {
      type: "fitb",
      before: "FileTime objects are represented in the format:",
      after: ".",
      a: "yyyy-mm-ddThh:mm:ss"
    },
    {
      type: "fitb",
      before: "The",
      after: "class is an abstract class for reading character streams; the only methods that a subclass must implement are read(char[], int, int) and close().",
      a: "Reader"
    },
    {
      type: "fitb",
      before: "FileOutputStream is a child of OutputStream that allows",
      after: ".",
      a: "writing to disk files"
    },
    {
      type: "fitb",
      before: "In the ScreenOut class, the",
      after: "method converts the String to an array of bytes before it is written to the output stream.",
      a: "getBytes()"
    }

  ];