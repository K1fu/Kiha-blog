const QUESTIONS = (window.QUESTIONS && window.QUESTIONS.length)
  ? window.QUESTIONS
  : [
      // ===== Multiple Choice (50) =====
      {
        type: "mc",
        q: "What is a multithreaded program?",
        o: [
          "A program that contains exactly one thread",
          "A program that contains two or more parts that can run concurrently",
          "A program that runs on multiple CPUs simultaneously",
          "A program that uses shared memory only"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is a thread?",
        o: [
          "A group of associated processes executed in the same shared environment",
          "The largest unit of execution that the operating system can schedule",
          "The smallest unit of execution that the operating system can schedule",
          "A special method created by the Java VM"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is a process?",
        o: [
          "A single unit of execution scheduled by the OS",
          "A group of associated threads executed in the same shared environment",
          "A method that runs independently of the main thread",
          "The mechanism by which threads communicate"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "A single-threaded process contains exactly how many threads?",
        o: [
          "Zero",
          "Two",
          "One",
          "More than one"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In a shared environment, threads in the same process share:",
        o: [
          "The same CPU only",
          "Separate memory spaces",
          "The same memory space and can communicate directly with one another",
          "The same thread scheduler only"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the property of executing multiple threads and processes simultaneously called?",
        o: [
          "Parallelism",
          "Multitasking",
          "Context switching",
          "Concurrency"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does the operating system use to determine which threads should be currently executing?",
        o: [
          "A context switch",
          "A thread scheduler",
          "A thread priority",
          "The main thread"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is a context switch?",
        o: [
          "The process of creating a new thread",
          "The process of storing a thread's current state and later restoring the state of the thread to continue execution",
          "The process of terminating a thread",
          "The process of assigning priority to a thread"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "When a Java application starts, its main() method is executed by:",
        o: [
          "A runnable thread",
          "The thread scheduler",
          "The main thread",
          "An extended Thread class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is one of the two ways to create a thread in Java?",
        o: [
          "Implement the Thread interface",
          "Extend the Runnable class",
          "Implement the Runnable interface",
          "Override the start() method"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "When extending the Thread class, which method must be overridden?",
        o: [
          "start()",
          "main()",
          "init()",
          "run()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "How is a thread started after it has been created?",
        o: [
          "Calling its run() method directly",
          "Calling its start() method",
          "Calling its init() method",
          "Calling its execute() method"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which Thread method suspends a thread for a period of time?",
        o: [
          "join()",
          "isAlive()",
          "sleep()",
          "setPriority()"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which Thread method waits for a thread to terminate?",
        o: [
          "sleep()",
          "join()",
          "isAlive()",
          "stop()"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which Thread method determines if a thread is still running?",
        o: [
          "join()",
          "sleep()",
          "isRunning()",
          "isAlive()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the value of MIN_PRIORITY for thread priorities?",
        o: [
          "0",
          "5",
          "1",
          "10"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the value of MAX_PRIORITY for thread priorities?",
        o: [
          "5",
          "100",
          "1",
          "10"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What is the value of NORM_PRIORITY for thread priorities?",
        o: [
          "1",
          "10",
          "5",
          "7"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the Thread.currentThread() method return?",
        o: [
          "The name of the currently executing thread",
          "A reference to the Thread instance executing currentThread()",
          "The priority of the currently executing thread",
          "The ID of the currently executing thread"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "A thread with higher priority:",
        o: [
          "Always runs faster than lower-priority threads",
          "Always runs more often than lower-priority threads",
          "Only has greater potential access to the CPU",
          "Cannot be interrupted by lower-priority threads"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "When implementing the Runnable interface to create a thread, how is the thread started?",
        o: [
          "By calling run() directly on the Runnable instance",
          "By passing an instance of the class to a Thread object's constructor and then calling the thread's start() method",
          "By calling start() on the Runnable instance",
          "By extending Thread and calling start()"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "The start() call on a thread:",
        o: [
          "Waits until the run() method is done before returning",
          "Executes the run() method synchronously",
          "Will not wait until the run() method is done",
          "Blocks the main thread"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which Thread method sets a thread's name?",
        o: [
          "getName()",
          "setName()",
          "setPriority()",
          "currentThread()"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What are generic types declared within?",
        o: [
          "Parentheses ()",
          "Square brackets []",
          "Curly braces {}",
          "Angle brackets <>"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "In a generic class declaration public class Gen<T>, what does T represent?",
        o: [
          "The class name",
          "The name of a type parameter",
          "A specific data type",
          "The return type of a method"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What is another name for a generic class?",
        o: [
          "Template type",
          "Wildcard class",
          "Parameterized type",
          "Bounded type"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which of the following is NOT one of the commonly used type parameter names in Java Generics?",
        o: [
          "E for Element",
          "K for Key",
          "P for Property",
          "V for Value"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In generics, type parameter names are recommended to be:",
        o: [
          "Any valid multi-character string",
          "Single-character capital letters",
          "All lowercase letters",
          "Descriptive full words"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the wildcard argument '?' represent in generics?",
        o: [
          "A known type",
          "Only a numeric type",
          "An unknown type",
          "A bounded type only"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "<?> in generics is called:",
        o: [
          "Lower-bounded wildcard",
          "Upper-bounded wildcard",
          "Bounded wildcard",
          "Unbounded wildcard"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "An upper-bounded wildcard uses which keyword after '?'?",
        o: [
          "super",
          "implements",
          "extends",
          "instanceof"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "A lower-bounded wildcard uses which keyword after '?'?",
        o: [
          "extends",
          "implements",
          "instanceof",
          "super"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "List<? extends Number> is an example of:",
        o: [
          "An unbounded wildcard",
          "A lower-bounded wildcard",
          "An upper-bounded wildcard",
          "A parameterized type"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "List<? super Integer> is an example of:",
        o: [
          "An unbounded wildcard",
          "An upper-bounded wildcard",
          "A parameterized type",
          "A lower-bounded wildcard"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "What does Gen<Integer> iData = new Gen<>() demonstrate?",
        o: [
          "Wildcard usage in generics",
          "That the data type on the left of the new operator is optional",
          "Lower-bounded wildcards",
          "Multiple type parameters"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "Which method in the generic Gen class displays the type of T?",
        o: [
          "getValue()",
          "getClass()",
          "showType()",
          "getName()"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "The getClass() method is defined by which class?",
        o: [
          "Thread",
          "String",
          "Object",
          "Class"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the getName() method of the Class object return?",
        o: [
          "The name of the current thread",
          "A string representation of the class name",
          "The priority of the thread",
          "The parameter name of a generic type"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does the upper-bounded wildcard <? extends Number> restrict the unknown type to?",
        o: [
          "Only the Number class itself",
          "A specific type or a supertype of that type",
          "A specific type or a subtype of that type",
          "Any type"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does the lower-bounded wildcard <? super Integer> restrict the unknown type to?",
        o: [
          "Only the Integer class itself",
          "A specific type or a subtype of that type",
          "A specific type or a supertype of that type",
          "Any type"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "How do you initialize a generic object with two types?",
        o: [
          "Gen<Integer>[String] g = new Gen<>();",
          "Gen<Integer, String> g = new Gen<>();",
          "Gen<Integer | String> g = new Gen<>();",
          "Gen<Integer; String> g = new Gen<>();"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "In the run() method example using sleep(), how long does Thread.sleep(3000) suspend the thread?",
        o: [
          "3 minutes",
          "300 milliseconds",
          "3 seconds",
          "30 seconds"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "Which exception must be handled when calling thread methods like join() and sleep()?",
        o: [
          "RuntimeException",
          "ThreadException",
          "InterruptedException",
          "IOException"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "After calling t1.join() and t2.join(), what would t1.isAlive() and t2.isAlive() return?",
        o: [
          "true",
          "null",
          "false",
          "1"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What is the entry point for a thread?",
        o: [
          "start()",
          "main()",
          "init()",
          "run()"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which of the following correctly describes a multithreaded process?",
        o: [
          "It contains exactly one thread",
          "It supports more than one thread",
          "It uses separate memory spaces for each thread",
          "It cannot share resources"
        ],
        a: 1
      },
      {
        type: "mc",
        q: "What does 'N' represent in the commonly used generic type parameter names?",
        o: [
          "Null",
          "Node",
          "Name",
          "Number"
        ],
        a: 3
      },
      {
        type: "mc",
        q: "Which wildcard allows a method to work on a list of any type?",
        o: [
          "<? extends Object>",
          "<? super Object>",
          "<?>",
          "<T>"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the Thread priority example, which thread ran first?",
        o: [
          "One (priority 4)",
          "Three (priority 8)",
          "Two (MAX_PRIORITY)",
          "They all ran simultaneously"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "In the sample thread program, t1.join(2000) means:",
        o: [
          "Start t2 only after t1 has run for exactly 2 seconds",
          "Wait for t1 to finish, with a maximum wait of 2000 seconds",
          "Start the 2nd thread after 2 seconds or if t1 is dead",
          "Suspend t1 for 2 seconds"
        ],
        a: 2
      },
      {
        type: "mc",
        q: "What does 'K' represent in the commonly used generic type parameter names?",
        o: [
          "Kind",
          "Key",
          "Kernel",
          "Kotlin"
        ],
        a: 1
      },

      // ===== Identification (20) =====
      {
        type: "id",
        q: "The process of storing a thread's current state and later restoring the state of the thread to continue execution.",
        a: "Context switch"
      },
      {
        type: "id",
        q: "The property of executing multiple threads and processes simultaneously.",
        a: "Concurrency"
      },
      {
        type: "id",
        q: "The special thread created by the Java VM to run a Java application.",
        a: "Main thread"
      },
      {
        type: "id",
        q: "A numeric value associated with a thread taken into consideration by the thread scheduler when determining which threads should currently be executing.",
        a: "Thread priority"
      },
      {
        type: "id",
        q: "The Thread method that returns a reference to the Thread instance currently executing.",
        a: "Thread.currentThread()"
      },
      {
        type: "id",
        q: "The constant used to return a thread to default priority, with a value of 5.",
        a: "NORM_PRIORITY"
      },
      {
        type: "id",
        q: "The interface a class can implement to create a thread in Java.",
        a: "Runnable"
      },
      {
        type: "id",
        q: "Generic types that associate one or more non-specified Java types upon creation; declared within angle brackets.",
        a: "Generic types (generics)"
      },
      {
        type: "id",
        q: "Another name for a generic class.",
        a: "Parameterized type"
      },
      {
        type: "id",
        q: "The wildcard symbol used to represent an unknown type in generics.",
        a: "?"
      },
      {
        type: "id",
        q: "A wildcard that can be used to represent any type and is denoted by <?>.",
        a: "Unbounded wildcard"
      },
      {
        type: "id",
        q: "A wildcard that restricts the unknown type to be a specific type or a subtype of that type, using the 'extends' keyword.",
        a: "Upper-bounded wildcard"
      },
      {
        type: "id",
        q: "A wildcard that restricts the unknown type to be a specific type or a supertype of that type, using the 'super' keyword.",
        a: "Lower-bounded wildcard"
      },
      {
        type: "id",
        q: "The operating system component that determines which threads should be currently executing.",
        a: "Thread scheduler"
      },
      {
        type: "id",
        q: "The smallest unit of execution that the operating system can schedule.",
        a: "Thread"
      },
      {
        type: "id",
        q: "A group of associated threads executed in the same shared environment.",
        a: "Process"
      },
      {
        type: "id",
        q: "The Thread method that starts a thread by calling its run method.",
        a: "start()"
      },
      {
        type: "id",
        q: "The Thread method that suspends a thread for a period of time.",
        a: "sleep()"
      },
      {
        type: "id",
        q: "The method defined by Object that returns a Class object corresponding to the type of the class of the object on which it is called.",
        a: "getClass()"
      },
      {
        type: "id",
        q: "The method defined by Class that returns a string representation of the class name.",
        a: "getName()"
      },

      // ===== True or False (10) =====
      {
        type: "tf",
        q: "A single-threaded process contains exactly one thread.",
        a: true
      },
      {
        type: "tf",
        q: "The start() call will wait until the run() method is done before continuing.",
        a: false
      },
      {
        type: "tf",
        q: "A thread with higher priority will always run faster or more often than other threads.",
        a: false
      },
      {
        type: "tf",
        q: "The value of MIN_PRIORITY is 1 and MAX_PRIORITY is 10.",
        a: true
      },
      {
        type: "tf",
        q: "In a shared environment, threads in the same process share the same memory space.",
        a: true
      },
      {
        type: "tf",
        q: "<?> in generics is called an upper-bounded wildcard.",
        a: false
      },
      {
        type: "tf",
        q: "The data type on the left of the 'new' operator when initializing a generic object is optional.",
        a: true
      },
      {
        type: "tf",
        q: "Type parameter names in generics are recommended to be single-character capital letters.",
        a: true
      },
      {
        type: "tf",
        q: "The upper-bounded wildcard uses the 'super' keyword.",
        a: false
      },
      {
        type: "tf",
        q: "A multithreaded program contains two or more parts that can run concurrently.",
        a: true
      },

      // ===== Fill in the Blank (20) =====
      {
        type: "fitb",
        before: "A",
        after: "is the smallest unit of execution that the operating system can schedule.",
        a: "thread"
      },
      {
        type: "fitb",
        before: "A",
        after: "is a group of associated threads executed in the same shared environment.",
        a: "process"
      },
      {
        type: "fitb",
        before: "The property of executing multiple threads and processes simultaneously is referred to as",
        after: ".",
        a: "concurrency"
      },
      {
        type: "fitb",
        before: "A context switch is the process of storing a thread's current state and later",
        after: "the state of the thread to continue execution.",
        a: "restoring"
      },
      {
        type: "fitb",
        before: "When a Java application starts, its main() method is executed by the",
        after: ".",
        a: "main thread"
      },
      {
        type: "fitb",
        before: "To start a Java thread, call its",
        after: "method.",
        a: "start()"
      },
      {
        type: "fitb",
        before: "The value of NORM_PRIORITY, which is used to return a thread to default priority, is",
        after: ".",
        a: "5"
      },
      {
        type: "fitb",
        before: "The value of MIN_PRIORITY is",
        after: "and MAX_PRIORITY is 10.",
        a: "1"
      },
      {
        type: "fitb",
        before: "Thread.currentThread() returns a reference to the Thread instance executing",
        after: ".",
        a: "currentThread()"
      },
      {
        type: "fitb",
        before: "A thread can be created by extending the Thread class or by implementing the",
        after: "interface.",
        a: "Runnable"
      },
      {
        type: "fitb",
        before: "Generic types are declared within",
        after: ".",
        a: "angle brackets (<>)"
      },
      {
        type: "fitb",
        before: "A generic class is also called a",
        after: ".",
        a: "parameterized type"
      },
      {
        type: "fitb",
        before: "In generics, the most commonly used parameter names are E – Element, K – Key, N – Number, T – Type, and V –",
        after: ".",
        a: "Value"
      },
      {
        type: "fitb",
        before: "<?> denotes an",
        after: "wildcard that can be used to represent any type.",
        a: "unbounded"
      },
      {
        type: "fitb",
        before: "To declare an upper-bounded wildcard, use the wildcard character '?', followed by the",
        after: "keyword and its upper bound.",
        a: "extends"
      },
      {
        type: "fitb",
        before: "A lower-bound wildcard is expressed using the wildcard character '?', followed by the",
        after: "keyword and its lower bound.",
        a: "super"
      },
      {
        type: "fitb",
        before: "The showType() method displays the type of T by calling",
        after: "on the Class object returned by getClass().",
        a: "getName()"
      },
      {
        type: "fitb",
        before: "Operating systems use a",
        after: "to determine which threads should be currently executing.",
        a: "thread scheduler"
      },
      {
        type: "fitb",
        before: "Thread priority values must be within the range",
        after: "and MAX_PRIORITY.",
        a: "MIN_PRIORITY"
      },
      {
        type: "fitb",
        before: "In generics, type parameter names are recommended to be",
        after: "capital letters.",
        a: "single-character"
      }
    ];