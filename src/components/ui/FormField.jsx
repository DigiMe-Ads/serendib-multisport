const THEMES = {
  dark: {
    label: 'text-white/60',
    input: 'border-white/20 text-white placeholder:text-white/30 focus:border-volt',
  },
  light: {
    label: 'text-ink/60',
    input: 'border-ink/20 text-ink placeholder:text-ink/30 focus:border-kaya',
  },
}

export default function FormField({ id, label, type = 'text', required = false, theme = 'dark', className = '', ...rest }) {
  const styles = THEMES[theme]
  const Control = type === 'textarea' ? 'textarea' : 'input'

  return (
    <label htmlFor={id} className={`flex flex-col gap-2 ${className}`}>
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.label}`}>
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      <Control
        id={id}
        name={id}
        type={Control === 'input' ? type : undefined}
        required={required}
        rows={Control === 'textarea' ? 4 : undefined}
        className={`w-full border-b bg-transparent py-3 text-base outline-none transition-colors duration-300 ${styles.input}`}
        {...rest}
      />
    </label>
  )
}
