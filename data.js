const data = [
  {
    title: "1. Normal Functions",
    example: `
      <p class="example-code">function functionName (argument) {</p>
      <p class="indent">return argument+2;</p>
      <p class="example-code">}</p>`,
    description: `
      <p>
        The is the most common way of defining a function. We declare that we are
        writing a function, set the function name, provide it with arguments
        in the parentheses, then put the code to be executed by the function in
        a code block defined by the curly braces.
      </p>
      <p>
        This type of function can be defined and called out of order. You do not
        have to initialize this function before calling it.
      </p>`,
    question: `But what if I don't like naming things?`
  },
  {
    title: "2. Anonymous Functions",
    example: `
      <p class="example-code">function (argument) {</p>
      <p class="indent">return argument+2;</p>
      <p class="example-code">}</p>`,
    description: `
      <p>
        An anonymous function is a function declaration with no name. These can
        be assigned to a variable name and called by referring to the variable:
      </p>
      <p class="code">
        let myFunction = function (argument) {return argument+2;}
      <p>
      <p>
        But unlike a normal function declaration, this has to be declared before
        it can be used because the variable it is assigned to has to be declared
        before being referenced, just like any other variable.
      </p>
      <p>
        Anonymous functions are most commonly used when a method requires a function
        as an argument and that function is only going to be used once then discarded:
      </p>
      <p class="code">
        array.filter( function (num) {return num>0} );
      </p>`,
    question: `But what if the word 'function' makes me uncomfortable?`
  },
  {
    title: `3. Arrow Functions`,
    example: `
      <p class="example-code">(argument)=> {</p>
      <p class="indent">return argument+2;</p>
      <p class="example-code">}</p>`,
    description: `
      <p>
        An arrow function is an anonymouns function just like before, but with two changes:
      </p>
      <ul>
        <li>The word 'function' has been removed.</li>
        <li>The symbols '=>' have been added between the arguments and the function code block.</li>
      </ul>
      <p>
        This mostly just shortens the syntax. You can assign an arrow function to
        a variable just like with anonymous functions:
      </p>
      <p class="code">
        let myFunction = (argument)=> {return argument+2;}
      </p>
      `,
    question: `But what if I hate curly braces and the word 'return'?`
  },
  {
    title: `4. Implicit Returns`,
    example: `<p class="example-code">(argument)=> argument+2</p>`,
    description: `
      <p>
        When the curly braces are removed, the need for the word 'return' is removed
        as well. A function with no explicitely stated 'return' has what is called
        an <i>implicit</i> return. Because the return is <i>implied</i>, but not stated.
      </p>
      <p>
        We can assign it to a variable same as before:
      </p>
      <p class="code">
        let myFunction = (argument)=> argument+2;
      </p>
      <p>
        If we need the return statement to span multiple lines of code, we can use
        parentheses:
      </p>
      <p class="code">
        let myFunction = (argument)=> (<br>
          <span class="indent">argument+2<span class="comment"> //The ';' is not needed.</span></span><br>
        );
      </p>
    `,
    question: `Neato. But what should I do with this?`
  },
  {
    title: `5. How to use`,
    example: ``,
    description: `
      <p>
        A good use of abbreviated functions like anonymous functions and arrow functions
        is when you are using a method that requires a function as an argument.
      <p>
      <p>
        We are going to use the array 'filter' method as an example. The filter method
        uses a function as an argument. This method iterates over the array it is called on
        (much like a 'for of' loop) and delivers each value of that array to the function
        as the first argument. We can then run some comparison to determine if we should keep
        this value. If we choose to keep it, it gets added to an array that the filter method
        delivers back to us.
      </p>
      <p>
        Here is an example of a normal filter method:
      </p>
      <p class="code">
        let numbersArray = [5,8,3,10,15,20,1,-5];<br><br>
        function greaterThanFive (number) {<br>
        <span class="indent">return number > 5;</span><br>
        }<br>
        let newArray = numbersArray.filter(greaterThanFive);<br><br>
        console.log( newArray );<br>
        <span class="comment">//logs: [8,10,15,20]</span>
      </p>
      <p>
        Let's turn this into an anonymous function by removing the function declaration
        and assigning it to a variable:
      </p>
      <p class="code">
        let numbersArray = [5,8,3,10,15,20,1,-5];<br><br>
        let greaterThanFive = function (number) {<br>
        <span class="indent">return number > 5;</span><br>
        }<br>
        let newArray = numbersArray.filter(greaterThanFive);<br><br>
        console.log( newArray );<br>
        <span class="comment">//logs: [8,10,15,20]</span>
      </p>
      <p>
        That was equal parts cool and unhelpful. Let's put that anonymous function directly
        into the declaration of the newArray:
      </p>
      <p class="code">
        let numbersArray = [5,8,3,10,15,20,1,-5];<br><br>
        let newArray = numbers.filter(function (number) {return number > 5;});<br><br>
        console.log( newArray );<br>
        <span class="comment">//logs: [8,10,15,20]</span>
      </p>
      <p>
        Hey look, we reduced the creation of the new array to a single line! Coolio.
      </p>
      <p>
        It feels weird to say the word 'function' though, since we already know this
        has to be a function. (Plus removing it will save us some typing and make our code shorter.)
      </p>
      <p>
        Let's turn this into an arrow function by removing the word
        'function' and replacing it with the '=>' symbols after the arguments:
      </p>
      <p class="code">
        let numbersArray = [5,8,3,10,15,20,1,-5];<br><br>
        let newArray = numbers.filter((number)=> {return number > 5;});<br><br>
        console.log( newArray );<br>
        <span class="comment">//logs: [8,10,15,20]</span>
      </p>
      <p>
        We now have an arrow function up and running. But we can make things even
        cleaner. The function we are running is very simple, with a single line of
        code that is just doing a comparison and returning the value.
      </p>
      <p>
        Let's make this code cleaner by removing the curly braces and the explicit
        'return' statement and replacing them with an implicit return:
      </p>
      <p class="code">
        let numbersArray = [5,8,3,10,15,20,1,-5];<br><br>
        let newArray = numbers.filter((number)=> number > 5);<br><br>
        console.log( newArray );<br>
        <span class="comment">//logs: [8,10,15,20]</span>
      </p>
      <h2>In conclusion...</h2>
      <p>
        Arrow functions aren't anything you don't already know how to use. It's
        just a stripped down function declaration that's useful for when you need
        simple one-time-use functions that don't need to stick around.
      </p>
      <p>
        Simplifying and shortening the syntax for declaring these kinds of functions
        makes your code less cluttered and keeps the length of your lines to a minimum.
      </p>
    `,
    question: `Arrow functions are now my favorite thing ever! Woot!`
  }
];
