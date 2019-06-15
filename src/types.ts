export enum EventName {
  getApps = 'getApps',
  startDebugging = 'startDebugging',
  appStarted = 'appStarted',
}

export interface PageInfo {
  description: string
  devtoolsFrontendUrl: string
  id: string
  title: string
  type: 'node' | 'page' | 'webview'
  url: string
}

export interface AppInfo {
  id: string
  name: string
  icon: string
  appPath: string
  exePath: string
}

export type Dict<T> = { [key: string]: T }
