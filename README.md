# The ultimate CrossCode type definitions

**<big>Written for CrossCode version 1.4.0</big>**

Hi! This document serves as the documentation for the _Ultimate CrossCode TypeDefs_ project and programmer's guide to writing CrossCode mods in [TypeScript](https://www.typescriptlang.org/).

## Setting up a TypeScript mod project

**NOTE:** despite my personal preference for [Yarn](https://yarnpkg.com/) over [npm](https://www.npmjs.com/) I included npm commands here because virtually everyone in CC modding seems to be using it, I hope you can figure out Yarn commands yourself if you use it, the syntax should be more or less equivalent.

**NOTE 2:** this tutorial will be updated when CCLoader3 has released.

Let's get started by creating the mod manifest:

### `package.json`

```json
{
  "name": "your-mod",
  "version": "0.0.0",
  "module": true,
  "prestart": "dist/prestart.js",
  "ccmodDependencies": {},
  "devDependencies": {
    "typescript": "^4.6.2",
    "ultimate-crosscode-typedefs": "CCDirectLink/ultimate-crosscode-typedefs"
  },
  "scripts": {
    "build": "tsc --build",
    "watch": "tsc --watch"
  }
}
```

This is the most basic package manifest that is just enough to get our example mod to compile and run. Refer to the modding tutorial for the meaning of the fields (TODO, haven't began writing it yet, please wait until summer begins). I'll add a few comments though:

- `module: true` is not strictly required, but it will become opt-out rather than opt-in in CCLoader v3 (unlike as it is now), so it is better to write new mods in a way which will require to do less porting work. Plus ES modules are generally handier in the context of CC modding because they work in both browser and Node.js unlike `require()`. Unfortunately, [some extra care needs to be taken](#importing-es-modules).
- `prestart` is used just as an example here, of course you are not required to use only it and there are no incompatibilities between TypeScript and other mod loading stages.
- An empty `ccmodDependencies` object is included in case you need npm dependencies because if `ccmodDependencies` isn't present CCLoader tries to read `dependencies` which conflicts with npm.
- Inclusion of developer-only metadata such as `devDependencies` and `scripts` is actually fine. It doesn't crash any existing tools (because the standard allows extra fields in the manifest) and greatly simplifies the mod development because there is no need to handle two separate copies of `package.json`, then copy one of them (the mod manifest, not the Node.js package manifest) into the directory for compiled code, then somehow set up symbolic links and do other unnecessary crap that can be avoided by simply keeping a single `package.json` (In short - I'm waiting for the new manifest, the `ccmod.json`, to be implemented).
- The version of TypeScript doesn't need to be locked to 4.6.2 as in the example above, it just happened to be the latest version as of writing. However, There are some problems with TypeScript versions below v3.9.x [described here](#important-typescript-versions-below-390-are-unsupported).
- `ultimate-crosscode-typedefs` is included as a Git dependency because I have no plans about publishing it to npm (this would slow down the development as I would have to release a new version on every commit) and it is easier to update it with with `npm update` than use Git submodules.

**TIP:** A good example of `package.json` in an existing TS mod can be found [here](https://github.com/dmitmel/crosscode-readable-saves/blob/master/package.json).

There is one very important note though: **_you might need_ a local copy of ultimate-crosscode-typedefs because typings are very far from complete** (as I mentioned [above](#history-and-background)) and most likely you'll be editing them often to accommodate the needs of your project. So, let's set up a local copy with the [`npm link`](https://docs.npmjs.com/cli/link.html) command as well before continuing:

```bash
# Firstly, fork this repository, I would be very grateful if you send your
# changes as pull requests to this one

# Any other directory is fine, I just prefer to keep my CrossCode Mod
# Development Environment contained in the CrossCode directory
cd path/to/CrossCode

git clone git@github.com:USERNAME/ultimate-crosscode-typedefs.git
cd ultimate-crosscode-typedefs
npm link

# again, the following path depends on your preference
cd ../assets/mods/your-mod

npm link ultimate-crosscode-typedefs
```

Ok! Now that we are done with setting up the manifest and dependencies you can run

```bash
npm install
```

The next thing we have to tackle is configuring the TypeScript compiler. A good starting point is:

### `tsconfig.json`

```json
{
  "include": ["src", "node_modules/ultimate-crosscode-typedefs/crosscode-ccloader-all.d.ts"],
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "module": "ESNext",
    "target": "ES2019",
    "allowJs": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

**NOTE:** I highly recommend leaving the `strict` option enabled. These typedefs were developed with it enabled, so I'm not sure how they and/or type inference would behave on less strict configurations. Plus, `strict` isn't actually some kind of a "masochist mode" for TypeScript, in fact I believe that it should be on by default.

Here's an [official reference](https://www.typescriptlang.org/tsconfig) describing all of the compiler options.

I also recommend creating a directory called `headers` inside `src`, [it will come in handy later](#extending-existing-types).

Oh, by the way, here is a [Git-ignore](https://git-scm.com/docs/gitignore) file for your convenience:

### `.gitignore`

```
dist/
node_modules/
```

### The final project layout

We are pretty much done now! Here's the directory tree you'll end up with:

```
your-mod/
├─ dist/
├─ node_modules/
├─ src/
│  ├─ headers/
│  └─ prestart.ts
├─ .gitignore
├─ package.json
└─ tsconfig.json
```

The project can be built with `npm run build` now and you can start the compiler in the watch-mode with `npm run watch`.

## Using the type definitions

All things are defined as you would expect. The type of the class `sc.TextGui` is, indeed, called `sc.TextGui`, its parent type is called `ig.GuiElementBase`. `sc.ELEMENT` is an enum with five members: `NEUTRAL`, `HEAT`, `COLD`, `SHOCK` and `WAVE`. All class types are subclasses of the type called `ig.Class`. `ig` and `sc` are two big TypeScript namespaces. Even `inject` and `extend` are defined correctly! Most importantly, only two things are defined as read-only: `prototype` and `classId` of `ig.Class`. Everything else (including constants) can be overwritten to because that's very common in modding. Most importantly, I ensured that type inference works correctly without type annotations, which means that minimal changes to the mod code are required when porting an existing mod to TS and, _theoretically_ typedefs can be used to improve the developer experience of JS mods!

### Extending existing types

Adding properties and methods to existing types is a very common task in CrossCode modding, which is, fortunately, very easy to accomplish thanks to [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). In a ~~shellnut~~ nutshell, here's what declaration merging does: the following two TS definitions

```typescript
// taken from ccloader-ui.d.ts in this repository
declare namespace sc {
  namespace OPTIONS_DEFINITION {
    interface KnownTypesMap {
      'logLevel-log': sc.OptionDefinition.CHECKBOX;
      'logLevel-warn': sc.OptionDefinition.CHECKBOX;
      'logLevel-error': sc.OptionDefinition.CHECKBOX;
      'mods-description': sc.OptionDefinition.INFO;
    }
  }
}

// taken from localization-utils.d.ts of crosscode-ru
declare namespace sc {
  namespace OPTIONS_DEFINITION {
    interface KnownTypesMap {
      'crosscode-ru.localized-labels-on-sprites': sc.OptionDefinition.CHECKBOX;
      'crosscode-ru.lea-spelling': sc.OptionDefinition.BUTTON_GROUP;
    }
  }
}
```

will be merged into

```typescript
declare namespace sc {
  namespace OPTIONS_DEFINITION {
    interface KnownTypesMap {
      'logLevel-log': sc.OptionDefinition.CHECKBOX;
      'logLevel-warn': sc.OptionDefinition.CHECKBOX;
      'logLevel-error': sc.OptionDefinition.CHECKBOX;
      'mods-description': sc.OptionDefinition.INFO;
      'crosscode-ru.localized-labels-on-sprites': sc.OptionDefinition.CHECKBOX;
      'crosscode-ru.lea-spelling': sc.OptionDefinition.BUTTON_GROUP;
    }
  }
}
```

As you can see, declaration merging combines similarly named interfaces, as well as namespaces, together. Other merges are possible, they are described in the TypeScript documentation, but they aren't very interesting in this context. You are not limited to just random interfaces, however. All classes are defined as interfaces (more about this [later](#creating-new-classes)) which makes adding new fields and methods a piece of cake!

```typescript
declare namespace ig.ENTITY {
  interface Player {
    hasCatEars: boolean;
  }
}

// from crosscode-readable-saves
declare namespace ig {
  interface Storage {
    readableData: ig.StorageDataReadable;
  }
}

// from enhanced-ui
declare namespace sc {
  interface InfoBar {
    _associatedBuffInfo: sc.BuffInfo | null;

    // `this: this` notation will be explained later
    _updateTickerMaxSize(this: this): void;
  }
}
```

These extension declarations have been named by me "header files" due to their similarity with [a feature of the C programming language](https://en.wikipedia.org/wiki/Include_directive). The recommended location for those header files is the directory `src/headers/` we created earlier. Why not `src/types/`? Well, these declarations aren't intended for outside libraries or something like that, they technically are required for the code inside your project to work and contain forward declarations because TypeScript can't create new fields on the fly.

### Creating new classes

This is a very interesting topic because formally defining [Impact's class system](https://impactjs.com/documentation/class-reference/class) wasn't an easy task at all. Classes can't be defined with the `class` keyword because then extending (with declaration merging) becomes is impossible. Also keep in mind that functions `inject` and `extend` need proper declarations too! Well, currently we have the following system in place:

```typescript
declare namespace sc {
  interface MyClass extends ig.Class {
    c: string[];

    doSomething(this: this, other: ig.MyClass): void;
    selfDestruct(this: this): boolean;
  }
  interface MyClassConstructor extends ImpactClass<MyClass> {
    new (a: number, b: number): MyClass;
  }
  var MyClass: MyClassConstructor;
}
```

Let's go over a few things:

- As with simple type extensions, I recommend putting class definitions in header files.
- The type `sc.MyClass` and the actual constructor which is visible from the (compiled) JavaScript are named the same because the compiler allows it and to not cause confusion.
- The constructor is defined with a mutable variable (`var`) because you will have to write `sc.MyClass = ig.Class.extend({ ... })` in your code.
- All classes should either inherit other Impact classes or `ig.Class` in the declarations since normally it is impossible to create another class without having `ig.Class` at the end of the inheritance chain (because some class has to call `ig.Class.extend`). \
  **TIP:** I generated [an inheritance tree of all classes used in CrossCode](https://gist.github.com/dmitmel/124612112e6f73ead9c3360c1dbc136d) which might come in handy for searching parent classes.
- `ImpactClass` is a helper interface which automatically generates the `prototype`, defines [`inject`](https://impactjs.com/documentation/class-reference/class#inject) and [`extend`](https://impactjs.com/documentation/class-reference/class#extend).
- All methods **must** define `this` parameter explicitly, otherwise the `ImpactClassDefinition` type used by `ImpactClass` for the class definition objects in `inject`/`extend` won't generate correct `this` parameters which contains `this.parent` for example. Fortunately, TypeScript has the contextual type alias `this` which refers to the current interface or class, so defining `this` is as easy as writing `this: this` at the beginning of the argument list.
- `this.parent` in the class definitions contains actual method signatures and not some stub like `(...args: unknown[]) => unknown`, so you get typechecking there as well.
- Constructors which are defined in the constructor interfaces aren't inherited from parent classes.
- `ImpactClass` automatically picks up the constructor and generates an `init` function for it in the class definitions and the prototype.
- It is also possible to add static methods and properties by defining them in the constructor interface (`this: this` is not required for static methods).
- Most notably: **merged declarations will be picked up automatically** by `ImpactClassDefinition`.

**TIP:** Good examples of modded class definitions can be seen in [Readable saves](https://github.com/dmitmel/crosscode-readable-saves/blob/master/src/header.d.ts) and [Enhanced UI](https://github.com/dmitmel/crosscode-ru/blob/master/enhanced-ui/src/headers/ticker-display.d.ts).

It is also possible to add other types to an Impact class by creating a similarly named `namespace`:

```typescript
declare namespace ig {
  namespace TextBlock {
    interface Settings {
      speed?: ig.TextBlock.SPEED;
      textAlign?: ig.Font.ALIGN;
      maxWidth?: number;
      bestRatio?: number;
      linePadding?: number;
    }

    // ...
    type DrawCallback = (width: number, height: number) => void;
    // ...
  }
  interface TextBlock extends ig.Class {
    // ...
    setDrawCallback(this: this, drawCallback: ig.TextBlock.DrawCallback): void;
    // ...
  }
  interface TextBlockConstructor extends ImpactClass<TextBlock> {
    new (font: ig.MultiFont, text: sc.TextLike, settings: ig.TextBlock.Settings): TextBlock;
    // ...
  }
  var TextBlock: TextBlockConstructor;
}
```

Unfortunately, extra care needs to be taken when adding enums to Impact classes. From the standpoint of the TypeScript compiler both `var` and `enum` generate JS code, therefore are incompatible. I came up with the following trick to circumvent that:

```typescript
declare namespace ig {
  enum Font$ALIGN {
    LEFT,
    RIGHT,
    CENTER,
  }

  namespace Font {
    type ALIGN = Font$ALIGN;
  }
  interface Font extends ig.Image {
    // ...
  }
  interface FontConstructor extends ImpactClass<Font> {
    // ...
    ALIGN: typeof Font$ALIGN;
    // ...
  }
  var Font: FontConstructor;
}
```

As you can see, the enum is declared separately from the `var` declaration which it otherwise would be attempted to fuse with, and then both type and static field aliases to the said enum are created.

## Recommended code style in definitions

When contributing to this project you must comply with the style I'll be describing here. I don't require you to follow it in your mods, but it would be nice nevertheless.

- Use as less `any` and `unknown` as possible. This also applies to data of JSON asset files stored in various classes.
- Put fields and methods in the order they are arranged in the game code.
- Always use fully-qualified class names (i.e. `ig.Entity`, not `Entity`), unless you are defining a class (reference to the two interfaces of the currently defined class can be written without including the namespace) or creating a structure of nested interfaces, e.g. for defining field types in JSON assets.
- May the type aliases be with you!
- Prefer namespaces over interfaces if functions in an object don't contain references to `this`. For example: `ig.TextParser` has references to `this`, so it is defined as an _interface_, on the other hand `sc.MenuHelper` doesn't, so it is a _namespace_.
- Always use `declare global`: [see below](#important-typescript-versions-below-390-are-unsupported).

## Caveats and known limitations

### IMPORTANT: TypeScript versions below 3.9.0 are unsupported!

_See also: [Using `this.constructor`, or TypeScript v3.9.x-and-later support](#using-thisconstructor-or-typescript-v39x-and-later-support)_

All type definition files in this repository are written as ES modules, that is, they include at least one `import` or `export` statement (even if an empty export, i.e. `export {};`). Because of this declarations of global variables, in other words almost all declarations, are put in the `declare global { ... }` blocks. This way was chosen over the regular one (i.e. just put a bunch of `declare namespace`/`declare var`/`declare function` statements) because:

1. It makes putting type/class extensions directly into scripts where they are implemented (in other words where `.inject()` is called) possible, that is allowing to write small mods with only a handful of type extensions without external header files. In theory this makes header files redundant entirely, but so far I haven't tested possibility of writing mods without them entirely.
2. It makes possible extensions in module-style declaration files. The problem is that global declarations from non-module declaration files are ignored in module declaration files, but not vice versa. In other words, previously it was impossible to add extensions in `declare global` blocks if they referenced existing CrossCode types, so good luck if you needed to `import` something inside a header file. A workaround for that exists, you can use the [`import('./x/y/z')` type expression](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#import-types), but it is much possible to just write the CrossCode type defintions as ES modules, so that they are usable with both module and non-module TS files.

Unfortunately, due to unknown reason this breaks TypeScript pre-3.9.0 support - projects using ultimate-crosscode-typedefs can't be compiled at all with previous TS compiler versions. Moreover, newer TS versions have some bizarre regression which causes issues when using `this.constructor` (and potentially other arcane features triggering unknown subtle behaviors of my Impact Class System implementation). See [this section for more information](#using-thisconstructor-or-typescript-v39x-and-later-support).

### Importing ES modules

Due to the fact that neither browser nor nw.js add `.js` to the imported paths (obviously because performing [Node.js-style](https://nodejs.org/api/modules.html#modules_all_together) module resolving would waste a ton of network requests, although I'm not sure why doesn't nw implement that) we have to specify full filenames when importing ES modules in JS mods, i.e.:

```javascript
import './module1.js';
import { something } from './module2.js';
```

The TS compiler doesn't modify imported paths in any way, so you can't just do this:

```typescript
import './module1.ts';
import { something } from './module2.ts';
```

And expect the former snippet to appear in the compiled code. Fortunately, the TS compiler understands this situation, so you can import files with `.js` extensions from TypeScript files even when you are really importing a JS script compiled from a TS module. In other words, you can just write the former snippet in the TS source code and it will work perfectly. Furthermore, this doesn't break completion and "go to definition" functionality of Visual Studio Code (and, very likely, other JS/TS IDEs).

### Using `this.constructor`, or TypeScript v3.9.x-and-later support

_See also: [IMPORTANT: TypeScript versions below 3.9.0 are unsupported!](#important-typescript-versions-below-390-are-unsupported)_

When accessing `this.constructor` inside injected functions you might see the following error:

```
node_modules/ultimate-crosscode-typedefs/impact-class-system-correct.d.ts:59:12 - error TS2502: 'prototype' is referenced directly or indirectly in its own type annotation.

59   readonly prototype: ImpactClassPrototype<this, Instance>;
              ~~~~~~~~~
```

Sadly, due to the sheer complexity of the correct `ImpactClass` implementation it was impossible to find what really causes this bug and fix the `ImpactClass` itself. To be honest, if you find a bug which triggers a similar error, I recommend reporting it to me so that I can add it to my collection of bugs in the TypeScript compiler. However, not all is lost! It is possible to use `this.constructor` - for whatever reason an immediate cast to the concrete type of the constructor either with `as ig.ClassConstructor` or `as typeof ig.Class` (replace `ig.Class` with your class name) doesn't trigger this error, even though the inferred type of `this.constructor` _is the type you cast to_.

### Injecting generic functions in Impact classes

For some reason the compiler can't infer types of generics from the signature declared in the type definition and apply it to the injected function. An example workaround of this problem can be seen [here](https://github.com/dmitmel/crosscode-ru/blob/c666c00ba9416e03d9e39550f5181cdce42e6721/enhanced-ui/src/storage-area-and-map-names.ts#L97-L112).

## Asking for help or reporting bugs

You can reach me, _dmitmel_, either via the [bug tracker](https://github.com/dmitmel/ultimate-crosscode-typedefs/issues) or the [CrossCode modding Discord server](https://c2dl.info/r/md). Of course, I won't write your mods for you, but you can ask me any questions or request help regarding writing and/or porting CrossCode mods in TypeScript.
