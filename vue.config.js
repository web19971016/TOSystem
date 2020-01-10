module.exports = {
    //不生成map文件
    productionSourceMap:false,
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'api':'@/api',
                'plugins':'@/plugins',
            }
        }
    }
}