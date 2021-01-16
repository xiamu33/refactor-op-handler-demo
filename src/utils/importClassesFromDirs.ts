/*
 * @Author: xiamu
 * @Date: 2021-01-16 17:29:48
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 17:55:24
 * @FilePath: /refactor-op-handler-demo/src/utils/importClassesFromDirs.ts
 * @Description: 
 */

import * as path from 'path';

/**
 * 载入所给目录中所有导出的class
 */
export function importClassesFromDirs(directories: string[], formats = ['.js', '.ts']): Function[] {
  const loadFileClasses = function (exported: any, allLoaded: Function[]) {
    if (exported instanceof Function) {
      allLoaded.push(exported);
    } else if (exported instanceof Array) {
      exported.forEach((i: any) => loadFileClasses(i, allLoaded));
    } else if (exported instanceof Object || typeof exported === 'object') {
      Object.keys(exported).forEach(key => loadFileClasses(exported[key], allLoaded));
    }
    return allLoaded;
  };

  const allFiles = directories.reduce((allDirs, dir) => {
    return allDirs.concat(require('glob').sync(path.normalize(dir)));
  }, [] as string[]);

  const dirs = allFiles
    .filter(file => {
      const dtsExtension = file.substring(file.length - 5, file.length);
      return formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== '.d.ts';
    })
    .map(file => {
      return require(file);
    });

  return loadFileClasses(dirs, []);
}