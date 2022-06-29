module.exports = {
    title: "Lyc's blog ",
    description: 'Just playing around',
    base: '/blog/',
    theme: 'vdoing',
    themeConfig: {
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                link: '/web/',
                items:  []
            },
            {
                text: '页面',
                link: '/ui/',
                items: []
            }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: null, // 导航栏logo
        repo: 'lyc2014/blog', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
        editLinks: false, // 启用编辑
        editLinkText: '编辑',
        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
        name: 'liyuancheng', // 必需
        link: 'https://github.com/lyc2014', // 可选的
        },
        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: '/blog/imgs/avatar.jpg',
            name: 'Leonardo',
            slogan: '前端界的小学生',
        },

    }
}