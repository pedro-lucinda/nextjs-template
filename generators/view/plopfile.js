module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application view logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'view name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/views/{{dashCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/views/{{dashCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/pages/{{dashCase name}}.tsx',
        templateFile: 'templates/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/views/{{dashCase name}}/test/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })
}
