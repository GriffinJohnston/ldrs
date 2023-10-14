import fs from 'fs'

fs.rmSync('src/auto', { recursive: true, force: true })

fs.mkdirSync('src/auto')

fs.readdir('./src/elements', (err, files) => {
  const loaders = files.filter((file) => file.includes('.ts'))
  let indexString = ''

  loaders.forEach((file) => {
    const stem = file.replace('.ts', '')

    indexString += `export { default as ${stem} } from './elements/${stem}.js'
    `

    fs.writeFileSync(
      `src/auto/${file}`,
      `import ${stem} from '../elements/${stem}'
${stem}.register()`,
    )
  })

  fs.writeFileSync(`src/index.js`, indexString)
})
