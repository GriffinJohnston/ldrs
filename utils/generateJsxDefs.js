import { glob } from 'glob'
import * as fs from 'fs/promises'
import * as path from 'path'

const targetRuntimes = [
  'react/jsx-runtime',
  'preact/jsx-runtime',
  'solid-js/jsx-runtime',
]

const regex = /('l-[\w-]+': {[\s\S]*?})/m

async function generateJsxDefs() {
  const componentFiles = await glob('src/elements/*.ts') // Adjust this glob to match your structure

  const allProps = await Promise.all(
    componentFiles.sort().map(async (file) => {
      try {
        const fileContent = await fs.readFile(file, 'utf8')
        const match = fileContent.match(regex)

        if (match && match[1]) {
          return match && match[1] ? `      ${match[1].trim()}` : null
        }
      } catch (err) {
        console.error(`Error reading file ${file}:`, err)
      }
    }),
  )

  const filtered = allProps.filter(Boolean)

  if (filtered.length === 0) {
    console.warn('No IntrinsicElements found. Skipping type generation.')
    return
  }

  const aggregatedProperties = filtered.join('\n\n')

  const runtimeDeclarations = targetRuntimes
    .map(
      (runtime) => `
declare module '${runtime}' {
  namespace JSX {
    interface IntrinsicElements {
${aggregatedProperties}
    }
  }
}
`,
    )
    .join('')

  const outputDir = 'dist'
  const outputPath = path.join(outputDir, 'jsx.d.ts')
  const indexPath = path.join(outputDir, 'index.d.ts')

  try {
    await fs.mkdir(outputDir, { recursive: true })
    await fs.writeFile(
      outputPath,
      runtimeDeclarations.trim() + '\nexport {}',
      'utf8',
    )
    const indexContents = await fs.readFile(indexPath, 'utf8')
    await fs.writeFile(
      indexPath,
      "import './jsx.d.ts'\n" + indexContents,
      'utf8',
    )
    console.log(`Generated custom JSX types at ${outputPath}`)
  } catch (err) {
    console.error('Error writing .d.ts file:', err)
  }
}

generateJsxDefs()
