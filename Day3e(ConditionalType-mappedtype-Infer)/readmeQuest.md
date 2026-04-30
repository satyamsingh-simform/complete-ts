/*Next set of questions */
<!-- // Q1 – Get First Name -->
type GetFirst<T> = ???;
// A
type GetFirst<T> = T extends `${infer F} ${infer _}` ? F : never;
// Call
type A1 = GetFirst<"virat kohli">; // "virat"


// 🔹 Q2 – Get Last Character
// Q
type LastChar<T> = ???;
// A
type LastChar<T> = T extends `${infer _}${infer L}` ? L : never;
// Call
type A2 = LastChar<"hello">; // "


// 🔹 Q3 – Remove Prefix
// Q
type RemovePrefix<T> = ???;
// A
type RemovePrefix<T> = T extends `user_${infer R}` ? R : T;
// Call
type A3 = RemovePrefix<"user_123">; // "123"



// 🔹 Q4 – Add Prefix
// Q
type AddPrefix<T> = ???;
// A
type AddPrefix<T extends string> = `/${T}`;
// Call
type A4 = AddPrefix<"about">; // "/about"



// 🔹 Q5 – Starts With "user"
// Q
type StartsWithUser<T> = ???;
// A
type StartsWithUser<T> = T extends `user_${string}` ? true : false;
// Call
type A5 = StartsWithUser<"user_123">; // true
type A6 = StartsWithUser<"admin">;    // false




// 🔹 Q6 – First Element
// Q
type First<T> = ???;
// A
type First<T> = T extends [infer F, ...any[]] ? F : never;
// Call
type A7 = First<[1, 2, 3]>; // 1




// 🔹 Q7 – Last Element
// Q
type Last<T> = ???;
// A
type Last<T> = T extends [...any[], infer L] ? L : never;
// Call
type A8 = Last<[1, 2, 3]>; // 3



// 🔹 Q8 – Remove First (Tail)
// Q
type Tail<T> = ???;
// A
type Tail<T> = T extends [any, ...infer R] ? R : never;
// Call
type A9 = Tail<[1, 2, 3]>; // [2, 3]




// 🔹 Q9 – Remove Last (Pop)
// Q
type Pop<T> = ???;
// A
type Pop<T> = T extends [...infer R, any] ? R : never;
// Call
type A10 = Pop<[1, 2, 3]>; // [1, 2]



// 🔹 Q10 – Return Type
// Q
type MyReturn<T> = ???;
// A
type MyReturn<T> = T extends (...args: any[]) => infer R ? R : never;
// Call
type A11 = MyReturn<() => number>; // number




// 🔹 Q11 – Parameters
// Q
type MyParams<T> = ???;
// A
type MyParams<T> = T extends (...args: infer P) => any ? P : never;
// Call
type A12 = MyParams<(a: string, b: number) => void>; // [string, number]



// 🔹 Q12 – First Argument
// Q
type FirstArg<T> = ???;
// A
type FirstArg<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never;
// Call
type A13 = FirstArg<(a: number, b: string) => void>; // number




// 🔹 Q13 – Unwrap Promise
// Q
type UnwrapPromise<T> = ???;
// A
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
// Call
type A14 = UnwrapPromise<Promise<string>>; // string




// 🔹 Q14 – Deep Unwrap
// Q
type DeepUnwrap<T> = ???;
// A
type DeepUnwrap<T> = T extends Promise<infer U> ? DeepUnwrap<U> : T;
// Call
type A15 = DeepUnwrap<Promise<Promise<number>>>; // number




// 🔹 Q15 – Get Email Domain
// Q
type GetDomain<T> = ???;
// A
type GetDomain<T> = T extends `${string}@${infer D}` ? D : never;
// Call
type A16 = GetDomain<"test@gmail.com">; // "gmail.com"




// 🔹 Q16 – Extract ID from Route
// Q
type GetId<T> = ???;
// A
type GetId<T> = T extends `/user/${infer Id}` ? Id : never;
// Call
type A17 = GetId<"/user/123">; // "123"





// 🔹 Q17 – Flatten Deep
// Q
type FlattenDeep<T> = ???;
// A
type FlattenDeep<T> = T extends (infer U)[] ? FlattenDeep<U> : T;
// Call
type A18 = FlattenDeep<string[][][]>; // string




// 🔹 Q18 – Uppercase string values
// Q
type UppercaseStrings<T> = ???;
// A
type UppercaseStrings<T> = {
  [K in keyof T]:
    T[K] extends string ? Uppercase<T[K]> : T[K];
};
// Call
type A19 = UppercaseStrings<{
  name: "satya";
  age: 20;
}>;
// { name: "SATYA"; age: 20 }