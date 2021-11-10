# Hash Tables

Hash tables are a complex data structure capable of sorting large amounts of information and retrieving specific elements efficiently. This data structure relies on the concept of key/value pairs, where the "key" is a searched string and the "value" is the data paired with that key.

Each searched key is converted from its string form into a numerical value, called a hash, using a predefined has function. This has then points to a storage bucket - a smaller subgroup within the table. It then searches the bucket for the originally entered key and returns the value associated with that key.

- Advantages
  - Key can be in any form, while array's indices must be integers
  - Highly efficient search function
  - Constant number of operations for each search
  - Constant cost for insertion or deletion operations
- Disadvantages

  - Collisions: an error occurs when two keys convert to the same hash code or two hash codes point to the same value
  - These errors can be common and often require an overhaul of the hash function.

  Each hash table can be very different, from the types of the keys and values, to the way their hash functions work. Due to these differences and the multi-layered aspects of a hash table, it is nearly impossible to encapsulate so generally.
