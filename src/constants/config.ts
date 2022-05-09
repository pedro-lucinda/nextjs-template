export const IS_DEVELOPMENT = process.env.NODE_ENV

// Storage key prefix to save the state of the application
export const STORAGE_PREFIX = '@example_'

// If is a client side
export const IS_CLIENT_SIDE = typeof window !== 'undefined'
