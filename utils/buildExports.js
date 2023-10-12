import fs from 'fs'

fs.rmSync('src/auto', { recursive: true, force: true })

fs.mkdirSync('src/auto')

fs.readdir('./src/elements', (err, files) => {
  const loaders = files.filter((file) => file.includes('.js'))
  let indexString = ''

  loaders.forEach((file) => {
    const sansJs = file.replace('.js', '')
    indexString += `export { default as ${sansJs} } from './elements/${sansJs}'
    `
    fs.writeFileSync(
      `src/auto/${file}`,
      `import ${sansJs} from '../elements/${sansJs}'
${sansJs}.register()`,
    )
  })

  fs.writeFileSync(`src/index.js`, indexString)
})
