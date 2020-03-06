(this["webpackJsonpinterview-quiz-app"]=this["webpackJsonpinterview-quiz-app"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"quiz":[{"question":"Dependency Injection","answer":["technique to pass a dependancy into an object","provide the object what it needs, instead of having the object construct it"],"image":"","section":"General","sources":[],"type":""},{"question":"CRUD Operations","answer":["Create","Read","Update","Delete"],"image":"","section":"General","sources":[],"type":"list"},{"question":"Hash Collision","answer":["occurs when a hash function returns the same bucket location for two different keys"],"image":"","section":"General","sources":[],"type":""},{"question":"Hash Table","answer":["Maps keys (via hash function to bucket) to values"],"image":"","section":"General","sources":[],"type":""},{"question":"Hash Function","answer":["Deterministic, meaning given input will always generate the same hash function"],"image":"","section":"General","sources":[],"type":""},{"question":"4 OOP principals","answer":["Abstraction","Encapsulation","Inheritance","Polymorphism"],"image":"","section":"OOP","sources":[],"type":"list"},{"question":"4 OOP principals - Abstraction","answer":["Hide complexity and only show essential info to the user"],"image":"","section":"OOP","sources":[],"type":""},{"question":"4 OOP principals - Encapsulation","answer":["Grouping related properties, methods, and other members as a single unit/object"],"image":"","section":"OOP","sources":[],"type":""},{"question":"4 OOP principals - Inheritance","answer":["Create new classes based on an existing class"],"image":"","section":"OOP","sources":[],"type":""},{"question":"4 OOP principals - Polymorphism","answer":["Allows the ability to take on more than one form","method overloading - method with the same name, but different parameters","method overriding - change the behavior defined in the base/parent class"],"image":"","section":"OOP","sources":[],"type":""},{"question":"SOLID principles","answer":["Single responsibility principle","A class should only have a single responsibility","","Open\u2013closed principle","Software entities should be open for extension, but closed for modification","","Liskov substitution principle","Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. See also design by contract.","","Interface segregation principle","Many client-specific interfaces are better than one general-purpose interface.","","Dependency inversion principle","One should depend upon abstractions, [not] concretions."],"image":"","section":"OOP","sources":["http://en.wikipedia.org/wiki/SOLID"]},{"question":"Design Patterns","answer":["Creational","provide the capability to create objects based on a required criteria and in a controlled way","","Singleton","Ensure class has only one instance to be used across an entire system","EX: Browser Singleton in Selenium","","Abstract factory","Creates an instance of a related objects without specifying the exact class","EX: Indicator factory into Backtester","","Structural","organizing different classes and objects to form larger structures and provide new functionality","","Decorator","Add functionality to objects dynamically","","Behavioral","identifying common communication patterns between objects and realize these patterns","","Termplate Method","Define skeleton of algorithm, deferring some step to subclasses","EX: Buy/Sell methods"],"image":"","section":"OOP","sources":[],"type":""},{"question":"N-tier architecture","answer":["Dividing application into multiple tiers, such as data tier, business tier, view tier"],"image":"","section":"General","sources":[],"type":""},{"question":"Service Oriented Architecture","answer":["structuring your application into multiple services separating concerns while allowing them to communicate with one another"],"image":"","section":"General","sources":[],"type":""},{"question":"TCP vs UDP","answer":["Transmission Control Protocol (TCP) is a connection-oriented protocol that computers use to communicate over the internet. It is one of the main protocols in TCP/IP networks. TCP provides error-checking and guarantees delivery of data and that packets will be delivered in the order they were sent.","","User Datagram Protocol (UDP) is a connectionless protocol that works just like TCP but assumes that error-checking and recovery services are not required. Instead, UDP continuously sends datagrams to the recipient whether they receive them or not."],"image":"","section":"Security","sources":[],"type":""},{"question":"Java HashSet vs TreeSet","answer":["HashSet is unordered.","TreeSet is stored in sorted, asc order."],"image":"","section":"Java","sources":[],"type":""},{"question":"Java hashCode()","answer":["an integer value generated by a hashing algorithm"],"image":"","section":"Java","sources":[],"type":""},{"question":"Java Garbage Collection","answer":["automatic memory management, unused objected are deleted to free up memory"],"image":"","section":"Java","sources":[],"type":""},{"question":"Constraint","answer":["rules that can be applied to the data","PRIMARY KEY - uniquely identify row/record in a given table, can be multiple columns","FOREIGN KEY - identify row/record in another table","NOT NULL","DEFAULT","UNIQUE","CHECK"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Delete vs. Truncate","answer":["Delete logs each transaction and can be rolled back, Truncate cannot","Delete can use WHERE clause, Truncate cannot","Delete fires triggers, Truncate does not","Delete retains IDENTITY, Truncate resets IDENTITY back to SEED"],"image":"","section":"SQL","sources":[],"type":"list"},{"question":"commands (subsets of SQL)","answer":["DDL - data definition language","DML - data manipulation language (CRUD)","DCL - data control language","TCL - transaction control language"],"image":"https://i.stack.imgur.com/7uUaJ.png","section":"SQL","sources":[],"type":"list"},{"question":"Identity","answer":["type of column that generates a unique key value based on a given seed, increment (defaults to 1, 1)","this value increases automatically"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Alias","answer":["temporary name assigned to table or column (AS keyword)"],"image":"","section":"SQL","sources":[],"type":""},{"question":"SQL Stored Procedures","answer":["subroutine/function that you can save to be run with or without parameters"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Stored Procedure vs. Function","answer":["SP is precompiled, Function is compiled and executed every time","SP can return 0, 1, or multiple values, Function return scalar or table","SP can call Functions, but Functions cannot call SP"],"image":"","section":"SQL","sources":[],"type":"list"},{"question":"Joins","answer":["inner - records that have matching values in both tables","left - all records from the left table and matched records in the right","right - all records from the right table and matched records in the left","outer - all records"],"image":"https://i.stack.imgur.com/iJUMl.png","section":"SQL","sources":[],"type":"list"},{"question":"Injection","answer":["technique used to maliciously modify the data"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Prevent SQL Injection","answer":["SqlCommand and add parameters to SqlParameterCollection","ORM (like Entity Framework)","Escape input"],"image":"","section":"SQL","sources":["https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlcommand.parameters?redirectedfrom=MSDN&view=netframework-4.8#System_Data_SqlClient_SqlCommand_Parameters"],"type":""},{"question":"SQL Trigger","answer":["a piece of SQL code that runs on a given event"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Get Identity of Inserted Row","answer":["@@Identity returns the last identity value in current session across all scopes","Scope_Identity() returns the last identity in current session in current scope (use this in most cases)"],"image":"","section":"SQL","sources":[],"type":""},{"question":"SQL Server vs. Oracle","answer":["SQL Server","Transact-SQL (T-SQL)","easier to work with, optimize better","Orcale","Procedural Language SQL (PL-SQL)"],"image":"","section":"SQL","sources":[],"type":""},{"question":"SQL View vs Temp Table","answer":["View","Basically a select statement shortcut (executes every time)","","Temp Table","Takes space/permission"],"image":"","section":"SQL","sources":[],"type":""},{"question":"CTE","answer":["Common table expression allows definition of a temporary result set within the given scope"],"image":"","section":"SQL","sources":[],"type":""},{"question":"SQL Index","answer":["Used to speed up searching within the database"],"image":"","section":"SQL","sources":["https://stackoverflow.com/questions/2955459/what-is-an-index-in-sql"],"type":""},{"question":"SQL Clustered vs. Non-Clustered Index","answer":["Clustered","The way the data is physically stored in a table","Describes order when doing SELECT * FROM ...","Only one per table","Non-Clustered","Works with pointers, mapping data is stored in a separate table","Tradeoff is faster lookups with extra storage","Can have multiple per table"],"image":"","section":"SQL","sources":[],"type":""},{"question":"SQL Cursor","answer":["enables the processing of individual rows returned by a query"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Students/Courses","answer":["See image"],"image":"https://i.stack.imgur.com/HY78n.png","section":"SQL","sources":[],"type":""},{"question":"Database Normalization","answer":["Design technique to reduce redunancy and dependacity of data, used to organize larger tables into smaller tables with linked relationships"],"image":"","section":"SQL","sources":[],"type":""},{"question":"How to store passwords in database","answer":["Store hashed+salted password into table","Hash returns value that cannot be inverted","Salt is added to make the hash output unique"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Rainbow table","answer":["pre-computed lookup tables to crack password hashes"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Object/Relation Mapping Framework (ORM)","answer":["Entity Framework"],"image":"","section":"General","sources":[],"type":""},{"question":"nvarchar vs. varchar","answer":["nvarchar stores unicode data (2 bytes per char)","varchar stores ascii data (1 byte per char)"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Scalar","answer":["A query that returns one row with one column"],"image":"","section":"SQL","sources":[],"type":""},{"question":"ExecuteNonQuery","answer":["Executes a T-SQL statement and returns the number of rows affected"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Git vs. SVN","answer":["Git distributed version control","SVN centralized"],"image":"","section":"Git","sources":[],"type":""},{"question":"How to create a new branch","answer":["git branch {new_branch_name}","// checkout and branch shortcut:","git checkout -b {new_branch_name}"],"image":"","section":"Git","sources":[],"type":"code"},{"question":"Web Server","answer":["Software/Hardware needed to host a web application"],"image":"","section":"General","sources":[],"type":""},{"question":"Ports for HTTP/HTTPS","answer":["HTTP: 80","HTTPS: 443"],"image":"","section":"Security","sources":[],"type":""},{"question":"Apache Kafka","answer":["High throughout distributed messaging system"],"image":"","section":"Kafka","sources":[],"type":""},{"question":"Data Warehouse","answer":["large store of data used for business analysis"],"image":"","section":"SQL","sources":[],"type":""},{"question":"Agile","answer":["software-development methodology tool used to gather requirements before development and provides flexibility for any changes through a collaborative effort of cross-function teams and end users"],"image":"","section":"Agile/Scrum","sources":[],"type":""},{"question":"Scrum","answer":["Defines roles, sets of processes (sprint planning, review, retro, etc...) to provide transparency to the stakeholders while giving developers achievable goals within a short period of time (two weeks)"],"image":"","section":"Agile/Scrum","sources":[],"type":""},{"question":"SDLC steps","answer":["Plan","Analyze","Design","Implement","Test/Deploy","Maintain"],"image":"","section":"Agile/Scrum","sources":[],"type":"list"},{"question":"Product Owner","answer":["Manages the Product Backlog (priority, clear goals)"],"image":"","section":"Agile/Scrum","sources":[],"type":""},{"question":"TLS","answer":["Transport Layer Security","protocall to secure communication between web server and browser"],"image":"","section":"Security","sources":[],"type":""},{"question":"BFS vs DFS","answer":["Breadth First Search","Level Order Traversal","Uses queue","Recursive","","Depth First Search","Uses stack","Iterative"],"image":"","section":"Algorithms","sources":[],"type":""},{"question":"$","answer":["$ is an alias for jQuery"],"image":"","section":"jQuery","sources":[],"type":""},{"question":"Tell me about yourself","answer":["Name","Job Title for X years","College","Describe job (jack of all trades?)","Hobbies (quantitive investing, basketball)","Young, going to make mistakes, quick learner, ready to work"],"image":"","section":"Behaviorial","sources":[],"type":"list"},{"question":"STAR method","answer":["Situation","Task","Action","Result"],"image":"","section":"Behaviorial","sources":["https://www.themuse.com/advice/star-interview-method"],"type":"list"},{"question":"Talk about a time when you had to work closely with someone whose personality was very different from yours.","answer":["try/catch","after building rapport, know the person tendancies","if the person is analytical, use that","trade-offs"],"image":"","section":"Behaviorial","sources":[],"type":"list"},{"question":"Give me an example of a time you faced a conflict while working on a team. How did you handle that?","answer":["de-escalate","apologize if wrong","trade-offs"],"image":"","section":"Behaviorial","sources":[],"type":"list"},{"question":"Talking Points","answer":["Play to teammate\'s strength after building rapport","Handling things that are in our control when given a hard deadline (responsive redesign in order to sell company)","Ads Manager was a new project","Transitioning from waterfall to agile/scrum","Transitioning from SVN to Git, release management","Working with UX to improve product","Ads mistagging","Outsourcing"],"image":"","section":"Behaviorial","sources":[],"type":"list"},{"question":"What was your role?","answer":["Worked on consumer facing .NET web applications (jdpower.com and NADAguides.com)","Worked on APIs, beginning the work to migrate from a monolithic app","Automated QA (selenium)","Ads (javascript)","CI/CD pipelines"],"image":"","section":"Resume","sources":[],"type":""},{"question":"Pub/sub","answer":["Sends messages (publishers) to subscribers"],"image":"","section":"General","sources":[],"type":""},{"question":"Microservices","answer":["Technique used to arrange an application into loosely coupled services"],"image":"","section":"Architecture","sources":["https://en.wikipedia.org/wiki/Microservices"],"type":""},{"question":"Benefits","answer":["Components","Virtual DOM - faster than vanilla JavaScript"],"image":"","section":"React","sources":[],"type":""},{"question":"Design Patterns - Singleton","answer":["class Singleton","{","    private static Singleton StaticInstance = null;","    private static readonly object Lock = new object();","    private Singleton() { }","    public static Singleton GetInstance()","    {","        lock (Lock)","        {","            if (StaticInstance == null)","            {","                StaticInstance = new Singleton();","            }","            return StaticInstance;","        }","    }","}","","class Singleton","{","    private static readonly Lazy<Singleton> Lazy =","        new Lazy<Singleton>(() => new Singleton());","    public static Singleton Instance => Lazy.Value;","    private Singleton() { }","}"],"image":"","section":"OOP","sources":["https://csharpindepth.com/articles/singleton"],"type":"code"},{"question":"Fibonacci","answer":["private static Dictionary<int, int> Memo","    = new Dictionary<int, int>();","public static int FibRecursive(int n)","{","    if (n <= 1)","    {","        return 1;","    }","    else if (Memo.TryGetValue(n, out var value))","    {","        return value;","    }","    else","    {","        var result = FibRecursive(n - 1)","            + FibRecursive(n - 2);","        Memo.Add(n, result);","        return result;","    }","}","public static int FibIterative(int n)","{","    var result = 1;","    var prev = 1;","    var prevPrev = 1;","    for (var i = 0; i < n - 1; ++i)","    {","        result = prev + prevPrev;","        prevPrev = prev;","        prev = result;","    }","    return result;","}"],"image":"","section":"Code","sources":[],"type":"code"}]}')},function(e){e.exports=JSON.parse('{"quiz":[{"question":"Class/Object","answer":["Class describes the type","Object is the instance of a given class","A class is a blueprint and an object is a building made from that blueprint"],"image":"","section":"C#","sources":[],"type":""},{"question":"Accessor","answer":["getter/setter"],"image":"","section":"C#","sources":[],"type":""},{"question":"Access Modifiers","answer":["public - can be accessed by any code within all assemblies","private - can only be accessed by code in the same class","protected - can only be accessed by code in the same class or any dervied classes","internal - can be accessed by any code within the same assembly, but not from another assembly"],"image":"","section":"C#","sources":[],"type":"list"},{"question":"C# Boxing vs. Unboxing","answer":["Boxing - value to reference type","<code>int i = 1;","Object o = i;</code>","","Unboxing - reference to value type","<code>Object o = 1;","int i = (int)o</code>"],"image":"","section":"C#","sources":[],"type":""},{"question":"C# Struct vs Object","answer":["Struct","Value type","use when you don\'t need to support inheritance or polymorphism","","Class","Reference type"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/object-oriented-programming"],"type":""},{"question":"Generics","answer":["Allows you to write a class or method that can work with any data type"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/"],"type":""},{"question":"Generics Example","answer":["public class TestClass<T> { }"],"image":"","section":"C#","sources":[],"type":"code"},{"question":"Abstract vs. Interface","answer":["classes can implement as many interfaces (multiple inheritance), but only one abstact class","abstract class can define non-abstract methods and define/declare methods, interfaces can only declare methods","abstract methods can be protected, interface methods can only be public","abstract class can contain methods/fields/constants"],"image":"","section":"C#","sources":["https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-c-sharp/"],"type":""},{"question":"Abstract vs. Interface Example","answer":["public abstract class Abstract1","{","    public void Abstract1Method1() { }","    public abstract void Abstract1Method2();","    protected abstract void Abstract1Method3();","    //\'Abstract1.Abstract1Method4()\':","    //virtual or abstract members cannot be private","    //private abstract void Abstract1Method4();","}","public interface IInterface1","{","    void IInterface1Method1();","}","public interface IInterface2","{","    void IInterface2Method1();","}","public class Class1 : Abstract1","{","    public override void Abstract1Method2() { }","    protected override void Abstract1Method3() { }","}","public class Class2 : IInterface1, IInterface2","{","    public void IInterface1Method1() { }","    public void IInterface2Method1() { }","}","public class Class3 : Abstract1, IInterface1","{","    public override void Abstract1Method2() { }","    protected override void Abstract1Method3() { }","    public void IInterface1Method1() { }","}","public class Class4 : Abstract1, IInterface1, IInterface2","{","    public override void Abstract1Method2() { }","    protected override void Abstract1Method3() { }","    public void IInterface1Method1() { }","    public void IInterface2Method1() { }","}"],"image":"","section":"C#","sources":[],"type":"code"},{"question":"using","answer":["ensures that the given IDisposable object\'s Dispose method is called after execution, even if an exception is thrown"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement"],"type":""},{"question":"Garbage Collector","answer":["non-determinalistic way that allows us to not have to manually free memory on the heap"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals"],"type":""},{"question":"delegate","answer":["type that represents references to methods","allows methods to be passed as parameters","used in LINQ (lambda expressions)"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/","https://docs.microsoft.com/en-us/dotnet/api/system.predicate-1?view=netframework-4.8"],"type":"list"},{"question":"delegate/lambda LINQ example","answer":["// with delegate","List<int> result = list.FindAll(","    delegate (int i)","    {","        return i % 2 == 0;","    }",");","// with lambda expression","List<int> result = list.FindAll(i => i % 2 == 0);"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/standard/delegates-lambdas"],"type":"code"},{"question":"lambda","answer":["another way to define a delegate, syntatic sugar"],"image":"","section":"C#","sources":[],"type":""},{"question":"C# volatile","answer":["indicates field might be modified by multiple threads at the same time"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/volatile"],"type":""},{"question":"virtual","answer":["signals this method/property/indexer/event declaration can be overriden in its derived class"],"image":"","section":"C#","sources":[],"type":""},{"question":"virtual Example","answer":["public abstract class Abstract1","{","    public virtual void Abstract1Method1() { }","    public void Abstract1Method2() { }","}","public class Class1 : Abstract1","{","    public override void Abstract1Method1() { }","    //\'Class1.Abstract1Method1()\' hides inherited","    // member \'Abstract1.Abstract1Method1()\'.","    // Use the new keyword if hiding was intended.","    public new void Abstract1Method2() { }","}"],"image":"","section":"C#","sources":[],"type":"code"},{"question":"unsafe","answer":["denotes unsafe context, which is required for any operation involving pointers"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe"],"type":""},{"question":"Static constructor","answer":["Static constructor only executes once in the entire life cycle of the class","before any instance constructor is invoked or member is accessed"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-constructors"],"type":""},{"question":"String vs. string vs. StringBuilder","answer":["String - System.String is a CLR Type","string - alias for System.String, immutable","StringBuilder - mutable"],"image":"","section":"C#","sources":[],"type":""},{"question":"Value vs. Reference","answer":["value","holds value","stored on stack","reference","holds memory address","stored on heap"],"image":"","section":"C#","sources":[],"type":""},{"question":"Value vs. Reference Example","answer":["static void Main(string[] args)","{","    int arg;","","    // Passing by value.","    // The value of arg in Main is not changed.","    arg = 4;","    squareVal(arg);","    Console.WriteLine(arg);","    // Output: 4","","    // Passing by reference.","    // The value of arg in Main is changed.","    arg = 4;","    squareRef(ref arg);","    Console.WriteLine(arg);","    // Output: 16 ","}","","static void squareVal(int valParameter)","{","    valParameter *= valParameter;","}","","// Passing by reference","static void squareRef(ref int refParameter)","{","    refParameter *= refParameter;","}"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/passing-parameters"],"type":"code"},{"question":".NET CLR","answer":["Common Language Runtime - runs managed code (written in .NET), unmanaged code is written outside of .NET"],"image":"","section":"C# .NET","sources":["https://docs.microsoft.com/en-us/dotnet/standard/clr"],"type":""},{"question":".NET routing","answer":["routes urls of incoming requests and maps them to actions"],"image":"","section":"C# .NET","sources":[],"type":""},{"question":"Azure Pipelines","answer":["cloud service that lets you automatically build/test project"],"image":"","section":"C# Azure","sources":[],"type":""},{"question":"Azure Artifacts","answer":["create package feeds (like from NuGet) to organize/control packages"],"image":"","section":"C# Azure","sources":[],"type":""},{"question":"POCO","answer":["Plain Old CLR/C# Object","a simple object that contains data","they don\'t care what/how they are being used"],"image":"","section":"C#","sources":[],"type":""},{"question":"How to debug an issue","answer":["Check logs","Ensure code handles exceptions, with appropriate error messages"],"image":"","section":"General","sources":[],"type":"list"},{"question":"Abstract classes","answer":["Base class only and cannot be instantiated","Can have non-abstract methods"],"image":"","section":"C#","sources":[],"type":""},{"question":"ASP.NET MVC","answer":["Model - Represents the state of application and contains all business logic","View - Razor view engine","Controller - Responds to user input by routing requests to controller actions"],"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1024px-MVC-Process.svg.png","section":"C# .NET","sources":[],"type":"list"},{"question":"Service Lifetimes","answer":["Transient - created each time they\'re requested from the service container","Scoped - created once per client request","Singleton - created the first time they\'re requested"],"image":"","section":"C# ASP.NET MVC Core","sources":["https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#service-lifetimes"],"type":""},{"question":"Application Pool","answer":["Allows isolation of applications on the same server","If there is an error in one app, it won\'t take down the other applications"],"image":"","section":"C# IIS","sources":[],"type":""},{"question":"Async Practical Usage","answer":["Three APIs being called in a single action, each takes 500ms.","Synchronous calls = 1500ms, Async = 500ms"],"image":"","section":"C#","sources":[],"type":""},{"question":".NET Framework vs. .NET Core","answer":[".NET Core","Cross-platform","Microservices/Docker containers",".NET Framework","App is currently using .NET Framework (MSFT recommends extending rather than migrating)","App uses third-party .NET libraries or NuGet packages not available in .NET Core"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server"],"type":""},{"question":"Tag Helpers","answer":["Assist the server-side creation of HTML elements within a Razor file"],"image":"","section":"C# ASP.NET Core","sources":["https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-3.1"],"type":""},{"question":"Namespace","answer":["declare scope/organize code elements"],"image":"","section":"C#","sources":["https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace"],"type":""}]}')},,function(e,t,s){e.exports=s(20)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(8),o=s.n(i),r=s(5),c=s(2),l=s(3),u=s(6),d=s(4),p=s(1),m=s(7),h=(s(18),s(10)),g=s(11),y=s(12),b=function(e){function t(e){var s;return Object(c.a)(this,t),(s=Object(u.a)(this,Object(d.a)(t).call(this,e))).showAll=s.showAll.bind(Object(p.a)(s)),s.hideAll=s.hideAll.bind(Object(p.a)(s)),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showAll",value:function(){Object(r.a)(document.getElementsByClassName("answer-container")).forEach((function(e){e.style.display="block"}))}},{key:"hideAll",value:function(){Object(r.a)(document.getElementsByClassName("answer-container")).forEach((function(e){e.style.display="none"}))}},{key:"render",value:function(){var e=[].concat(Object(r.a)(h.quiz),Object(r.a)(g.quiz));e.sort((function(e,t){var s=e.section||"z",a=t.section||"z",n=s.localeCompare(a);return 0!==n?n:e.question.localeCompare(t.question)}));var t=e.map((function(e,t){return n.a.createElement(w,{key:t,i:t,item:e})}));return n.a.createElement("div",null,n.a.createElement("h1",null,"Get a job, dude."),n.a.createElement("button",{class:"unselectable",onClick:this.showAll},"Show all"),n.a.createElement("button",{class:"unselectable",onClick:this.hideAll},"Hide all"),n.a.createElement("br",null),n.a.createElement("br",null),t,n.a.createElement("a",{href:"https://jonbudi.github.io/interview-quiz-app/",target:"_blank",rel:"noopener noreferrer"},"https://jonbudi.github.io/interview-quiz-app/"))}}]),t}(n.a.Component),w=function(e){function t(e){var s;return Object(c.a)(this,t),(s=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={isDisplayed:!1},s.handleClick=s.handleClick.bind(Object(p.a)(s)),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{isDisplayed:!e.isDisplayed}}))}},{key:"render",value:function(){var e=this.props.i,t=this.props.item;return n.a.createElement("div",{className:"question-container",onClick:this.handleClick},n.a.createElement(f,{key:"q".concat(e),question:"".concat(t.section?"".concat(t.section," - "):"").concat(t.question)}),n.a.createElement(v,{key:"a".concat(e),answer:t.answer,isDisplayed:this.state.isDisplayed,image:t.image,sources:t.sources,type:t.type,id:e}))}}]),t}(n.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"question"},this.props.question)}}]),t}(n.a.Component),v=function(e){function t(e){var s;return Object(c.a)(this,t),(s=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=s.handleClick.bind(Object(p.a)(s)),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this,t=this.props.sources&&this.props.sources.length>0;return n.a.createElement("div",{style:this.props.isDisplayed?{}:{display:"none"}},n.a.createElement("div",{className:"answer-container",onClick:this.handleClick},this.props.answer&&this.props.answer[0]?this.props.answer.map((function(t,s){return"code"===e.props.type?n.a.createElement("div",{key:"a-".concat(e.props.id,"-").concat(s),className:"answer answer--code"},n.a.createElement("code",null,t)):"list"===e.props.type?n.a.createElement("ul",{key:"ul-".concat(e.props.id,"-").concat(s)},n.a.createElement("li",{key:"a-".concat(e.props.id,"-").concat(s),className:"answer"},t)):n.a.createElement("div",{key:"a-".concat(e.props.id,"-").concat(s),className:"answer"},t)})):n.a.createElement("div",{style:{color:"red"}},"Answer this!"),this.props.image&&n.a.createElement(y.LazyLoadImage,{src:this.props.image,alt:this.props.image})),n.a.createElement("div",{className:"sources"},t?"Source(s):":"",t&&this.props.sources.map((function(t,s){return n.a.createElement("div",{key:"div-".concat(e.props.id,"-").concat(s)},n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},t))}))))}}]),t}(n.a.Component),q=(s(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(n.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/interview-quiz-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/interview-quiz-app","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.bf2a1281.chunk.js.map