Style Guide:

- `import classNames`, not `import classnames`
- `import React, { Children, Component }` as required
- Alphabetical propTypes in destructuring / propType validation
- Alphabetical attributes in JSX
- Directories always singular - `asset`, not `assets`
- Always multiline when multiple attributes in components
- maybe a case for non-multiline attributes when calling simple components?
- Group imports? React, modules, components
- single-line attributes for pasted SVG markup?
- classNames - static, template-string, conditional, props
- no point setting default props if default is the falsey value if the propType e.g., false, '' etc. Only use to set truthy defaults, e.g. rows: 3
General

- Trialling ITCSS approach to organising Stylus, using underscored dirnames to reflect triangle depth


Naming conventions
- Heading, not Title - matches HTML <heading1> etc
- Consider state props - hasClose vs close vs closable etc. Consider existing examples e.g. required isn't isRequired
- Color not colour (code only, spell it like a civilised person in copy)
