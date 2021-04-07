export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606d3dafb976627369b5f80a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-gduow2ux',
                  apiId: '863989ae-1fe8-41b9-a4bd-fb5d1362664a'
                },
                {
                  buildHookId: '606d3db09b7eb17b60f45034',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tygga33a',
                  apiId: '504abf51-653c-4852-9d1d-f7f2c65115ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maswewe/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tygga33a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
