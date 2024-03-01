Best Practices -:

1. The name of a method should capture the action performed by that method rather than describing when the method will be called. For example:

/\*_ AVOID: does not describe what the function does. _/
handleClick() {
// ...
}

/\*_ PREFER: describes the action performed by the function. _/
activateRipple() {
// ...
}

2. Function Naming Convention and comments

- Opens a modal dialog containing the given component.
- @param component Type of the component to load into the dialog.
- @param config Dialog configuration options.
- @returns Reference to the newly-opened dialog.
  open<T>(component: ComponentType<T>, config?: MatDialogConfig): MatDialogRef<T> { ... }

3. Give classes meaning full names
PREFER: describes the scenario under test. _/
   class FormGroupWithCheckboxAndRadios { /_ ... _/ }
   class InputWithNgModel { /_ ... \_/ }

AVOID: does not fully describe the scenario under test. _/
class Comp { /_ ... _/ }
class InputComp { /_ ... \_/ }
