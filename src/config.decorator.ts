import 'reflect-metadata';

export const CONFIG_CLASS_KEY = Symbol('CONFIG_CLASS');

export function Config(): ClassDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function) => {
    Reflect.defineMetadata(CONFIG_CLASS_KEY, true, target);
  };
}
