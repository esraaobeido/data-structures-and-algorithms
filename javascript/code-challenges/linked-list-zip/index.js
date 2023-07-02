const LinkedList = require('./LinkedList');

// Create two linked lists
const list1 = new LinkedList();
const list2 = new LinkedList();

// Append values to list1
list1.append(1);
list1.append(3);
list1.append(5);

// Append values to list2
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);

// Zipper the two lists
const mergedList = new LinkedList();
mergedList.zipperList(list1, list2);

// Print the merged list
console.log(mergedList.toString());
