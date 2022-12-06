// 1. Link this JavaScript file to the index.html file.

// 2. Create an array of objects for 3 different animals, each animal array-item should include a property for the animal's name and number of legs (think: how can we collate this information?)

// 3.  Select the ul element using JS

// 4. Use a for loop to run through the entire animals array, adding each item's information to a list item on the website, each with a unique id attribute.
// IF you need a hint, each iteration should cover something like the following:
// a ) Create a template literal that contains the animal's two property values
// b) Using document createElement, creates a list item and changes its inner html to the template literal
// c) Append the newly created list element to the ul we selected in step 3
// d) Check your browser. You should have three list items, but they don't have any ids! In the for loop, after we create the list item, make sure we give them a unique id. Make sure any changes are done before you append the element.

// e) Each of the above list items should also have an event listener added to them that changes the item's text color from black to red and vice versa. 
// IF you need a hint, the process of doing so would go as such: Add an event listener to each of the list items inside the for loop, BEFORE you append the list item. The event listener should:
// a. take in an event parameter and check the event's target.
// b. Using the target, it should change the target's text color to red.
// c. BONUS : How can we make sure that clicking it twice will make the red text go away and go back to black?

// Challenge (difficult, but use those console logs and you can problem solve it!): ------
// How could we make it so that each list item was in a card from HTML and looked pretty?


// If you finish early: Try adding a form element that allows the user to add an animal to the list themself, and also consider how you can make your webpage look more user-accessible using CSS and HTML.
