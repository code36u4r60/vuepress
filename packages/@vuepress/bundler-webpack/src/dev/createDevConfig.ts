import { HotModuleReplacementPlugin } from 'webpack'
import * as Config from 'webpack-chain'
import { App } from '@vuepress/core'
import { createClientBaseConfig } from '../config'

export const createDevConfig = (app: App): Config => {
  const isServer = false
  const isBuild = false

  const config = createClientBaseConfig({
    app,
    isBuild,
  })

  config.plugin('html').use(require('html-webpack-plugin'), [
    {
      template: app.options.templateDev,
    },
  ])

  config.plugin('hmr').use(HotModuleReplacementPlugin)

  // plugin hook: chainWebpack
  app.pluginApi.hooks.chainWebpack.process(config, isServer, isBuild)

  return config
}
