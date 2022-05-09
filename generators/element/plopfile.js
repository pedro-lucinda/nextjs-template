module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'input',
        name: 'path',
        message: 'path to component (after /src/)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/{{path}}/{{dashCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/{{path}}/{{dashCase name}}/stories/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/{{path}}/{{dashCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/{{path}}/{{dashCase name}}/test/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })
}
