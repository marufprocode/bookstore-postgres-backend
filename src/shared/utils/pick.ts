const pick = <T extends object, k extends keyof T>(
  obj: T,
  keys: k[]
): Partial<T> => {
  const finalObject: Partial<T> = {}; //Partial<T> means this object can have missing few properties of T object
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObject[key] = obj[key];
    }
  }
  return finalObject;
};

export default pick;

// The expression `obj && Object.hasOwnProperty.call(obj, key)` is a way to check if an object (`obj`) has a property (`key`) using the `hasOwnProperty` method.

// Here's how it works:

// 1. `obj`: This represents the object you want to check for the existence of a property.

// 2. `Object.hasOwnProperty`: `hasOwnProperty` is a method available on all JavaScript objects. It checks if the object has a property with the given name.

// In summary, the expression `obj && Object.hasOwnProperty.call(obj, key)` checks if `obj` is not null or undefined, and if it is not, it calls the `hasOwnProperty` method on the object `obj` to determine if it has a property with the name specified by `key`.
