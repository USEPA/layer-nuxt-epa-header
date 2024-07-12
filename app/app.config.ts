export default defineAppConfig({
  epaHeaderLayer: {
    name: 'Hello from epa-header layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    epaHeaderLayer?: {
      /** Project name */
      name?: string
    }
  }
}
