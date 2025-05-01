"use strict";

import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id,
} from "./data.js";

// Test add_item
console.log("Adding items...");
console.log(add_item({ id: 1, title: "First Item" })); // true
console.log(add_item({ id: 2, title: "Second Item" })); // true
console.log(add_item({ id: 1, title: "Duplicate Item" })); // false

// Test get_items
console.log("\nCurrent items:");
console.log(get_items());

// Test update_item_title_by_id
console.log("\nUpdating title of item with id 1...");
console.log(update_item_title_by_id(1, "Updated First Item")); // true
console.log(update_item_title_by_id(3, "Nonexistent Item")); // false

// Test get_item_title_by_id
console.log("\nTitle of item with id 1:");
console.log(get_item_title_by_id(1)); // "Updated First Item"
console.log(get_item_title_by_id(3)); // undefined

// Test delete_item_by_id
console.log("\nDeleting item with id 2...");
console.log(delete_item_by_id(2)); // true
console.log(delete_item_by_id(2)); // false

// Final items
console.log("\nFinal items:");
console.log(get_items());
