export const EnvConfiguration = () => ({

    environment: process.env.NODE_ENV || 'development',
    mongodb:process.env.MONGOURI,
    port:process.env.PORT,
    defaultLimit:process.env.DEFAULT_LIMIT || 10,
})