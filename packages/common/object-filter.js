const { entries, fromEntries } = Object;

/**
 * By analogy with how `Array.prototype.filter` will filter the elements of
 * an array to produce a new array with only the elements that pass the test,
 * `objectFilter` will do likewise for the string-named own enumerable
 * properties of an object.
 *
 * Typical usage applies `objectFilter` to a CopyRecord, i.e.,
 * an object for which `passStyleOf(original) === 'copyRecord'`. For these,
 * none of the following edge cases arise. The result will be a CopyRecord
 * with only the property names that passed the test, whose values are the
 * same as the original's values.
 *
 * When the original is not a CopyRecord, some edge cases to be aware of
 *    * No matter how mutable the original object, the returned object is
 *      hardened.
 *    * Only the string-named enumerable own properties of the original
 *      are filtered. All other properties are ignored.
 *    * If any of the original properties were accessors, `Object.entries`
 *      will cause its `getter` to be called and will use the resulting
 *      value.
 *    * No matter whether the original property was an accessor, writable,
 *      or configurable, all the properties of the returned object will be
 *      non-writable, non-configurable, data properties.
 *    * No matter what the original object may have inherited from, and
 *      no matter whether it was a special kind of object such as an array,
 *      the returned object will always be a plain object inheriting directly
 *      from `Object.prototype` and whose state is only these new filtered
 *      own properties.
 *
 * With these differences, even if the original object was not a CopyRecord,
 * if all the remaining values are Passable, then the returned object will be
 * a CopyRecord.
 *
 * @template {Record<string, any>} O
 * @param {O} original
 * @param {(value: O[keyof O], key: keyof O) => boolean} filterFn
 * @returns {Partial<O>}
 */
export const objectFilter = (original, filterFn) => {
  const ents = entries(original);
  const filteredEnts = ents.filter(([k, v]) => filterFn(v, k));
  return /** @type {Partial<O>} */ (harden(fromEntries(filteredEnts)));
};
harden(objectFilter);