import {join} from 'path';
import {SeedConfig} from './seed.config';
import {InjectableDependency, SassOptions} from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'foundation-sites/dist/foundation.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    let custom_sass_options: SassOptions = {
      includePaths: [
        'node_modules/foundation-sites/scss'
      ]
    };

    this.SASS_OPTIONS = Object.assign(this.SASS_OPTIONS, custom_sass_options);

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
