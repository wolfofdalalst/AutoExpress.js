#!/usr/bin/env node

import { getProjectName, selectDb, selectStructure, selectRenderEngine } from '../interactive.js';
import { createProject } from '../lib/setup.js';

// Extract command line arguments
const args = process.argv.slice(2); // Exclude 'node' and script name

(async () => {
  if (args[0] === 'init') {
    const projectName = await getProjectName();
    const structure = await selectStructure();
    const database = await selectDb();
    const renderEngine = await selectRenderEngine();
    createProject(projectName, structure, database, renderEngine);
  }
  if (args[0] === 'new') {
    const folderName = args[1];
    createProject(folderName, 'API', 'MongoDB');
  }
})();
