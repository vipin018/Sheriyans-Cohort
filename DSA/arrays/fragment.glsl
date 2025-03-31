precision mediump float;

uniform sampler2D uTexture;
uniform float uTime;
uniform float uHover;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  // Add a subtle distortion on hover
  float distortion = sin(uv.y * 10.0 + uTime * 2.0) * 0.02 * uHover;
  uv.x += distortion;

  vec4 textureColor = texture2D(uTexture, uv);
  gl_FragColor = textureColor;
}
