---
title: TypeScript结构类型和Freshness
date: 2023-04-07 01:55:00
permalink: /pages/5fbc21/
categories:
  - 技术
  - TypeScript学习
tags:
  - 
---

## 结构型类型（"鸭子类型"）

TypeScript 类型兼容性是基于结构类型的；结构类型只使用其成员来描述类型。 类型检查关注的是值的形状， 即鸭子类型

下面通过一个小故事解释以下鸭子类型：

long long ago, 在JS王国里，有一个国王，他觉得世界上最美妙的声音就是鸭子的叫声，于是国王召集大臣，要组建一个1000只鸭子组成的合唱团。大臣们找遍了全国，终于找到999只鸭子，但是始终还差一只，最后大臣发现有一只非常特别的鸡，它的叫声跟鸭子一模一样，于是这只鸡就成为了合唱团的最后一员。

<img src="/blog/imgs/03技术/59429313-604035ab9625a_fix732.png" alt="鸭子类型"/>

于是大家定义了鸭子类型，“如果它走起来像鸭子，而且叫起来像鸭子，那么它就是鸭子”。

TypeScript一般通过interface定义类型，其实就是定义形状与约束。 所以定义interface其实是针对结构来定义新类型。对于Typescript来说，两个类型只要结构相同，那么它们就是同样的类型。简单来说就是 如果x要兼容y，那么y至少具有与x相同的属性。比如：

```typescript
interface Named {
  name: string;
}
let x: Named;

let y = { name: 'xman', age: 18};
x = y;
```

这里要检查y是否能赋值给x，编译器检查x中的每个属性，看是否能在y中也找到对应属性。 在这个例子中，y必须包含名字是name的string类型成员。y满足条件，因此赋值正确。

以下可以赋值成功吗？

```typescript
interface Person {
  name: string;
  age: number;
}

let p = {
  name: 'xman',
  age: 18, 
  height: '60kg'
}

let person: Person = p;  // 没毛病 
```
按照规则， 接口Person中每一个属性在 p 对象中都能找到对应的属性，且类型匹配。 另外， 可以看到 p 对象具有一个额外属性height， 但是赋值同样会成功。

附带说下**结构型(structural)类型**以及**名义型(nominal)类型**

* 名义类型是静态语言Java、C等语言所使用的，简单来说就是，如果两个类型的类型名不同，那么这两个类型就是不同的类型了，尽管两个类型是相同的结构
  
* 结构型类型中的类型检测和判断的依据是类型的结构，会看它有哪些属性，分别是什么类型；在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的

* Typescript中的类型是结构型类型， 类型检查关注的是值的形状， 两个类型只要结构相同，那么它们就是同样的类型

如：

```typescript
interface Name {
  name: string;
}

class Person {
  name: string;
}

let p: Name;
p = new Person();   // 没毛病 
```

在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口。

在TypeScript中， 因为Person类与Named接口具有相同的结构，所以它们是互相兼容的。 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。

## Freshness 特性

如上所述， 只要满足结构类型兼容规则的两个类型便可相互兼容。那是否有例外呢？

```typescript
interface Name {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

let p: Name;
p = {name: 'xman', age: 18}
// Type '{ name: string; age: number; }' is not assignable to type 'Named'.
// Object literal may only specify known properties, and 'age' does not exist in type 'Named'.
```
提示 **不能将类型'{ name: string; age: number; }'分配给类型'Named'。 对象字面量只能指定已知的属性，并且在“Named”类型中不存在“age”**。

上述代码中， 虽然为变量p赋予的对象字面量完全符合结构类型兼容规则, 但是它却抛出错误， 这主要是由TS中的Freshness特性导致的。

[Freshness]特性会对对象字面量进行更为严格的类型检测： 只有目标变量的类型与该对象字面量的类型完全一致时， 对象字面量才可赋值给目标变量，否则将抛出类型错误。

我们可以通过以下方法进行消除编译异常：

```typescript
let p: Name;
p = {name: 'xman', age: 18} as Person;
```

或者

```typescript
let p: Name;
let person: IPerson = {name: 'xman', age: 18};
p = person;
```

Freshness缺点： 它能误导你认为某些东西接收的数据比它实际的多

```typescript
function logName(something: { name: string }) {
  console.log(something.name);
}

logName({ name: 'matt' }); // ok
logName({ name: 'matt', job: 'being awesome' });  
// Argument of type '{ name: string; job: string; }' is not assignable to parameter of type '{ name: string; }'.
// Object literal may only specify known properties, and 'job' does not exist in type '{ name: string; }'.
```
**注意：** 这种错误提示，只会发生在对象字面量上。

## 关于谁是"鸭子"谁是"会鸭叫的鸡"的问题

举两个例子来说一下我的理解

例子一：

```typescript
interface Animal {
    name: string;
}
interface Dog {
    name: string;
    bark(): void;
}
let dog: Dog = {
    name: 'dog',
    bark: () => {}
}
let animal: Animal = dog // 没毛病
```
例子一中 let animal: Animal 中 animal 是“鸭子”，国王只要求他有 name 符合要求，dog 是 “会鸭叫的鸡” 因为它有符合要求的 name 属性，至于其他的bark国王不在乎，重点是 后续 animal 的使用 符合 interface Animal 的要求即可，就算“会鸭叫的鸡”dog赋值给animal也可以，它会“鸭叫”就行，也就是能做到 interface Animal 的要求的功能即可。

例子二：

```typescript
function lessFun (arg: string): void {
    console.log(arg.length)
}
let moreFun: (arg: string, num: number) => void = lessFun // 没毛病
```

例子二中 typescript把 lessFun 看成了"鸭子" 因为后面moreFun的执行 moreFun（）  也就是执行 lessFun 定义的函数。能否成功“鸭叫”取决于lessFun 定义的这个函数是否能成功执行，所以 moreFun 是 “会鸭叫的鸡”也没问题，也就是符合 输入包含第一个参数 arg: string 且输出 包含void 即可，这样它会鸭叫就行

总结，谁是鸭子主要还是看功能目的，let animal: Animal = dog  这里Animal 突出为目的，animal 要实现 Animal 的功能。如果认为 dog 为鸭子显然不合理。 例子二 let moreFun: (arg: string, num: number) => void = lessFun。 这里 moreFun 后续的使用是符合 lessFun 函数定义的  目的是不能让它报错  所以它就是“鸭叫”功能。
