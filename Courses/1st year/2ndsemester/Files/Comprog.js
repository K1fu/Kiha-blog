// faux-questions.js
// IT2408 — Module 03: Exception Handling | Module 04: File, Input, and Output
// Comprehensive mastery quiz — all topics from both handouts.
// Types used: mc, id, tf, fitb, output, order, debug, debug-line, best

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  MODULE 03 — EXCEPTION HANDLING
  //  Part A: Debugging Concepts & Techniques
  // ══════════════════════════════════════════════════════════════

  {
    type: 'mc',
    q: 'What is the process of identifying and rectifying errors in a program that lead to unexpected behavior called?',
    o: ['Compiling', 'Debugging', 'Refactoring', 'Profiling'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which debugging technique is also called <b>backward debugging</b> — starting from the point where the problem first appeared and working backward through the code?',
    o: ['Binary Search', 'Rubber Ducking', 'Backtracking', 'Log Analysis'],
    a: 2
  },

  {
    type: 'tf',
    q: 'A <b>breakpoint</b> is the point in the code where the program\'s execution is <em>permanently</em> terminated.',
    a: false
  },

  {
    type: 'mc',
    q: 'Which debugging technique narrows the scope of an issue by dividing the code into halves and systematically narrowing the bug location?',
    o: ['Backtracking', 'Rubber Ducking', 'Binary Search', 'Clustering Bugs'],
    a: 2
  },

  {
    type: 'id',
    q: 'What is the name of the debugging technique where a programmer explains the problem out loud to an inanimate object to force critical thinking and identify the issue?',
    a: 'Rubber Ducking'
  },

  {
    type: 'tf',
    q: '<b>Clustering Bugs</b> involves grouping error reports into classes of related bugs because they often share common causes or patterns.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which of the following is NOT listed as a debugging tool example in the handout?',
    o: ['Chrome DevTools', 'Testsigma', 'dbForger', 'IntelliJ IDEA'],
    a: 3
  },

  {
    type: 'tf',
    q: 'The <b>stepping</b> technique allows a programmer to manually move through each line of code to study variables and data structures for problems.',
    a: true
  },

  {
    type: 'fitb',
    before: 'Placing',
    after: 'statements in strategic areas of the code provides valuable information about execution flow and variable values at different stages.',
    a: 'log analysis'
  },

  {
    type: 'mc',
    q: 'Which debugging technique recommends documenting the debugging process and solutions used, making it a valuable resource for future challenges?',
    o: ['Take Breaks', 'Binary Search', 'Clustering Bugs', 'Take Notes'],
    a: 3
  },

  {
    type: 'mc',
    q: 'Which best describes the purpose of the <b>stepping</b> technique in debugging?',
    o: [
      'Automatically fix bugs in the code',
      'Manually move through each line of code to inspect variables and data structures',
      'Divide the code in half to find the bug faster',
      'Log all variable values to a file for later review'
    ],
    a: 1
  },

  {
    type: 'order',
    q: 'Arrange the three steps of a typical debugging process in the correct order.',
    lines: [
      'Examining the error symptoms',
      'Identifying the cause',
      'Fixing the error'
    ],
    a: [0, 1, 2]
  },

  // ── Part B: Basic Exception Handling ─────────────────────────

  {
    type: 'mc',
    q: 'In Java, which class is considered the <b>superclass</b> for ALL errors and exceptions?',
    o: ['Exception', 'Error', 'Object', 'Throwable'],
    a: 3
  },

  {
    type: 'tf',
    q: 'The <b>Error</b> class represents serious problems from which a program can usually recover on its own.',
    a: false
  },

  {
    type: 'tf',
    q: 'The <b>Exception</b> class represents less serious errors from which the program <em>can</em> recover.',
    a: true
  },

  {
    type: 'mc',
    q: 'If an unplanned exception occurs <em>during</em> a program\'s execution, it is called a:',
    o: ['Syntax error', 'Logic error', 'Runtime error', 'Compile error'],
    a: 2
  },

  {
    type: 'id',
    q: 'What is an error discovered during program <em>compilation</em> — not at runtime — called?',
    a: 'syntax error'
  },

  {
    type: 'id',
    q: 'What is the list of error messages showing each method called as the program ran after a failed execution called?',
    a: 'stack trace'
  },

  {
    type: 'mc',
    q: 'Which exception is thrown when a program attempts to divide an integer by zero?',
    o: ['IOException', 'InputMismatchException', 'ArithmeticException', 'IndexOutOfBoundsException'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which exception occurs when the user enters the wrong data type — for example, typing "three" when an integer is expected?',
    o: ['ArithmeticException', 'InputMismatchException', 'ArrayIndexOutOfBoundsException', 'NoSuchElementException'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which exception indicates an array has been accessed with an illegal index — either negative or >= the array size?',
    o: ['NoSuchElementException', 'IndexOutOfBoundsException', 'ArrayIndexOutOfBoundsException', 'InputMismatchException'],
    a: 2
  },

  {
    type: 'tf',
    q: '<b>RuntimeException</b> is only detected during the execution of the application, not at compile time.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which exception is the <b>base class</b> for exceptions thrown while accessing data from files, directories, and streams?',
    o: ['RuntimeException', 'IOException', 'ArithmeticException', 'VirtualMachineError'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which error indicates the Java Virtual Machine is broken or has run out of resources to continue operating?',
    o: ['InternalError', 'OutOfMemoryError', 'VirtualMachineError', 'NoSuchElementException'],
    a: 2
  },

  {
    type: 'tf',
    q: '<b>OutOfMemoryError</b> is thrown when there is insufficient space to allocate an object.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which exception indicates that the element being requested does not exist?',
    o: ['IndexOutOfBoundsException', 'NoSuchElementException', 'InputMismatchException', 'NullPointerException'],
    a: 1
  },

  {
    type: 'debug',
    lang: 'java',
    q: 'The user types <code>"hello"</code> at the prompt. What happens when this code runs?',
    code: 'Scanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println("You entered: " + n);',
    o: [
      'Compile error — nextInt() does not exist',
      'Runtime error (InputMismatchException)',
      'Prints: You entered: hello',
      'Prints: You entered: 0'
    ],
    a: 1,
    hint1: 'nextInt() expects a valid integer token.',
    hint2: '"hello" cannot be parsed as an int.',
    solution: 'InputMismatchException is thrown at runtime because the input is not a valid integer.'
  },

  {
    type: 'debug-line',
    q: 'Which line (zero-based index) causes an <b>ArrayIndexOutOfBoundsException</b>?',
    lines: [
      'int[] arr = new int[3];',
      'arr[0] = 10;',
      'arr[1] = 20;',
      'arr[3] = 30;',
      'System.out.println(arr[0]);'
    ],
    a: 3
  },

  {
    type: 'debug-line',
    q: 'The user enters 0 as the denominator. Which line (zero-based index) causes an <b>ArithmeticException</b>?',
    lines: [
      'Scanner input = new Scanner(System.in);',
      'int numerator = input.nextInt();',
      'int denominator = input.nextInt();',
      'int result = numerator / denominator;',
      'System.out.println(result);'
    ],
    a: 3
  },

  // ── Part C: try, catch, and finally ──────────────────────────

  {
    type: 'id',
    q: 'What Java keyword wraps code that might generate an exception, acknowledging that an exception might occur?',
    a: 'try'
  },

  {
    type: 'mc',
    q: 'A <b>throw statement</b> in Java:',
    o: [
      'Displays a formatted error message to the user',
      'Sends an Exception object out of a block so it can be handled elsewhere',
      'Catches an exception thrown by a try block',
      'Permanently terminates the JVM'
    ],
    a: 1
  },

  {
    type: 'tf',
    q: 'A <b>catch</b> block has a return type and can be called directly like any other method.',
    a: false
  },

  {
    type: 'tf',
    q: 'A <b>finally</b> block executes whether or not the preceding try block identifies an Exception.',
    a: true
  },

  {
    type: 'mc',
    q: 'What is the primary purpose of the <b>finally</b> block?',
    o: [
      'To catch exceptions the catch block missed',
      'To perform cleanup tasks that must happen regardless of whether exceptions occurred',
      'To rethrow exceptions to the calling method',
      'To print the exception stack trace'
    ],
    a: 1
  },

  {
    type: 'mc',
    q: 'What is the correct order of blocks in a complete Java exception-handling sequence?',
    o: [
      'catch then try then finally',
      'try then finally then catch',
      'try then catch then finally',
      'finally then try then catch'
    ],
    a: 2
  },

  {
    type: 'fitb',
    before: 'A method that detects an error condition',
    after: 'an exception, and if code is written to process the error, that block is said to catch the exception.',
    a: 'throws'
  },

  {
    type: 'fitb',
    before: 'A',
    after: 'statement sends an Exception object out of a block or method so it can be handled elsewhere.',
    a: 'throw'
  },

  {
    type: 'tf',
    q: 'If no exception occurs during the execution of the try block, the catch block does NOT execute.',
    a: true
  },

  {
    type: 'tf',
    q: 'Statements placed after the entire try-catch block execute normally even if the catch block ran.',
    a: true
  },

  {
    type: 'output',
    lang: 'java',
    q: 'What does this snippet print? (Integer division by zero.)',
    code: 'try {\n    int result = 10 / 0;\n    System.out.println("Result: " + result);\n} catch (ArithmeticException e) {\n    System.out.println("Cannot divide by zero");\n}\nSystem.out.println("Program ends");',
    a: 'Cannot divide by zero\nProgram ends',
    hint1: 'Dividing by zero throws ArithmeticException, abandoning the try block.',
    hint2: 'The catch block runs. The statement after the try-catch always executes.',
    solution: 'Output:\nCannot divide by zero\nProgram ends'
  },

  {
    type: 'output',
    lang: 'java',
    q: 'What does this snippet print? (No exception occurs.)',
    code: 'try {\n    int x = 10 / 2;\n    System.out.println(x);\n} catch (ArithmeticException e) {\n    System.out.println("Error");\n} finally {\n    System.out.println("Done");\n}',
    a: '5\nDone',
    hint1: '10 / 2 = 5 — no exception thrown.',
    hint2: 'The catch block is skipped. The finally block always runs.',
    solution: 'Output:\n5\nDone'
  },

  {
    type: 'output',
    lang: 'java',
    q: 'What does this snippet print?',
    code: 'try {\n    System.out.println("A");\n    throw new ArithmeticException();\n} catch (ArithmeticException e) {\n    System.out.println("B");\n} finally {\n    System.out.println("C");\n}',
    a: 'A\nB\nC',
    hint1: '"A" prints first; then the exception is thrown, abandoning the rest of the try block.',
    hint2: 'The catch prints "B"; the finally always prints "C".',
    solution: 'Output:\nA\nB\nC'
  },

  {
    type: 'order',
    q: 'Arrange these lines into the correct try-catch-finally structure for a division operation.',
    lines: [
      'try {',
      '    result = numerator / denominator;',
      '    System.out.println(result);',
      '}',
      'catch (ArithmeticException e) {',
      '    System.out.println("Division error");',
      '}',
      'finally {',
      '    System.out.println("End of program");',
      '}'
    ],
    a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  {
    type: 'best',
    q: 'A method performs division AND reads from a file. Both operations can throw different exceptions. Which is the best approach?',
    o: [
      'Use a single catch(Exception e) to handle everything in one block',
      'Use two separate catch blocks — one for ArithmeticException, one for IOException',
      'Use a finally block to handle both exceptions',
      'Avoid try-catch and let the JVM handle errors automatically'
    ],
    a: 1
  },

  // ══════════════════════════════════════════════════════════════
  //  MODULE 04 — FILE, INPUT, AND OUTPUT
  //  Part A: Computer Files
  // ══════════════════════════════════════════════════════════════

  {
    type: 'mc',
    q: 'A <b>computer file</b> is best defined as:',
    o: [
      'A temporary area of memory used during program execution',
      'A collection of data stored on a nonvolatile/permanent storage device',
      'A block of code compiled into bytecode',
      'A Java class that manages data types'
    ],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which type of file contains data encoded using a scheme such as ASCII or Unicode, readable in a text editor?',
    o: ['Binary file', 'Executable file', 'Text file', 'Compiled file'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which type of file contains data in raw binary format (0s and 1s) NOT easily readable in a text editor?',
    o: ['Text file', 'Data file', 'Binary file', 'Source file'],
    a: 2
  },

  {
    type: 'tf',
    q: 'A compiled Java program file with a <code>.class</code> extension is an example of a <b>binary file</b>.',
    a: true
  },

  {
    type: 'tf',
    q: 'A payroll file containing employee numbers, names, and salaries stored as readable text is a <b>binary file</b>.',
    a: false
  },

  {
    type: 'id',
    q: 'What is the complete list of the disk drive and the hierarchy of directories in which a file resides called?',
    a: 'path'
  },

  {
    type: 'mc',
    q: 'In the <b>Windows</b> operating system, which character is used as the path delimiter?',
    o: ['/ (forward slash)', '| (pipe)', '\\ (backslash)', ': (colon)'],
    a: 2
  },

  {
    type: 'tf',
    q: 'A forward slash (/) is used as the path delimiter in the Solaris (UNIX) operating system.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which of the following is an example of a <b>text file</b>?',
    o: [
      'A compiled .class file',
      'An MP3 music file',
      'A payroll file containing employee names and salaries',
      'A PNG image file'
    ],
    a: 2
  },

  // ── Part B: Path and Files Classes ───────────────────────────

  {
    type: 'mc',
    q: 'Which Java class creates objects containing information about files and directories (locations, sizes, creation dates, and whether they exist)?',
    o: ['Files', 'FileSystem', 'Path', 'Paths'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which Java class performs operations on files and directories — including deletion, determining attributes, and creating I/O streams?',
    o: ['Path', 'Paths', 'FileSystem', 'Files'],
    a: 3
  },

  {
    type: 'id',
    q: 'What does "nio" stand for in the Java package <code>java.nio</code>?',
    a: 'new input/output'
  },

  {
    type: 'fitb',
    before: 'The import statement',
    after: '; is used in a Java program to access both the Path and Files classes.',
    a: 'import java.nio.file.*'
  },

  {
    type: 'mc',
    q: 'Which class is described as a <b>helper class</b> that creates a Path object WITHOUT needing a separate FileSystem object?',
    o: ['FileSystem', 'Files', 'Path', 'Paths'],
    a: 3
  },

  {
    type: 'mc',
    q: 'In object-oriented programming, what is an object that creates other objects called?',
    o: ['Singleton', 'Factory', 'Builder', 'Prototype'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which of the following correctly creates a Path object using the <b>Paths helper class</b>?',
    o: [
      'Path p = new Path("C:\\\\file.txt");',
      'Path p = Paths.get("C:\\\\file.txt");',
      'Path p = Files.getPath("C:\\\\file.txt");',
      'Path p = FileSystem.createPath("C:\\\\file.txt");'
    ],
    a: 1
  },

  {
    type: 'tf',
    q: 'An <b>absolute path</b> is complete and does not need any additional information to locate a file on a system.',
    a: true
  },

  {
    type: 'tf',
    q: 'A <b>relative path</b> containing only a filename (e.g., <code>SampleFile.txt</code>) assumes the file is in the same folder as the program using it.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which path type DEPENDS on other path information and is incomplete on its own?',
    o: ['Absolute path', 'Relative path', 'System path', 'Root path'],
    a: 1
  },

  {
    type: 'id',
    q: 'Which method of the Path class converts a relative path into an absolute path?',
    a: 'toAbsolutePath'
  },

  {
    type: 'fitb',
    before: 'In Java, to represent a single backslash (\\) inside a String path literal, you must type',
    after: 'backslash characters.',
    a: 'two'
  },

  // ── Path Methods ──────────────────────────────────────────────

  {
    type: 'mc',
    q: 'Which Path method returns the file or directory name — the <b>last item</b> in the sequence of name elements?',
    o: ['toString()', 'getName(int)', 'getFileName()', 'getNameCount()'],
    a: 2
  },

  {
    type: 'id',
    q: 'Which Path method returns the <b>number of name elements</b> in the Path?',
    a: 'getNameCount'
  },

  {
    type: 'mc',
    q: 'For the path <code>C:\\Java\\Chapter.11\\Data.txt</code>, what does <code>getNameCount()</code> return?',
    o: ['2', '3', '4', '1'],
    a: 1
  },

  {
    type: 'mc',
    q: 'For the path <code>C:\\Java\\Chapter.11\\Data.txt</code>, what name element is at index 0 (the top-level element)?',
    o: ['C:', 'Java', 'Chapter.11', 'Data.txt'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which Path method returns the String representation of the path, eliminating double backslashes?',
    o: ['getFileName()', 'getName(int)', 'toString()', 'getPath()'],
    a: 2
  },

  {
    type: 'output',
    lang: 'java',
    q: 'What does this snippet print?',
    code: 'Path p = Paths.get("Data.txt");\nSystem.out.println(p.getNameCount());',
    a: '1',
    hint1: 'Count the name elements separated by path delimiters.',
    hint2: '"Data.txt" has no directory separators, so there is exactly one element.',
    solution: 'Output: 1'
  },

  {
    type: 'order',
    q: 'Arrange these Java statements in the correct order to create a Path using FileSystems and print its file name.',
    lines: [
      'FileSystem fs = FileSystems.getDefault();',
      'Path filePath = fs.getPath("C:\\\\Java\\\\Data.txt");',
      'System.out.println(filePath.getFileName());'
    ],
    a: [0, 1, 2]
  },

  // ── Checking File Accessibility ───────────────────────────────

  {
    type: 'mc',
    q: 'Which method is used to verify that a file exists and that the program can access it as needed?',
    o: ['Files.exists()', 'checkAccess()', 'readAttributes()', 'getFileSystem()'],
    a: 1
  },

  {
    type: 'tf',
    q: '<code>Files.exists()</code> can be used as an alternative to <code>checkAccess()</code> with no argument to check whether a file exists.',
    a: true
  },

  {
    type: 'mc',
    q: 'What does <code>checkAccess(filePath, READ)</code> verify?',
    o: [
      'That the file exists only',
      'That the file exists and the program has permission to read it',
      'That the file exists and the program has permission to write to it',
      'That the file exists and the program has permission to execute it'
    ],
    a: 1
  },

  {
    type: 'tf',
    q: 'Multiple access mode arguments (e.g., READ, WRITE) can be passed together to <code>checkAccess()</code>, separated by commas.',
    a: true
  },

  {
    type: 'tf',
    q: '<code>checkAccess()</code> throws an <code>IOException</code> if the file named in the method call cannot be accessed.',
    a: true
  },

  // ── File Attributes ───────────────────────────────────────────

  {
    type: 'mc',
    q: 'Which method of the <b>Files</b> class retrieves useful information about a file such as its size, creation time, and last modified time?',
    o: ['checkAccess()', 'getFileName()', 'readAttributes()', 'toAbsolutePath()'],
    a: 2
  },

  {
    type: 'mc',
    q: 'What does <code>Files.readAttributes()</code> return?',
    o: ['A FileTime object', 'A BasicFileAttributes object', 'A FileSystem object', 'A Path object'],
    a: 1
  },

  {
    type: 'fitb',
    before: 'FileTime objects are represented in the format:',
    after: '.',
    a: 'yyyy-mm-ddThh:mm:ss'
  },

  {
    type: 'mc',
    q: 'Which <code>BasicFileAttributes</code> method returns the file size in bytes?',
    o: ['creationTime()', 'lastModifiedTime()', 'size()', 'getBytes()'],
    a: 2
  },

  {
    type: 'debug',
    lang: 'java',
    q: 'The file <code>"missing.txt"</code> does NOT exist on the system. What happens when this code runs?',
    code: 'Path p = Paths.get("missing.txt");\nBasicFileAttributes attr =\n    Files.readAttributes(p, BasicFileAttributes.class);\nSystem.out.println(attr.size());',
    o: [
      'Compile error — readAttributes does not exist',
      'Runtime error (IOException)',
      'Prints 0',
      'Prints null'
    ],
    a: 1,
    hint1: 'readAttributes() requires the file to actually exist on the filesystem.',
    hint2: 'If the file cannot be accessed, an IOException is thrown.',
    solution: 'IOException is thrown at runtime because the file does not exist.'
  },

  {
    type: 'debug-line',
    q: 'For path <code>C:\\\\Java\\\\Chapter.11\\\\Data.txt</code> (3 elements, index 0-2), which line (zero-based) throws an exception?',
    lines: [
      'Path p = Paths.get("C:\\\\Java\\\\Chapter.11\\\\Data.txt");',
      'System.out.println(p.getName(0));',
      'System.out.println(p.getName(1));',
      'System.out.println(p.getName(2));',
      'System.out.println(p.getName(3));'
    ],
    a: 4
  },

  {
    type: 'order',
    q: 'Arrange these typical file-handling tasks in the correct operational order.',
    lines: [
      'Determine whether and where the path or file exists',
      'Open the file',
      'Read from or write to the file',
      'Close the file'
    ],
    a: [0, 1, 2, 3]
  },

  {
    type: 'best',
    q: 'Which is the <b>best</b> way to check whether a specific file exists before reading from it in Java?',
    o: [
      'Try to open it and catch IOException if it fails',
      'Use Files.exists(filePath)',
      'Use filePath.getFileName() and check if it is null',
      'Use filePath.getNameCount() > 0'
    ],
    a: 1
  },

  // ── IO Classes ────────────────────────────────────────────────

  {
    type: 'mc',
    q: 'Which class is an <b>abstract class</b> that contains methods for performing <em>input</em>?',
    o: ['FileInputStream', 'BufferedInputStream', 'InputStream', 'Reader'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which class is an <b>abstract class</b> that contains methods for performing <em>output</em>?',
    o: ['FileOutputStream', 'BufferedOutputStream', 'OutputStream', 'PrintStream'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which IO class provides the capability to read data directly from disk files and is a child of InputStream?',
    o: ['BufferedInputStream', 'FileInputStream', 'PrintStream', 'BufferedReader'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which IO class allows writing to disk files and is a child of OutputStream?',
    o: ['PrintStream', 'BufferedOutputStream', 'BufferedWriter', 'FileOutputStream'],
    a: 3
  },

  {
    type: 'mc',
    q: "Java's <code>System</code> class contains a <b>PrintStream</b> object named:",
    o: ['System.err', 'System.in', 'System.out', 'System.log'],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which class reads text from a character-input stream with buffering for efficient reading of characters, arrays, and lines?',
    o: ['InputStream', 'Reader', 'BufferedReader', 'FileInputStream'],
    a: 2
  },

  {
    type: 'tf',
    q: '<b>BufferedWriter</b> writes text to a character-output stream with buffering for efficient writing.',
    a: true
  },

  {
    type: 'tf',
    q: 'InputStream, OutputStream, and Reader are all subclasses of the <b>Object</b> class.',
    a: true
  },

  {
    type: 'mc',
    q: 'Which OutputStream method <b>flushes</b> the stream — ensuring any buffered bytes are written to the output device?',
    o: ['close()', 'flush()', 'write()', 'clear()'],
    a: 1
  },

  {
    type: 'mc',
    q: 'Which OutputStream method <b>closes</b> the output stream and releases any system resources associated with it?',
    o: ['flush()', 'write()', 'clear()', 'close()'],
    a: 3
  },

  {
    type: 'mc',
    q: 'Which OutputStream method writes <em>all</em> bytes from a specified byte array to the output stream?',
    o: [
      'void flush()',
      'void close()',
      'void write(byte[] b)',
      'void write(byte[] b, int off, int len)'
    ],
    a: 2
  },

  {
    type: 'id',
    q: 'Which String method is used to convert a String into an array of bytes for use with OutputStream.write()?',
    a: 'getBytes'
  },

  {
    type: 'output',
    lang: 'java',
    q: 'What does this program print to the screen?',
    code: 'String s = "ABCDF";\nbyte[] data = s.getBytes();\nOutputStream output = System.out;\noutput.write(data);\noutput.flush();',
    a: 'ABCDF',
    hint1: 'getBytes() converts the String to a byte array.',
    hint2: 'output.write(data) sends those bytes directly to System.out with no added newline.',
    solution: 'Output: ABCDF'
  },

  {
    type: 'best',
    q: 'When reading a file, which is the <b>best</b> place to call <code>close()</code> to ensure the file is always closed — even if an IOException occurs?',
    o: [
      'Inside the try block, after the read operations',
      'Inside the catch block only',
      'Inside the finally block',
      'Java automatically closes files — no explicit close() needed'
    ],
    a: 2
  },

  {
    type: 'order',
    q: 'Arrange these pseudocode statements to correctly read a file with proper exception handling.',
    lines: [
      'try {',
      '    // Open the file',
      '    // Read the file and process data',
      '}',
      'catch (IOException e) {',
      '    // Display error message',
      '}',
      'finally {',
      '    // Close the file if it is open',
      '}'
    ],
    a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  // ── Mixed / Cross-Module Review ───────────────────────────────

  {
    type: 'mc',
    q: 'Which exception would most likely be thrown when reading a file that does not exist on disk?',
    o: ['ArithmeticException', 'InputMismatchException', 'IOException', 'ArrayIndexOutOfBoundsException'],
    a: 2
  },

  {
    type: 'tf',
    q: 'The <b>finally</b> block is typically used to close open files, ensuring cleanup occurs regardless of whether an exception was thrown.',
    a: true
  },

  {
    type: 'mc',
    q: 'When should a <code>try-catch</code> block be used around <code>Files.readAttributes()</code>?',
    o: [
      'Only when the file is very large',
      'Only when writing to the file',
      'Always — readAttributes() throws IOException if the file is inaccessible',
      'Never — Java handles file exceptions automatically'
    ],
    a: 2
  },

  {
    type: 'fitb',
    before: 'The',
    after: 'class is considered the superclass for all errors and exceptions in Java and descends from the Object class.',
    a: 'Throwable'
  },

  {
    type: 'mc',
    q: 'Which import statement is needed to use the AccessMode constants (READ, WRITE, EXECUTE) with <code>checkAccess()</code>?',
    o: [
      'import java.nio.file.*;',
      'import static java.nio.file.AccessMode.*;',
      'import java.io.IOException;',
      'import java.nio.file.attribute.*;'
    ],
    a: 1
  },

  {
    type: 'tf',
    q: 'The <code>FileSystem</code> class (without ending s) is used to instantiate the object, while the <code>FileSystems</code> class (with ending s) contains factory methods.',
    a: true
  },

  {
    type: 'best',
    q: 'A program must read a file, parse integer values from it, and print results. Which design is <b>best</b>?',
    o: [
      'No try-catch — let the JVM crash if anything goes wrong',
      'One try-catch using catch(Exception e) for all errors',
      'Separate catch blocks: IOException for file access, NumberFormatException for parsing',
      'Use only a finally block to handle all errors'
    ],
    a: 2
  },

  {
    type: 'mc',
    q: 'Which of these correctly imports both Path/Files classes AND provides access to IO exception handling?',
    o: [
      'import java.nio.file.*; and import java.io.IOException;',
      'import java.util.Scanner; only',
      'import java.io.* only',
      'No imports needed — Java loads these automatically'
    ],
    a: 0
  },

  {
    type: 'tf',
    q: 'The <code>getNameCount()</code> method retrieves the number of names in the path list, while <code>getName(int)</code> retrieves the name at a specific position.',
    a: true
  },

  {
    type: 'mc',
    q: 'PrintStream is a child of which class?',
    o: ['InputStream', 'BufferedOutputStream', 'FilterOutputStream', 'Reader'],
    a: 2
  }

];