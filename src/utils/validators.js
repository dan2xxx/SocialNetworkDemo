
export const required = value => (value ? undefined : 'Field required!')

export const maxLength = max => value => (value && (value.length > max) ? 'Max length exceeded' : undefined)
