export type IconSize = LooseAutocomplete<'sm' | 'xs'>;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

export interface IconProps {
  size: IconSize;
}

// Removing a member
export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? 'd' : TType;
// Removes the c in the uinion and replace it with D

export type WowWithourC = RemoveC<Letters>;

/**
 * Nested types infer
 */

// Here you will get hint for the first and second key of the nested obj
export const getDeepValues = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  }
};

const result = getDeepValues(obj, "bar", "d");

console.log(result);

// keyof
type Course = {
  title: string;
  subtitle: string;
  lessonsCount: number;
}
const course: Course = {
  title: "Typescript Bootcamp",
  subtitle: "Learn the language, build practical projects",
  lessonsCount: 100
}

export function extractProperty<T, K extends keyof T>(data: T, property:K) {
  return data[property];
}

const val = extractProperty(course, 'lessonsCount');


