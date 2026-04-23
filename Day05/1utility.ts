/*Utility Types
1.Partial<T>
    -Makes all properties optional
type User = {
  name: string;
  age: number;
};
type PartialUser = Partial<User>;
Result
{
  name?: string;
  age?: number;
}
Useful when: updating object partially


2.Required<T>
    -Makes all properties required

type User = {
  name?: string;
  age?: number;
};

type FullUser = Required<User>;
Result
{
  name: string;
  age: number;
}

Opposite of Partial

🔹 3. Readonly<T>

👉 Makes all properties immutable

type User = {
  name: string;
};

type ReadonlyUser = Readonly<User>;
Result
{
  readonly name: string;
}
Example
const user: ReadonlyUser = { name: "satya" };
user.name = "new"; // ❌ error
🔹 4. Pick<T, K>

👉 Select specific properties

type User = {
  name: string;
  age: number;
  city: string;
};

type NameAge = Pick<User, "name" | "age">;
Result
{
  name: string;
  age: number;
}

✔ Useful for:

extracting subset
🔹 5. Omit<T, K>

👉 Remove specific properties

type User = {
  name: string;
  age: number;
  city: string;
};

type WithoutAge = Omit<User, "age">;
Result
{
  name: string;
  city: string;
}

✔ Opposite of Pick
*/
