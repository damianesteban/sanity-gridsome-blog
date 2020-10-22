export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f9106f369ae254736633ebe',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-16qfa3qp',
                  apiId: 'f7c3038d-e0ec-40b1-a115-0c62343652cb'
                },
                {
                  buildHookId: '5f9106f3b892f552ccfc31b5',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-2tqs5f8m',
                  apiId: '83200db4-7ce3-4c41-9100-328f36915c20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damianesteban/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-2tqs5f8m.netlify.app', category: 'apps'}
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
