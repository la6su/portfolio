  uniform sampler2D tDiffuse;
  uniform float opacity;
  uniform float edgeWidth;
  uniform vec2 repeat;
  varying vec2 vUv;

  void main() {
    vec2 repeatedUv = fract(vUv * repeat);
    vec4 texColor = texture2D(tDiffuse, repeatedUv);
    
    // Используем белый цвет для линий
    vec3 lineColor = vec3(1.0, 1.0, 1.0);
    
    // Смешиваем белый цвет с текстурой
    vec3 finalColor = mix(lineColor, texColor.rgb, 1.0 - texColor.a);
    
    float distanceToEdge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    float edgeGradient = smoothstep(0.0, edgeWidth, distanceToEdge);
    
    gl_FragColor = vec4(finalColor, texColor.a * opacity * edgeGradient);
  }