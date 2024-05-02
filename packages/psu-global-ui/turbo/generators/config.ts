import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'name',
        name: 'name',
        message: 'Please enter the component name.',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: './src/index.ts',
        template: "export { {{pascalCase name}}, {{pascalCase name}}Props } from './components/{{pascalCase name}}/{{pascalCase name}}';"
      },
      {
        type: 'add',
        path: '../../apps/psu-storybook/src/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/story.hbs',
      },
    ],
  });
}