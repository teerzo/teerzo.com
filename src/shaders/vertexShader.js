const vertexShader = `
uniform float u_time;

varying vec2 v_Uv;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    // v_Uv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 2.0 + u_time * 0.3) * 0.1;

    // Uncomment the code and hit the refresh button below for a more complex effect 🪄
    modelPosition.y += sin(modelPosition.z * 1.0 + u_time * 0.3) * 0.1;

    // vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;


    vNormal = normalize( normalMatrix * normal );
    gl_Position = projectedPosition;

    vPosition = viewPosition.xyz;
}`;

// const vertexShader = `  
// uniform float u_time;
// varying vec2 v_Uv;

// void main() {
//     v_Uv = uv;
//     return position;
// }`;

export default vertexShader
