const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = [
    {
        mode: 'development',
        entry: {
            'sequence_labeling': './static/js/sequence_labeling.js',
            'document_classification': './static/js/document_classification.js',
            'seq2seq': './static/js/seq2seq.js',
            'projects': './static/js/projects.js',
            'stats': './static/js/stats.js',
            'label': './static/js/label.js',
            'guideline': './static/js/guideline.js',
            'demo_text_classification': './static/js/demo/demo_text_classification.js',
            'demo_named_entity': './static/js/demo/demo_named_entity.js',
            'demo_translation': './static/js/demo/demo_translation.js',
            'upload': './static/js/upload.js',
            'swiper': './static/js/swiper.js'
        },
        output: {
            path: __dirname + '/static/bundle',
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
            },
        },
    },
    {
        mode: 'development',
        entry: {
            'forum': './static/css/forum.css',
            'annotation': './static/css/annotation.css',
            'admin': './static/css/admin.css'
        },
        output: {
            path: __dirname + '/static/bundle',
            publicPath: '/static/bundle/',
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.css/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(svg|webp|gif|eot|otf|ttf|woff|woff2|ani)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 10000
                    }
                },
            ]
        }
    }
    ];
