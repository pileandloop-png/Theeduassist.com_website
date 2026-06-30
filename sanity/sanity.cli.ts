import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jg4gi6mn',
    dataset: 'production'
  },
  deployment: {
     appId: 'sd7izhwfo47hv6gqsqdjj3s2',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
