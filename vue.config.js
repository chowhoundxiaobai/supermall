module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 项目默认已经配置 '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

