// const fragmentShader = `

//     uniform float u_time;
//     uniform float u_lacunarity;
//     uniform float u_gain;
//     uniform vec3 u_colorA;
//     uniform vec3 u_colorB;
//     uniform vec3 u_cloudTint;

//     varying vec2 v_Uv;

//     vec3 colorA = vec3(0.071,0.302,0.847);
//     vec3 colorB = vec3(0.169,1.,0.906);

//     //   // Classic Perlin noise
// //   float cnoise(vec2 P)
// //   {
// //     vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
// //     vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
// //     Pi = mod289(Pi); // To avoid truncation effects in permutation
// //     vec4 ix = Pi.xzxz;
// //     vec4 iy = Pi.yyww;
// //     vec4 fx = Pf.xzxz;
// //     vec4 fy = Pf.yyww;

// //     vec4 i = permute(permute(ix) + iy);

// //     vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
// //     vec4 gy = abs(gx) - 0.5 ;
// //     vec4 tx = floor(gx + 0.5);
// //     gx = gx - tx;

// //     vec2 g00 = vec2(gx.x,gy.x);
// //     vec2 g10 = vec2(gx.y,gy.y);
// //     vec2 g01 = vec2(gx.z,gy.z);
// //     vec2 g11 = vec2(gx.w,gy.w);

// //     vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
// //     g00 *= norm.x;
// //     g01 *= norm.y;
// //     g10 *= norm.z;
// //     g11 *= norm.w;

// //     float n00 = dot(g00, vec2(fx.x, fy.x));
// //     float n10 = dot(g10, vec2(fx.y, fy.y));
// //     float n01 = dot(g01, vec2(fx.z, fy.z));
// //     float n11 = dot(g11, vec2(fx.w, fy.w));

// //     vec2 fade_xy = fade(Pf.xy);
// //     vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
// //     float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
// //     return 2.3 * n_xy;
// //   }


//     void main() {
//         vec2 normalizedPixel = gl_FragCoord.xy/500.0;
//         vec3 color = mix(colorA, colorB, normalizedPixel.x);

//     gl_FragColor = vec4(color,1.0);

// }`;

const fragmentShader = `

uniform float u_time;
uniform float u_lacunarity;
uniform float u_gain;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_cloudTint;

vec3 colorA = vec3(0.071,0.302,0.847);
vec3 colorB = vec3(0.169,1.,0.906);
vec3 colorC = vec3(0.,0.09,0.255);

varying vec3 vNormal;
varying vec3 vPosition;

varying vec2 v_Uv;

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec2 P)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute(permute(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy = abs(gx) - 0.5 ;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;

  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);

  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

float fbm(vec2 st) {
  const int OCTAVES = 5;
  // Initial values
  float value = 0.0;
  float amplitude = 0.6;
  // float frequency = 0.5;
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * abs(cnoise(st));
    st *= u_lacunarity;
    amplitude *= u_gain;
  }
  return value;
}

void main() {
  vec3 f_color = vec3(0.0);
  vec2 st = v_Uv * 0.250;
  float speed = 0.1;
  float f_time = u_time * speed;

  vec2 q = vec2(0.);
  q.x = fbm( st + 0.00 * f_time);
  q.y = fbm( st + vec2(1.0));

  vec2 r = vec2(0.);
  r.x = fbm( st + 1.0 * q + vec2(1.7,9.2)+ 0.15 * f_time );
  r.y = fbm( st + 1.0 * q + vec2(8.3,2.8)+ 0.126 * f_time);

    float f = fbm(st+r);

    f_color = mix(vec3(colorA),
                vec3(colorB),
                clamp((f*f)*4.0,0.0,1.0));

    f_color = mix(f_color,
                colorC,
                clamp(length(q),0.0,1.0));

    f_color *= mix(f_color,
                colorA,
                clamp(length(r.x),0.0,1.0));


    vec4 f_colorfrag = vec4(f_color,1.0);
    
   
        vec3 lightColor = vec3(1.0, 1.0, 1.0);
        vec3 lightDirection = vec3(1.0, 1.0, 1.0);

        vec3 norm = normalize(vNormal);
        float dotNL = clamp(dot(lightDirection, norm), 0.0, 1.0);


        // vec3 lightPosition = vec3(-10.0, 10.0, 0.0);
        // vec3 lightDirection = normalize(lightPosition - vPosition);
        // float dotNL = clamp(dot(lightDirection, vNormal), 0.0, 1.0);
        float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );


        intensity = 2.0;

        // f_colorfrag = f_colorfrag; // * intensity;// * dotNL;
        f_colorfrag = f_colorfrag * dotNL;

        // f_colorfrag = vec4(vNormal, 1.0) * dotNL;
        // f_colorfrag = vec4(vNormal, 1.0);


        // f_colorfrag = f_colorfrag * intensity * dotNL;

        //   return f_colorfrag;
        gl_FragColor = f_colorfrag;
}`;

export default fragmentShader