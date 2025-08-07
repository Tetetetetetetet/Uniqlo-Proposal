import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 设置目标分辨率
const TARGET_WIDTH = 600
const TARGET_HEIGHT = 800

// 处理单个图片
async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(outputPath)

    console.log(`✅ Processed: ${path.basename(inputPath)}`)
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error)
  }
}

// 处理目录中的所有图片
async function processDirectory(inputDir, outputDir) {
  // 确保输出目录存在
  try {
    await fs.mkdir(outputDir, { recursive: true })
  } catch (error) {
    if (error.code !== 'EEXIST') throw error
  }

  // 读取目录中的所有文件
  const files = await fs.readdir(inputDir)

  // 处理每个PNG文件
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png')) {
      const inputPath = path.join(inputDir, file)
      const outputPath = path.join(outputDir, file)
      await processImage(inputPath, outputPath)
    }
  }
}

// 主函数
async function main() {
  const publicDir = path.join(__dirname, '..', 'public')
  const inputImagesDir = path.join(publicDir, 'images')
  const outputImagesDir = path.join(publicDir, 'images_processed')

  // 处理主图片目录
  await processDirectory(inputImagesDir, outputImagesDir)

  // 处理products子目录
  const productsDir = path.join(inputImagesDir, 'products')
  try {
    await fs.access(productsDir)

    // 处理matching目录
    const matchingDir = path.join(productsDir, 'matching')
    const outputMatchingDir = path.join(outputImagesDir, 'products', 'matching')
    try {
      await fs.access(matchingDir)
      await processDirectory(matchingDir, outputMatchingDir)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }

    // 处理similar目录
    const similarDir = path.join(productsDir, 'similar')
    const outputSimilarDir = path.join(outputImagesDir, 'products', 'similar')
    try {
      await fs.access(similarDir)
      await processDirectory(similarDir, outputSimilarDir)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  console.log('✨ All images processed successfully!')
}

// 运行主函数
main().catch(console.error)
