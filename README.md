Challenge description:

This is a react component that is technically functional,
but would be very hard to maintain because of it's size.

It's easier to write tests for smaller components that pass
data between them. Rewrite this component so that it could be
rendered from somewhere else by using these lines.
```
const checkboxes = [0, 1, 2];

<Form>
	checkboxes.map(id =>
		<Checkbox key={id} id={id}/>
	)
</Form>

or (easier but less impresive)

<Form checkboxes={checkboxes} />
```
If you decide to do the second option you MUST STILL create and
render a Checkbox Component inside the Form Component
