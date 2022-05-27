const defaultFontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

export default function Text({
  as = 'span',
  fontSize,
  color,
  weight,
  lineHeight,
  align,
  fontFamily,
  children,
  className,
  ...props
}) {
  const Element = as
  let styles = {
    fontSize: fontSize || '1.5rem',
    color: color || 'black',
    weight: weight || 'normal',
    lineHeight: lineHeight || '1.5',
    textAlign: align || 'center',
    fontFamily: fontFamily || defaultFontFamily,
  }
  return (
    <Element className={className} style={styles} {...props}>
      {children}
    </Element>
  )
}
