import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default [
	{
        input: './src/lib/Sodium.ts',
        external: [ 'typescript-collections', 'sanctuary-type-classes' ],
        output: [
          { file: "dist/sodium.umd.min.js", name: "Sodium", format: 'umd', sourcemap: true,
            globals: {
              'typescript-collections': 'Collections',
              'sanctuary-type-classes': 'Z',
            }
          },
        ],
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify( process.env['NODE_ENV'] )
            }),

            typescript(),

            uglify({}, minify)
        ]
	}
];