/**
 * @const
 * @readonly
 * @kind module
 * @description Generic shaders
 */

declare module '*.glsl' {
  const value: string
  export default value
}

/**
 * @const
 * @readonly
 * @kind module
 * @description Vertex shaders
 */
declare module '*.vs' {
  const shader: string;
  export default shader;
}

/**
 * @const
 * @readonly
 * @kind module
 * @description Fragment shaders
 */
declare module '*.fs' {
  const shader: string;
  export default shader;
}